namespace Serene.BasicSamples.Repositories
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Northwind.Entities.CustomerGrossSalesRow;

    public class CustomerGrossSalesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection, 
            CustomerGrossSalesListRequest request)
        {
            var data = connection.Query<MyRow>("CustomerGrossSales",
                param: new
                {
                    startDate = request.StartDate,
                    endDate = request.EndDate
                },
                commandType: System.Data.CommandType.StoredProcedure);

            var response = new ListResponse<MyRow>();
            response.Entities = (List<MyRow>)data;
            return response;
        }
    }
}