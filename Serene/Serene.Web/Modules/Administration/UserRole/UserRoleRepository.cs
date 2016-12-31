
namespace Serene.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Reflection;
    using MyRow = Entities.UserRoleRow;

    public class UserRoleRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserRoleUpdateRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");
            Check.NotNull(request.Roles, "permissions");

            var userID = request.UserID.Value;
            var oldList = new HashSet<Int32>(
                GetExisting(uow.Connection, userID)
                .Select(x => x.RoleId.Value));

            var newList = new HashSet<Int32>(request.Roles.ToList());

            if (oldList.SetEquals(newList))
                return new SaveResponse();

            foreach (var k in oldList)
            {
                if (newList.Contains(k))
                    continue;

                new SqlDelete(fld.TableName)
                    .Where(
                        new Criteria(fld.UserId) == userID &
                        new Criteria(fld.RoleId) == k)
                    .Execute(uow.Connection);
            }

            foreach (var k in newList)
            {
                if (oldList.Contains(k))
                    continue;

                uow.Connection.Insert(new MyRow
                {
                    UserId = userID,
                    RoleId = k
                });
            }

            BatchGenerationUpdater.OnCommit(uow, fld.GenerationKey);
            BatchGenerationUpdater.OnCommit(uow, Entities.UserPermissionRow.Fields.GenerationKey);

            return new SaveResponse();
        }

        private List<MyRow> GetExisting(IDbConnection connection, Int32 userId)
        {
            return connection.List<MyRow>(q =>
            {
                q.Select(fld.UserRoleId, fld.RoleId)
                    .Where(new Criteria(fld.UserId) == userId);
            });
        }

        public UserRoleListResponse List(IDbConnection connection, UserRoleListRequest request)
        {
            Check.NotNull(request, "request");
            Check.NotNull(request.UserID, "userID");

            var response = new UserRoleListResponse();

            response.Entities = GetExisting(connection, request.UserID.Value)
                .Select(x => x.RoleId.Value).ToList();

            return response;
        }

        private void ProcessAttributes<TAttr>(HashSet<string> hash, MemberInfo member, Func<TAttr, string> getRole)
            where TAttr : Attribute
        {
            foreach (var attr in member.GetCustomAttributes<TAttr>())
            {
                var permission = getRole(attr);
                if (!permission.IsEmptyOrNull())
                    hash.Add(permission);
            }
        }
    }
}