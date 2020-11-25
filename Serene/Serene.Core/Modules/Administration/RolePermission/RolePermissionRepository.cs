using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRow = Serene.Administration.Entities.RolePermissionRow;

namespace Serene.Administration.Repositories
{
    public class RolePermissionRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.RoleID, "roleID");
            Check.NotNull(request.Permissions, "permissions");

            var roleID = request.RoleID.Value;
            var oldList = new HashSet<string>(
                GetExisting(uow.Connection, roleID, request.Module, request.Submodule)
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
                        new Criteria(fld.RoleId) == roleID &
                        new Criteria(fld.PermissionKey) == k)
                    .Execute(uow.Connection);
            }

            foreach (var k in newList)
            {
                if (oldList.Contains(k))
                    continue;

                uow.Connection.Insert(new MyRow
                {
                    RoleId = roleID,
                    PermissionKey = k
                });
            }

            BatchGenerationUpdater.OnCommit(uow, fld.GenerationKey);
            BatchGenerationUpdater.OnCommit(uow, Entities.UserPermissionRow.Fields.GenerationKey);

            return new SaveResponse();
        }

        private List<MyRow> GetExisting(IDbConnection connection, Int32 roleId, string module, string submodule)
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
                q.Select(fld.RolePermissionId, fld.PermissionKey)
                    .Where(new Criteria(fld.RoleId) == roleId);

                if (prefix.Length > 0)
                    q.Where(
                        new Criteria(fld.PermissionKey) == prefix |
                        new Criteria(fld.PermissionKey).StartsWith(prefix + ":"));
            });
        }

        public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.RoleID, "roleID");

            string prefix = "";
            string module = request.Module.TrimToEmpty();
            string submodule = request.Submodule.TrimToEmpty();

            if (module.Length > 0)
                prefix = module;

            if (submodule.Length > 0)
                prefix += ":" + submodule;

            var response = new RolePermissionListResponse();
            
            response.Entities = GetExisting(connection, request.RoleID.Value, request.Module, request.Submodule)
                .Select(x => x.PermissionKey).ToList();

            return response;
        }
    }
}