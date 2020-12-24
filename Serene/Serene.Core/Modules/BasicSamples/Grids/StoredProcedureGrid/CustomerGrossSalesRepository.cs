using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;
using System.Data;
using MyRow = Serene.Northwind.Entities.CustomerGrossSalesRow;

namespace Serene.BasicSamples.Repositories
{
    public class CustomerGrossSalesRepository : BaseRepository
    {
        public CustomerGrossSalesRepository(IRequestContext context)
             : base(context)
        {
        }

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