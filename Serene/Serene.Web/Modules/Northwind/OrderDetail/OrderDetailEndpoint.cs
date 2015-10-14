
namespace Serene.Northwind.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.OrderDetailRepository;
    using MyRow = Entities.OrderDetailRow;

    [RoutePrefix("Services/Northwind/OrderDetail"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(Northwind.PermissionKeys.General)]
    public class OrderDetailController : ServiceEndpoint
    {
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
