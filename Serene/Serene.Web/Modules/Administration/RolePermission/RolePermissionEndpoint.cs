
namespace Serene.Administration.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.RolePermissionRepository;
    using MyRow = Entities.RolePermissionRow;

    [RoutePrefix("Services/Administration/RolePermission"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(Administration.PermissionKeys.Security)]
    public class RolePermissionController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
