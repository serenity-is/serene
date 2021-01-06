using Serene.Northwind.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace Serene.Northwind.Lookups
{
    [LookupScript]
    public class OrderShipCityLookup : RowLookupScript<Entities.OrderRow>
    {
        public OrderShipCityLookup(ISqlConnections sqlConnections)
            : base(sqlConnections)
        {
            IdField = TextField = OrderRow.Fields.ShipCity.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OrderRow.Fields;
            query.Distinct(true)
                .Select(fld.ShipCountry)
                .Select(fld.ShipCity)
                .Where(
                    new Criteria(fld.ShipCountry) != "" &
                    new Criteria(fld.ShipCountry).IsNotNull() &
                    new Criteria(fld.ShipCity) != "" &
                    new Criteria(fld.ShipCity).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}