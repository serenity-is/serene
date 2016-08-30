namespace SereneSample.Northwind.Repositories
{
    using Serenity.Services;
    using System.Data;
    using MyRow = Entities.CustomerGrossSalesRow;
    using Serenity.Data;
    using System.Collections.Generic;
    public class CustomerGrosSalesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            //return new MyListHandler().Process(connection, request);

            var data = connection.Query<MyRow>("CustomerWiseGrossSale"
                        , null, null, true, null, System.Data.CommandType.StoredProcedure);
            var retval = new ListResponse<MyRow>();

            retval.Entities = (List<MyRow>)data;
            return retval;
        }

        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}