
namespace Serene.Administration.Endpoints
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserPermissionRepository;
    using MyRow = Entities.UserPermissionRow;

    [RoutePrefix("Services/Administration/UserPermission"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(Administration.PermissionKeys.Security)]
    public class UserPermissionController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        public UserPermissionListResponse List(IDbConnection connection, UserPermissionListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [DataScript("Administration.PermissionKeys")]
        public UserPermissionListResponse ListPermissionKeys()
        {
            return new MyRepository().ListPermissionKeys();
        }
    }
}
