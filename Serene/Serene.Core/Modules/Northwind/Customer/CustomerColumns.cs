using Serenity.ComponentModel;
using Serenity.Reporting;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Columns
{
    [ColumnsScript("Northwind.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(100)]
        public String CustomerID { get; set; }
        [EditLink, Width(250)]
        public String CompanyName { get; set; }
        [Width(150)]
        public String ContactName { get; set; }
        [Width(150)]
        public String ContactTitle { get; set; }
        [Width(60)]
        public String Region { get; set; }
        [Width(100)]
        public String PostalCode { get; set; }
        [Width(130), LookupEditor(typeof(Lookups.CustomerCountryLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String Country { get; set; }
        [Width(120), LookupEditor(typeof(Lookups.CustomerCityLookup))]
        [QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "Country")]
        public String City { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(120)]
        public String Fax { get; set; }
        [Width(250), EmployeeListFormatter, CellDecorator(typeof(EmployeeListDecorator))]
        public String Representatives { get; set; }
    }
}