using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Forms
{
    [ColumnsScript("Northwind.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupplierID { get; set; }
        [EditLink, Width(250)]
        public String CompanyName { get; set; }
        [Width(150)]
        public String ContactName { get; set; }
        [Width(150)]
        public String ContactTitle { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(80)]
        public String Region { get; set; }
        [Width(130)]
        [LookupEditor(typeof(Lookups.SupplierCountryLookup)), QuickFilter]
        public String Country { get; set; }
        [Width(130)]
        public String City { get; set; }
    }
}