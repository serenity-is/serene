using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using MyRow = Serene.Administration.Entities.UserRoleRow;

namespace Serene.Administration.Repositories
{
    public class UserRoleRepository : BaseRepository
    {
        public UserRoleRepository(IRequestContext context)
             : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserRoleUpdateRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.UserID is null)
                throw new ArgumentNullException("userID");
            if (request.Roles is null)
                throw new ArgumentNullException("permissions");

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

            Cache.InvalidateOnCommit(uow, fld);
            Cache.InvalidateOnCommit(uow, Entities.UserPermissionRow.Fields);

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
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.UserID is null)
                throw new ArgumentNullException("userID");

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