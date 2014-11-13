
namespace Serene.Administration.Endpoints
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserRoleRepository;
    using MyRow = Entities.UserRoleRow;

    [RoutePrefix("Services/Administration/UserRole"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(Administration.PermissionKeys.Security)]
    public class UserRoleController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, UserRoleUpdateRequest request)
        {
            return new MyRepository().Update(uow, request);
        }

        public UserRoleListResponse List(IDbConnection connection, UserRoleListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
