using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = Serene.Administration.Repositories.UserPermissionRepository;
using MyRow = Serene.Administration.Entities.UserPermissionRow;

namespace Serene.Administration.Endpoints
{
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

        [DataScript("Administration.ImplicitPermissions"), NonAction]
        public Dictionary<string, HashSet<string>> ListImplicitPermissions()
        {
            return new MyRepository().ImplicitPermissions;
        }
    }
}