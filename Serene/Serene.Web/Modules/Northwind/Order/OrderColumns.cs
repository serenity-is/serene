
namespace Serene.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.Order")]
    [BasedOnRow(typeof(Entities.OrderRow))]
    public class OrderColumns
    {
        [EditLink, AlignRight, SortOrder(1, descending: true), Width(70)]
        public String OrderID { get; set; }

        [EditLink, Width(200), QuickFilter]
        public String CustomerCompanyName { get; set; }

        [EditLink, QuickFilter]
        public DateTime? OrderDate { get; set; }

        [FilterOnly, QuickFilter]
        public OrderShippingState ShippingState { get; set; }

        [Width(140), EmployeeFormatter(GenderProperty = "EmployeeGender"), QuickFilter]
        public String EmployeeFullName { get; set; }

        public DateTime? RequiredDate { get; set; }

        public DateTime? ShippedDate { get; set; }

        [Width(140), ShipperFormatter, QuickFilter, QuickFilterOption("multiple", true)]
        public String ShipViaCompanyName { get; set; }

        [Width(100), QuickFilter, LookupEditor(typeof(Scripts.OrderShipCountryLookup))]
        public String ShipCountry { get; set; }

        [Width(100), LookupEditor(typeof(Scripts.OrderShipCityLookup))]
        [QuickFilter, QuickFilterOption("CascadeFrom", "ShipCountry")]
        public String ShipCity { get; set; }

        [FreightFormatter]
        public Decimal? Freight { get; set; }
    }
}