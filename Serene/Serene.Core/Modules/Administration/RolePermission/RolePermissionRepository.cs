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
    public class RolePermissionRepository : BaseRepository
    {
        public RolePermissionRepository(IRequestContext context)
             : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.RoleID is null)
                throw new ArgumentNullException("roleID");
            if (request.Permissions is null)
                throw new ArgumentNullException("permissions");

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

            Cache.InvalidateOnCommit(uow, fld);
            Cache.InvalidateOnCommit(uow, Entities.UserPermissionRow.Fields);

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
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.RoleID is null)
                throw new ArgumentNullException("roleID");

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