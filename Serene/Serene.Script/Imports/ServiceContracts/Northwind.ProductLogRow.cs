
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
    public partial class ProductLogRow
    {
        [InlineConstant] public const string IdProperty = "ProductLogID";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.ProductLog";
    
        public Int64? ProductLogID { get; set; }
        public CaptureOperationType? OperationType { get; set; }
        public Int32? ChangingUserId { get; set; }
        public String ValidFrom { get; set; }
        public String ValidUntil { get; set; }
        public Int32? ProductID { get; set; }
        public String ProductName { get; set; }
        public String ProductImage { get; set; }
        public Boolean? Discontinued { get; set; }
        public Int32? SupplierID { get; set; }
        public Int32? CategoryID { get; set; }
        public String QuantityPerUnit { get; set; }
        public Decimal? UnitPrice { get; set; }
        public Int16? UnitsInStock { get; set; }
        public Int16? UnitsOnOrder { get; set; }
        public Int16? ReorderLevel { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string ProductLogID = "ProductLogID";
            [InlineConstant] public const string OperationType = "OperationType";
            [InlineConstant] public const string ChangingUserId = "ChangingUserId";
            [InlineConstant] public const string ValidFrom = "ValidFrom";
            [InlineConstant] public const string ValidUntil = "ValidUntil";
            [InlineConstant] public const string ProductID = "ProductID";
            [InlineConstant] public const string ProductName = "ProductName";
            [InlineConstant] public const string ProductImage = "ProductImage";
            [InlineConstant] public const string Discontinued = "Discontinued";
            [InlineConstant] public const string SupplierID = "SupplierID";
            [InlineConstant] public const string CategoryID = "CategoryID";
            [InlineConstant] public const string QuantityPerUnit = "QuantityPerUnit";
            [InlineConstant] public const string UnitPrice = "UnitPrice";
            [InlineConstant] public const string UnitsInStock = "UnitsInStock";
            [InlineConstant] public const string UnitsOnOrder = "UnitsOnOrder";
            [InlineConstant] public const string ReorderLevel = "ReorderLevel";
        }
    }
    
}

