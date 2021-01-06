using Serenity.ComponentModel;
using System;

namespace Serene.BasicSamples.Columns
{
    [ColumnsScript("BasicSamples.CustomerGrossSales")]
    [BasedOnRow(typeof(Northwind.Entities.CustomerGrossSalesRow), CheckNames = true)]
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