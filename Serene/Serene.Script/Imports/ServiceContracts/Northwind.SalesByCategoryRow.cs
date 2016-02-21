
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class SalesByCategoryRow
    {
        [InlineConstant] public const string NameProperty = "CategoryName";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.SalesByCategory";
    
        public Int32? CategoryId { get; set; }
        public String CategoryName { get; set; }
        public String ProductName { get; set; }
        public Decimal? ProductSales { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string CategoryId = "CategoryId";
            [InlineConstant] public const string CategoryName = "CategoryName";
            [InlineConstant] public const string ProductName = "ProductName";
            [InlineConstant] public const string ProductSales = "ProductSales";
        }
    }
    
}

