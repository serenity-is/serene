
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
    public partial class OrderDetailRow
    {
        [InlineConstant] public const string IdProperty = "DetailID";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.OrderDetail";
    
        public Int32? DetailID { get; set; }
        public Int32? OrderID { get; set; }
        public Int32? ProductID { get; set; }
        public Decimal? UnitPrice { get; set; }
        public Int16? Quantity { get; set; }
        public Single? Discount { get; set; }
        public String OrderCustomerID { get; set; }
        public Int32? OrderEmployeeID { get; set; }
        public String OrderDate { get; set; }
        public String OrderShippedDate { get; set; }
        public Int32? OrderShipVia { get; set; }
        public String OrderShipCity { get; set; }
        public String OrderShipCountry { get; set; }
        public String ProductName { get; set; }
        public Boolean? ProductDiscontinued { get; set; }
        public Int32? ProductSupplierID { get; set; }
        public String ProductQuantityPerUnit { get; set; }
        public Decimal? ProductUnitPrice { get; set; }
        public Decimal? LineTotal { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string DetailID = "DetailID";
            [InlineConstant] public const string OrderID = "OrderID";
            [InlineConstant] public const string ProductID = "ProductID";
            [InlineConstant] public const string UnitPrice = "UnitPrice";
            [InlineConstant] public const string Quantity = "Quantity";
            [InlineConstant] public const string Discount = "Discount";
            [InlineConstant] public const string OrderCustomerID = "OrderCustomerID";
            [InlineConstant] public const string OrderEmployeeID = "OrderEmployeeID";
            [InlineConstant] public const string OrderDate = "OrderDate";
            [InlineConstant] public const string OrderShippedDate = "OrderShippedDate";
            [InlineConstant] public const string OrderShipVia = "OrderShipVia";
            [InlineConstant] public const string OrderShipCity = "OrderShipCity";
            [InlineConstant] public const string OrderShipCountry = "OrderShipCountry";
            [InlineConstant] public const string ProductName = "ProductName";
            [InlineConstant] public const string ProductDiscontinued = "ProductDiscontinued";
            [InlineConstant] public const string ProductSupplierID = "ProductSupplierID";
            [InlineConstant] public const string ProductQuantityPerUnit = "ProductQuantityPerUnit";
            [InlineConstant] public const string ProductUnitPrice = "ProductUnitPrice";
            [InlineConstant] public const string LineTotal = "LineTotal";
        }
    }
    
}

