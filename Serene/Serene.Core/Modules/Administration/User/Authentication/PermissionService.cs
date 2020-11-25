using Serene.Administration.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Serene.Administration
{
    public class PermissionService : IPermissionService
    {
        public bool HasPermission(string permission)
        {
            if (Authorization.Username == "admin")
                return true;

            var user = (UserDefinition)Authorization.UserDefinition;
            if (user == null)
                return false;

            bool grant;
            if (GetUserPermissions(user.UserId).TryGetValue(permission, out grant))
                return grant;

            foreach (var roleId in GetUserRoles(user.UserId))
            {
                if (GetRolePermissions(roleId).Contains(permission))
                    return true;
            }

            return false;
        }

        private Dictionary<string, bool> GetUserPermissions(int userId)
        {
            var fld = UserPermissionRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("UserPermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    connection.List<UserPermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Select(fld.Granted)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result[x.PermissionKey] = x.Granted ?? true);

                    var implicitPermissions = new Repositories.UserPermissionRepository().ImplicitPermissions;
                    foreach (var pair in result.ToArray())
                    {
                        HashSet<string> list;
                        if (pair.Value && implicitPermissions.TryGetValue(pair.Key, out list))
                            foreach (var x in list)
                                result[x] = true;
                    }

                    return result;
                }
            });
        }

        private HashSet<string> GetRolePermissions(int userId)
        {
            var fld = RolePermissionRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("RolePermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                    connection.List<RolePermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Where(new Criteria(fld.RoleId) == userId))
                        .ForEach(x => result.Add(x.PermissionKey));

                    var implicitPermissions = new Repositories.UserPermissionRepository().ImplicitPermissions;
                    foreach (var key in result.ToArray())
                    {
                        HashSet<string> list;
                        if (implicitPermissions.TryGetValue(key, out list))
                            foreach (var x in list)
                                result.Add(x);
                    }

                    return result;
                }
            });
        }

        private HashSet<int> GetUserRoles(int userId)
        {
            var fld = UserRoleRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("UserRoles:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<int>();

                    connection.List<UserRoleRow>(q => q
                            .Select(fld.RoleId)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result.Add(x.RoleId.Value));

                    return result;
                }
            });
        }
    }
}