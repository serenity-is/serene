using Serenity.ComponentModel;
using System;

namespace Serene.Northwind.Columns
{
    [ColumnsScript("Northwind.SalesByCategory")]
    [BasedOnRow(typeof(Entities.SalesByCategoryRow), CheckNames = true)]
    public class SalesByCategoryColumns
    {
        [Width(150), SortOrder(1)]
        public String CategoryName { get; set; }
        [Width(250)]
        public String ProductName { get; set; }
        [Width(150), AlignRight, SortOrder(2, descending: true), DisplayFormat("#,##0.00")]
        public Decimal ProductSales { get; set; }
    }
}