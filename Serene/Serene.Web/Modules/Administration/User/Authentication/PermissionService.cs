using Serene.Administration.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using Serene.Administration.Repositories;

namespace Serene.Administration
{
    public class PermissionService : IPermissionService
    {
        protected ITwoLevelCache Cache { get; }
        protected ISqlConnections SqlConnections { get; }
        public ITypeSource TypeSource { get; }
        protected IUserAccessor UserAccessor { get; }

        public PermissionService(ITwoLevelCache cache, ISqlConnections sqlConnections, 
            ITypeSource typeSource, IUserAccessor userAccessor)
        {
            Cache = cache ?? throw new ArgumentNullException(nameof(cache));
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
            TypeSource = typeSource ?? throw new ArgumentNullException(nameof(typeSource));
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
        }

        public bool HasPermission(string permission)
        {
            if (permission == null)
                return false;

            if (permission == "*")
                return true;

            var isLoggedIn = UserAccessor.IsLoggedIn();

            if (permission == "?")
                return isLoggedIn;

            if (!isLoggedIn)
                return false;

            var username = UserAccessor.User?.Identity?.Name;
            if (username == "admin")
                return true;

            // only admin has impersonation permission
            if (string.Compare(permission, "ImpersonateAs", StringComparison.OrdinalIgnoreCase) == 0)
                return false;

            var userId = Convert.ToInt32(UserAccessor.User.GetIdentifier());

            bool grant;
            if (GetUserPermissions(userId).TryGetValue(permission, out grant))
                return grant;

            foreach (var roleId in GetUserRoles(userId))
            {
                if (GetRolePermissions(roleId).Contains(permission))
                    return true;
            }

            return false;
        }

        private Dictionary<string, bool> GetUserPermissions(int userId)
        {
            var fld = UserPermissionRow.Fields;

            return Cache.GetLocalStoreOnly("UserPermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    connection.List<UserPermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Select(fld.Granted)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result[x.PermissionKey] = x.Granted ?? true);

                    var implicitPermissions = UserPermissionRepository.GetImplicitPermissions(Cache.Memory, TypeSource);
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

        private HashSet<string> GetRolePermissions(int roleId)
        {
            var fld = RolePermissionRow.Fields;

            return Cache.GetLocalStoreOnly("RolePermissions:" + roleId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                    connection.List<RolePermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Where(new Criteria(fld.RoleId) == roleId))
                        .ForEach(x => result.Add(x.PermissionKey));

                    var implicitPermissions = UserPermissionRepository.GetImplicitPermissions(Cache.Memory, TypeSource);
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

            return Cache.GetLocalStoreOnly("UserRoles:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
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