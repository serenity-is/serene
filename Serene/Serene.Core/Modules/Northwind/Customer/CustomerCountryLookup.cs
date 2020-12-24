using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace Serene.Northwind.Lookups
{
    [LookupScript]
    public class CustomerCountryLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerCountryLookup(ISqlConnections sqlConnections)
            : base(sqlConnections)
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.Country)
                .Where(
                    new Criteria(fld.Country) != "" &
                    new Criteria(fld.Country).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}