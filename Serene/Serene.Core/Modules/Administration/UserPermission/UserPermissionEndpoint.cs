using Microsoft.AspNetCore.Mvc;
using MyRepository = Serene.Administration.Repositories.UserPermissionRepository;
using MyRow = Serene.Administration.Entities.UserPermissionRow;
using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;
using System.Data;

namespace Serene.Administration.Endpoints
{
    [Route("Services/Administration/UserPermission/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserPermissionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request)
        {
            return new MyRepository(Context).Update(uow, request);
        }
 
        public ListResponse<MyRow> List(IDbConnection connection, UserPermissionListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

        public ListResponse<string> ListRolePermissions(IDbConnection connection, UserPermissionListRequest request)
        {
            return new MyRepository(Context).ListRolePermissions(connection, request);
        }

        [DataScript("Administration.PermissionKeys")]
        public ListResponse<string> ListPermissionKeys(
            [FromServices] ISqlConnections sqlConnections,
            [FromServices] ITypeSource typeSource)
        {
            return new MyRepository(Context).ListPermissionKeys(sqlConnections, typeSource);
        }

        [DataScript("Administration.ImplicitPermissions"), NonAction]
        public IDictionary<string, HashSet<string>> ListImplicitPermissions(
            [FromServices] ITypeSource typeSource)
        {
            return MyRepository.GetImplicitPermissions(Cache.Memory, typeSource);
        }
    }
}