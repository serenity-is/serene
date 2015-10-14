
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;
    using Fields = OrderRow.Fields;

    [ColumnsKey("Northwind.Order"), IdProperty("OrderID")]
    [DialogType(typeof(OrderDialog)), LocalTextPrefix("Northwind.Order"), Service("Northwind/Order")]
    public class OrderGrid : EntityGrid<OrderRow>
    {
        public OrderGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            CustomerFilter = AddEqualityFilter<CustomerEditor>(Fields.CustomerID);

            AddEqualityFilter<EnumEditor>(Fields.ShippingState,
                options: new EnumEditorOptions { EnumKey = "Northwind.OrderShippingState" });
                
            AddEqualityFilter<LookupEditor>(Fields.ShipVia,
                options: new LookupEditorOptions { LookupKey = ShipperRow.LookupKey });

            AddEqualityFilter<LookupEditor>(Fields.ShipCountry,
                options: new LookupEditorOptions { LookupKey = "Northwind.OrderShipCountry" });

            AddEqualityFilter<OrderShipCityEditor>(Fields.ShipCity, init: w => w.CountryEditorID = Fields.ShipCountry);

            AddEqualityFilter<LookupEditor>(Fields.EmployeeID,
                options: new LookupEditorOptions { LookupKey = EmployeeRow.LookupKey });
        }

        public CustomerEditor CustomerFilter { get; private set; }
    }
}