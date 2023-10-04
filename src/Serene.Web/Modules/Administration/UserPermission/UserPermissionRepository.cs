using Serenity.Localization;
using System.Data;
using System.Reflection;
using MyRow = Serene.Administration.UserPermissionRow;
using Microsoft.Extensions.Caching.Memory;

namespace Serene.Administration.Repositories;

public class UserPermissionRepository : BaseRepository
{
    public UserPermissionRepository(IRequestContext context)
         : base(context)
    {
    }

    private static MyRow.RowFields Fld { get { return MyRow.Fields; } }

    public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
    {
        if (request is null)
            throw new ArgumentNullException(nameof(request));
        if (request.UserID is null)
            throw new ArgumentNullException(nameof(request.UserID));
        if (request.Permissions is null)
            throw new ArgumentNullException(nameof(request.Permissions));

        var userID = request.UserID.Value;
        var oldList = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
        foreach (var p in GetExisting(uow.Connection, userID, request.Module, request.Submodule))
            oldList[p.PermissionKey] = p.Granted.Value;

        var newList = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
        foreach (var p in request.Permissions)
            newList[p.PermissionKey] = p.Granted ?? false;

        if (oldList.Count == newList.Count &&
            oldList.All(x => newList.ContainsKey(x.Key) && newList[x.Key] == x.Value))
            return new SaveResponse();

        foreach (var k in oldList.Keys)
        {
            if (newList.ContainsKey(k))
                continue;

            new SqlDelete(Fld.TableName)
                .Where(
                    new Criteria(Fld.UserId) == userID &
                    new Criteria(Fld.PermissionKey) == k)
                .Execute(uow.Connection);
        }

        foreach (var k in newList.Keys)
        {
            if (!oldList.ContainsKey(k))
            {
                uow.Connection.Insert(new MyRow
                {
                    UserId = userID,
                    PermissionKey = k,
                    Granted = newList[k]
                });
            }
            else if (oldList[k] != newList[k])
            {
                new SqlUpdate(Fld.TableName)
                    .Where(
                        Fld.UserId == userID &
                        Fld.PermissionKey == k)
                    .Set(Fld.Granted, newList[k])
                    .Execute(uow.Connection);
            }
        }

        Cache.InvalidateOnCommit(uow, Fld);

        return new SaveResponse();
    }

    private List<MyRow> GetExisting(IDbConnection connection, int userId, string module, string submodule)
    {
        string prefix = "";
        module = module.TrimToEmpty();
        submodule = submodule.TrimToEmpty();

        if (module.Length > 0)
            prefix = module;

        if (submodule.Length > 0)
            prefix += ":" + submodule;

        return connection.List<MyRow>(q =>
        {
            q.Select(Fld.UserPermissionId, Fld.PermissionKey, Fld.Granted)
                .Where(new Criteria(Fld.UserId) == userId);

            if (prefix.Length > 0)
                q.Where(~(
                    new Criteria(Fld.PermissionKey) == prefix |
                    new Criteria(Fld.PermissionKey).StartsWith(prefix + ":")));
        });
    }

    public ListResponse<MyRow> List(IDbConnection connection, UserPermissionListRequest request)
    {
        if (request is null)
            throw new ArgumentNullException(nameof(request));
        if (request.UserID is null)
            throw new ArgumentNullException(nameof(request.UserID));

        var response = new ListResponse<MyRow>
        {
            Entities = GetExisting(connection, request.UserID.Value, request.Module, request.Submodule)
        };

        return response;
    }

    public ListResponse<string> ListRolePermissions(IDbConnection connection, UserPermissionListRequest request)
    {
        if (request is null)
            throw new ArgumentNullException(nameof(request));
        if (request.UserID is null)
            throw new ArgumentNullException(nameof(request.UserID));

        var rp = RolePermissionRow.Fields.As("rp");
        var ur = UserRoleRow.Fields.As("ur");

        var query = new SqlQuery()
            .From(rp)
            .Select(rp.PermissionKey)
            .Distinct(true)
            .OrderBy(rp.PermissionKey);

        query.Where(rp.RoleId.In(
            query.SubQuery()
                .From(ur)
                .Select(ur.RoleId)
                .Where(ur.UserId == request.UserID.Value)
        ));

        return new ListResponse<string>
        {
            Entities = connection.Query<string>(query).ToList()
        };
    }

    private static readonly string[] emptyPermissions = Array.Empty<string>();
    private static readonly char[] splitChar = new char[] { '|', '&' };

    private static string[] SplitPermissions(string permission)
    {
        if (string.IsNullOrEmpty(permission))
            return emptyPermissions;

        return permission.Split(splitChar, StringSplitOptions.RemoveEmptyEntries);
    }

    private static void ProcessAttributes<TAttr>(HashSet<string> hash,
            MemberInfo member, Func<TAttr, string> getPermission)
        where TAttr : Attribute
    {
        try
        {
            foreach (var attr in member.GetCustomAttributes<TAttr>(false))
            {
                var permission = getPermission(attr);
                hash.AddRange(SplitPermissions(permission));
            }
        }
        catch
        {
            // GetCustomAttributes might fail before .NET 4.6
        }
    }

    private static void ProcessAttributes<TAttr>(HashSet<string> hash,
            Type member, Func<TAttr, string> getPermission)
        where TAttr : Attribute
    {
        try
        {
            foreach (var attr in member.GetCustomAttributes<TAttr>(false))
            {
                var permission = getPermission(attr);
                hash.AddRange(SplitPermissions(permission));
            }
        }
        catch
        {
            // GetCustomAttributes might fail before .NET 4.6
        }
    }

    public static IEnumerable<string> ListPermissionKeys(ITwoLevelCache cache, ISqlConnections sqlConnections, 
        ITypeSource typeSource, bool includeRoles = false)
    {
        if (typeSource is null)
            throw new ArgumentNullException(nameof(typeSource));

        return cache.GetLocalStoreOnly("Administration:PermissionKeys:" + 
            (includeRoles ? "IR" : "XR"), TimeSpan.Zero, RoleRow.Fields.GenerationKey, () =>
        {
            var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            result.AddRange(NestedPermissionKeyRegistration.AddNestedPermissions(registry: null, typeSource));

            foreach (var attr in typeSource.GetAssemblyAttributes<PermissionAttributeBase>())
                if (!attr.Permission.IsEmptyOrNull())
                    result.AddRange(SplitPermissions(attr.Permission));

            foreach (var type in typeSource.GetTypes())
            {
                ProcessAttributes<PageAuthorizeAttribute>(result, type, x => x.Permission);
                ProcessAttributes<PermissionAttributeBase>(result, type, x => x.Permission);
                ProcessAttributes<ServiceAuthorizeAttribute>(result, type, x => x.Permission);

                foreach (var member in type.GetMethods(BindingFlags.Instance | BindingFlags.Public))
                {
                    ProcessAttributes<PageAuthorizeAttribute>(result, member, x => x.Permission);
                    ProcessAttributes<PermissionAttributeBase>(result, member, x => x.Permission);
                    ProcessAttributes<ServiceAuthorizeAttribute>(result, member, x => x.Permission);
                }

                foreach (var member in type.GetProperties(BindingFlags.Instance | BindingFlags.Public))
                    if (member.GetIndexParameters().Length == 0)
                        ProcessAttributes<PermissionAttributeBase>(result, member, x => x.Permission);
            }

            result.Remove("ImpersonateAs");
            result.Remove("*");
            result.Remove("?");

            foreach (var perm in result.Where(x =>
                x.StartsWith("Role:", StringComparison.OrdinalIgnoreCase)).ToList())
            {
                result.Remove(perm);
            }

            return result;
        });
    }

    public static IDictionary<string, HashSet<string>> GetImplicitPermissions(IMemoryCache memoryCache, 
        ITypeSource typeSource)
    {
        if (memoryCache is null)
            throw new ArgumentNullException(nameof(memoryCache));

        if (typeSource is null)
            throw new ArgumentNullException(nameof(typeSource));

        return memoryCache.Get<IDictionary<string, HashSet<string>>>("ImplicitPermissions", TimeSpan.Zero, () =>
        {
            var result = new Dictionary<string, HashSet<string>>(StringComparer.OrdinalIgnoreCase);

            void addFrom(Type type)
            {
                foreach (var member in type.GetFields(BindingFlags.Static | BindingFlags.DeclaredOnly |
                    BindingFlags.Public | BindingFlags.NonPublic))
                {
                    if (member.FieldType != typeof(string))
                        continue;

                    if (member.GetValue(null) is not string key)
                        continue;

                    foreach (var attr in member.GetCustomAttributes<ImplicitPermissionAttribute>())
                    {
                        if (!result.TryGetValue(key, out HashSet<string> list))
                        {
                            list = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                            result[key] = list;
                        }

                        list.Add(attr.Value);
                    }
                }

                foreach (var nested in type.GetNestedTypes(BindingFlags.Public | BindingFlags.DeclaredOnly))
                    addFrom(nested);
            }

            foreach (var type in typeSource.GetTypesWithAttribute(
                typeof(NestedPermissionKeysAttribute)))
            {
                addFrom(type);
            }

            return result;
        });
    }
}