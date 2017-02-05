
namespace Serene.Administration.Endpoints
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.UserPermissionRepository;
    using MyRow = Entities.UserPermissionRow;

    [Route("Services/Administration/UserPermission/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserPermissionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        public ListResponse<MyRow> List(IDbConnection connection, UserPermissionListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public ListResponse<string> ListRolePermissions(IDbConnection connection, UserPermissionListRequest request)
        {
            return new MyRepository().ListRolePermissions(connection, request);
        }

        [DataScript("Administration.PermissionKeys")]
        public ListResponse<string> ListPermissionKeys()
        {
            return new MyRepository().ListPermissionKeys();
        }
    }
}