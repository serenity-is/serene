
namespace Serene.Northwind.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.SalesByCategoryRepository;
    using MyRow = Entities.SalesByCategoryRow;

    [Route("Services/Northwind/SalesByCategory")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SalesByCategoryController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
