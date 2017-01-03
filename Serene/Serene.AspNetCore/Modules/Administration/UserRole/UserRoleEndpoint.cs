
namespace Serene.Administration.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.UserRoleRepository;
    using MyRow = Entities.UserRoleRow;

    [Route("Services/Administration/UserRole")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserRoleController : ServiceEndpoint
    {
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
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
