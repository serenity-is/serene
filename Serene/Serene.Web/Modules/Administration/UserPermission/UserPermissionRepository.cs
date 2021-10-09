using Microsoft.Extensions.Caching.Memory;
using Serene.Administration.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Localization;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using MyRow = Serene.Administration.Entities.UserPermissionRow;

namespace Serene.Administration.Repositories
{
    public class UserPermissionRepository : BaseRepository
    {
        public UserPermissionRepository(IRequestContext context)
             : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.UserID is null)
                throw new ArgumentNullException("userID");
            if (request.Permissions is null)
                throw new ArgumentNullException("permissions");

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

            Cache.InvalidateOnCommit(uow, fld);

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
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.UserID is null)
                throw new ArgumentNullException("userID");

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
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.UserID is null)
                throw new ArgumentNullException("userID");

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

        public static IEnumerable<string> ListPermissionKeys(IMemoryCache memoryCache, ITypeSource typeSource)
        {
            if (typeSource is null)
                throw new ArgumentNullException(nameof(typeSource));

            return memoryCache.Get("Administration:PermissionKeys", TimeSpan.Zero, () =>
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

                result.Remove("*");
                result.Remove("?");

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

                foreach (var type in typeSource.GetTypesWithAttribute(
                    typeof(NestedPermissionKeysAttribute)))
                {
                    addFrom(type);
                }

                return result;
            });
        }
    }
}