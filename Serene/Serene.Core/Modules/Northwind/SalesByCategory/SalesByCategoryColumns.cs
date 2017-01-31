
namespace Serene.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Northwind.SalesByCategory")]
    [BasedOnRow(typeof(Entities.SalesByCategoryRow))]
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