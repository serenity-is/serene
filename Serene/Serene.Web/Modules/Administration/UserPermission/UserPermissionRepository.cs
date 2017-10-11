
namespace Serene.Administration.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Extensibility;
    using Serenity.Localization;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Reflection;
    using MyRow = Entities.UserPermissionRow;

    public class UserPermissionRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");
            Check.NotNull(request.Permissions, "permissions");

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

                new SqlDelete(fld.TableName)
                    .Where(
                        new Criteria(fld.UserId) == userID &
                        new Criteria(fld.PermissionKey) == k)
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
                    new SqlUpdate(fld.TableName)
                        .Where(
                            fld.UserId == userID &
                            fld.PermissionKey == k)
                        .Set(fld.Granted, newList[k])
                        .Execute(uow.Connection);
                }
            }

            BatchGenerationUpdater.OnCommit(uow, fld.GenerationKey);

            return new SaveResponse();
        }

        private List<MyRow> GetExisting(IDbConnection connection, Int32 userId, string module, string submodule)
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
                q.Select(fld.UserPermissionId, fld.PermissionKey, fld.Granted)
                    .Where(new Criteria(fld.UserId) == userId);

                if (prefix.Length > 0)
                    q.Where(~(
                        new Criteria(fld.PermissionKey) == prefix |
                        new Criteria(fld.PermissionKey).StartsWith(prefix + ":")));
            });
        }

        public ListResponse<UserPermissionRow> List(IDbConnection connection, UserPermissionListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");

            string prefix = "";
            string module = request.Module.TrimToEmpty();
            string submodule = request.Submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;

            if (submodule.Length > 0)
                prefix += ":" + submodule;

            var response = new ListResponse<UserPermissionRow>();

            response.Entities = GetExisting(connection, request.UserID.Value, request.Module, request.Submodule);

            return response;
        }

        public ListResponse<string> ListRolePermissions(IDbConnection connection, UserPermissionListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");

            string prefix = "";
            var module = request.Module.TrimToEmpty();
            var submodule = request.Submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;

            if (submodule.Length > 0)
                prefix += ":" + submodule;

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

        private static readonly string[] emptyPermissions = new string[0];
        private static readonly char[] splitChar = new char[] { '|', '&' };

        private string[] SplitPermissions(string permission)
        {
            if (string.IsNullOrEmpty(permission))
                return emptyPermissions;

            return permission.Split(splitChar, StringSplitOptions.RemoveEmptyEntries);
        }

        private void ProcessAttributes<TAttr>(HashSet<string> hash,
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

        public ListResponse<string> ListPermissionKeys()
        {
            return LocalCache.Get("Administration:PermissionKeys", TimeSpan.Zero, () =>
            {
                var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                result.AddRange(NestedPermissionKeyRegistration.AddNestedPermissions(registry: null));

                foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
                {
                    foreach (var attr in assembly.GetCustomAttributes<PermissionAttributeBase>())
                        if (!attr.Permission.IsEmptyOrNull())
                            result.AddRange(SplitPermissions(attr.Permission));

                    foreach (var type in assembly.GetTypes())
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
                }

                result.Remove("*");
                result.Remove("?");

                return new ListResponse<string>
                {
                    Entities = new List<string>(result)
                };
            });
        }

        public Dictionary<string, HashSet<string>> ImplicitPermissions
        {
            get
            {
                return LocalCache.Get("ImplicitPermissions", TimeSpan.Zero, () =>
                {
                    var result = new Dictionary<string, HashSet<string>>(StringComparer.OrdinalIgnoreCase);

                    Action<Type> addFrom = null;
                    addFrom = (type) =>
                    {
                        foreach (var member in type.GetFields(BindingFlags.Static | BindingFlags.DeclaredOnly |
                            BindingFlags.Public | BindingFlags.NonPublic))
                        {
                            if (member.FieldType != typeof(String))
                                continue;

                            var key = member.GetValue(null) as string;
                            if (key == null)
                                continue;

                            foreach (var attr in member.GetCustomAttributes<ImplicitPermissionAttribute>())
                            {
                                HashSet<string> list;
                                if (!result.TryGetValue(key, out list))
                                {
                                    list = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                                    result[key] = list;
                                }

                                list.Add(attr.Value);
                            }
                        }

                        foreach (var nested in type.GetNestedTypes(BindingFlags.Public | BindingFlags.DeclaredOnly))
                            addFrom(nested);
                    };

                    foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
                    {
                        foreach (var type in assembly.GetTypes())
                        {
                            var attr = type.GetCustomAttribute<NestedPermissionKeysAttribute>();
                            if (attr != null)
                                addFrom(type);
                        }
                    }

                    return result;
                });
            }
        }
    }
}