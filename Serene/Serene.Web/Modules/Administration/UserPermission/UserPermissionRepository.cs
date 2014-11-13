
namespace Serene.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Extensibility;
    using Serenity.Services;
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
            var oldList = new HashSet<string>(
                GetExisting(uow.Connection, userID, request.Module, request.Submodule)
                .Select(x => x.PermissionKey), StringComparer.OrdinalIgnoreCase);

            var newList = new HashSet<string>(request.Permissions.ToList(),
                StringComparer.OrdinalIgnoreCase);

            if (oldList.SetEquals(newList))
                return new SaveResponse();

            foreach (var k in oldList)
            {
                if (newList.Contains(k))
                    continue;

                new SqlDelete(fld.TableName)
                    .Where(
                        new Criteria(fld.UserId) == userID &
                        new Criteria(fld.PermissionKey) == k)
                    .Execute(uow.Connection);
            }

            foreach (var k in newList)
            {
                if (oldList.Contains(k))
                    continue;

                uow.Connection.Insert(new MyRow
                {
                    UserId = userID,
                    PermissionKey = k
                });
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
                q.Select(fld.UserPermissionId, fld.PermissionKey)
                    .Where(new Criteria(fld.UserId) == userId);

                if (prefix.Length > 0)
                    q.Where(
                        new Criteria(fld.PermissionKey) == prefix |
                        new Criteria(fld.PermissionKey).StartsWith(prefix + ":"));
            });
        }

        public UserPermissionListResponse List(IDbConnection connection, UserPermissionListRequest request)
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

            var response = new UserPermissionListResponse();

            response.Entities = GetExisting(connection, request.UserID.Value, request.Module, request.Submodule)
                .Select(x => x.PermissionKey).ToList();

            return response;
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

        public UserPermissionListResponse ListPermissionKeys()
        {
            return LocalCache.Get("Administration:PermissionKeys", TimeSpan.Zero, () =>
            {
                var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
                {
                    foreach (var type in assembly.GetTypes())
                    {
                        ProcessAttributes<PermissionAttributeBase>(result, type, x => x.Permission);
                        ProcessAttributes<ServiceAuthorizeAttribute>(result, type, x => x.Permission);

                        foreach (var member in type.GetMethods(BindingFlags.Instance | BindingFlags.Public))
                        {
                            ProcessAttributes<PermissionAttributeBase>(result, member, x => x.Permission);
                            ProcessAttributes<ServiceAuthorizeAttribute>(result, member, x => x.Permission);
                        }
                    }
                }

                result.Remove("*");
                result.Remove("?");

                return new UserPermissionListResponse
                {
                    Entities = new List<string>(result)
                };
            });
        }
    }
}