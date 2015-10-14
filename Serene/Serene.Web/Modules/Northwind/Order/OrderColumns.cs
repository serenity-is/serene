
namespace Serene.Northwind.Forms
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
        [EditLink, Width(200)]
        public String CustomerCompanyName { get; set; }
        public DateTime? OrderDate { get; set; }
        [Width(140), EmployeeFormatter(GenderProperty = "EmployeeGender")]
        public String EmployeeFullName { get; set; }
        public DateTime? RequiredDate { get; set; }
        public DateTime? ShippedDate { get; set; }
        [Width(140), ShipperFormatter]
        public String ShipViaCompanyName { get; set; }
        [Width(100)]
        public String ShipCountry { get; set; }
        [Width(100)]
        public String ShipCity { get; set; }
        [FreightFormatter]
        public Decimal? Freight { get; set; }
    }
}