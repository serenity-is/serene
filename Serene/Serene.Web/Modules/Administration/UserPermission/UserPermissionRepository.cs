
namespace Serene.Administration.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Extensibility;
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
                oldList[p.PermissionKey] = p.Grant.Value;

            var newList = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
            foreach (var p in request.Permissions)
                newList[p.PermissionKey] = p.Grant ?? false;

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
                        Grant = newList[k]
                    });
                }
                else if (oldList[k] != newList[k])
                {
                    new SqlUpdate(fld.TableName)
                        .Where(
                            fld.UserId == userID &
                            fld.PermissionKey == k)
                        .Set(fld.Grant, newList[k])
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
                q.Select(fld.UserPermissionId, fld.PermissionKey, fld.Grant)
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

        private void ProcessAttributes<TAttr>(HashSet<string> hash, MemberInfo member, Func<TAttr, string> getPermission)
            where TAttr: Attribute
        {
            foreach (var attr in member.GetCustomAttributes<TAttr>())
            {
                var permission = getPermission(attr);
                if (!permission.IsEmptyOrNull())
                    hash.Add(permission);
            }
        }

        public ListResponse<string> ListPermissionKeys()
        {
            return LocalCache.Get("Administration:PermissionKeys", TimeSpan.Zero, () =>
            {
                var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
                {
                    foreach (var attr in assembly.GetCustomAttributes<PermissionAttributeBase>())
                        if (!attr.Permission.IsEmptyOrNull())
                            result.Add(attr.Permission);

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
    }
}