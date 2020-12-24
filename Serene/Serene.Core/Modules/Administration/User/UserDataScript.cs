using Serenity;
using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using Serene.Administration.Entities;
using Serene.Administration.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Serene.Administration
{
    /// <summary>
    /// This declares a dynamic script with key 'UserData' that will be available from client side.
    /// </summary>
    [DataScript("UserData", CacheDuration = -1, Permission = "*")]
    public class UserDataScript : DataScript<ScriptUserDefinition>
    {
        private IRequestContext Context { get; }
        private ISqlConnections SqlConnections { get; }
        private ITypeSource TypeSource { get; }
        private IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }

        public UserDataScript(IRequestContext context, ISqlConnections sqlConnections,
            ITypeSource typeSource, IUserAccessor userAccessor, IUserRetrieveService userRetrieveService)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
            TypeSource = typeSource ?? throw new ArgumentNullException(nameof(typeSource));
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            UserRetriever = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
        }

        protected override ScriptUserDefinition GetData()
        { 
            var result = new ScriptUserDefinition();

            if (!(UserAccessor.User?.GetUserDefinition(UserRetriever) is UserDefinition user))
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";

            result.Permissions = Context.Cache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    var permissionsUsedFromScript = Context.Cache.GetLocalStoreOnly("PermissionsUsedFromScript",
                        TimeSpan.Zero, RoleRow.Fields.GenerationKey, () =>
                        {
                            return new UserPermissionRepository(Context)
                                .ListPermissionKeys(SqlConnections, TypeSource)
                                .Entities.Where(permissionKey =>
                                {
                                    // this sends permission information for all permission keys to client side.
                                    // if you don't need all of them to be available from script, filter them here.
                                    // this is recommended for security / performance reasons...
                                    return true;
                                }).ToArray();
                        });

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Context.Permissions.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
