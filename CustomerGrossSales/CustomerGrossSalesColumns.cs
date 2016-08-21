namespace SereneSample.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Northwind.CustomerGrossSales")]
    [BasedOnRow(typeof(Entities.CustomerGrossSalesRow))]
    public class CustomerGrossSalesColumns
    {
        [Width(150), SortOrder(1)]
        public String ContactName { get; set; }
        [Width(250)]
        public String ProductName { get; set; }
        [Width(150), AlignRight, SortOrder(2, descending: true), DisplayFormat("#,##0.00")]
        public Decimal GrossAmount { get; set; }
    }
}