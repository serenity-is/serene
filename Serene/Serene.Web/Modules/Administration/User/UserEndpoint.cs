

namespace Serene.Administration.Endpoints
{
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;

    [ServiceAuthorize]
    [RoutePrefix("Services/Administration/User"), Route("{action}")]
    public class UserController : Controller
    {
        [AcceptVerbs("POST"), JsonFilter]
        public Result<SaveResponse> Create(SaveRequest<MyRow> request)
        {
            return this.InTransaction("Default", (uow) => new MyRepository().Create(uow, request));
        }

        [AcceptVerbs("POST"), JsonFilter]
        public Result<SaveResponse> Update(SaveRequest<MyRow> request)
        {
            return this.InTransaction("Default", (uow) => new MyRepository().Update(uow, request));
        }
 
        [AcceptVerbs("POST"), JsonFilter]
        public Result<DeleteResponse> Delete(DeleteRequest request)
        {
            return this.InTransaction("Default", (uow) => new MyRepository().Delete(uow, request));
        }

        [AcceptVerbs("POST"), JsonFilter]
        public Result<UndeleteResponse> Undelete(UndeleteRequest request)
        {
            return this.InTransaction("Default", (uow) => new MyRepository().Undelete(uow, request));
        }

        [AcceptVerbs("GET", "POST"), JsonFilter]
        public Result<RetrieveResponse<MyRow>> Retrieve(RetrieveRequest request)
        {
            return this.UseConnection("Default", (cnn) => new MyRepository().Retrieve(cnn, request));
        }

        [AcceptVerbs("GET", "POST"), JsonFilter]
        public Result<ListResponse<MyRow>> List(ListRequest request)
        {
            return this.UseConnection("Default", (cnn) => new MyRepository().List(cnn, request));
        }

        private static string[] permissionsUsedFromScript;

        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1)]
        public ScriptUserDefinition GetUserData()
        {
            var result = new ScriptUserDefinition();
            var user = Authorization.UserDefinition as UserDefinition;

            if (user == null)
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;

            result.Permissions = TwoLevelCache.GetLocalStoreOnly("UserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    if (permissionsUsedFromScript == null)
                    {
                        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                            .Where(permissionKey =>
                            {
                                // this sends permission information for all permission keys to client side.
                                // if you don't need all of them to be available from script, filter them here.
                                // this is recommended for security / performance reasons...
                                return true;
                            }).ToArray();
                    }

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
