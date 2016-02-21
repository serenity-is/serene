

namespace Serene.Northwind.Repositories
{
    using Serenity.Services;
    using System.Data;
    using MyRow = Entities.SalesByCategoryRow;

    public class SalesByCategoryRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}