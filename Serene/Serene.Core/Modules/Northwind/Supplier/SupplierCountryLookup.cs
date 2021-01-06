using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace Serene.Northwind.Lookups
{
    [LookupScript]
    public class SupplierCountryLookup : RowLookupScript<Entities.SupplierRow>
    {
        public SupplierCountryLookup(ISqlConnections sqlConnections)
            : base(sqlConnections)
        {
            IdField = TextField = "Country";
        }
        
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SupplierRow.Fields;
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