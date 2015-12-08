
namespace Serene.Northwind.Entities
{
    using Newtonsoft.Json;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), DisplayName("Order Details"), InstanceName("Order Detail"), TwoLevelCached]
    [ReadPermission(Northwind.PermissionKeys.General)]
    [ModifyPermission(Northwind.PermissionKeys.General)]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class OrderDetailRow : Row, IIdRow
    {
        [DisplayName("ID"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        [DisplayName("Order Id"), PrimaryKey, ForeignKey("Orders", "OrderID"), LeftJoin("o"), Updatable(false)]
        public Int32? OrderID
        {
            get { return Fields.OrderID[this]; }
            set { Fields.OrderID[this] = value; }
        }

        [DisplayName("Product Id"), PrimaryKey, ForeignKey("Products", "ProductID"), LeftJoin("p")]
        [LookupEditor(typeof(ProductRow))]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Unit Price"), Scale(4), NotNull, AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0), AlignRight, DisplayFormat("#,##0.00")]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Line Total"), Expression("(t0.[UnitPrice] * t0.[Quantity] - t0.[Discount])"), AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("Order Customer Id"), Expression("o.[CustomerID]")]
        public String OrderCustomerID
        {
            get { return Fields.OrderCustomerID[this]; }
            set { Fields.OrderCustomerID[this] = value; }
        }

        [DisplayName("Order Employee Id"), Expression("o.[EmployeeID]")]
        public Int32? OrderEmployeeID
        {
            get { return Fields.OrderEmployeeID[this]; }
            set { Fields.OrderEmployeeID[this] = value; }
        }

        [DisplayName("Order Date"), Expression("o.[OrderDate]")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Order Shipped Date"), Expression("o.[ShippedDate]")]
        public DateTime? OrderShippedDate
        {
            get { return Fields.OrderShippedDate[this]; }
            set { Fields.OrderShippedDate[this] = value; }
        }

        [DisplayName("Order Ship Via"), Expression("o.[ShipVia]")]
        public Int32? OrderShipVia
        {
            get { return Fields.OrderShipVia[this]; }
            set { Fields.OrderShipVia[this] = value; }
        }

        [DisplayName("Order Ship City"), Expression("o.[ShipCity]")]
        public String OrderShipCity
        {
            get { return Fields.OrderShipCity[this]; }
            set { Fields.OrderShipCity[this] = value; }
        }

        [DisplayName("Order Ship Country"), Expression("o.[ShipCountry]")]
        public String OrderShipCountry
        {
            get { return Fields.OrderShipCountry[this]; }
            set { Fields.OrderShipCountry[this] = value; }
        }

        [DisplayName("Product Name"), Expression("p.[ProductName]"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Discontinued"), Expression("p.[Discontinued]")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("p.[SupplierID]")]
        public Int32? ProductSupplierID
        {
            get { return Fields.ProductSupplierID[this]; }
            set { Fields.ProductSupplierID[this] = value; }
        }

        [DisplayName("Product Quantity Per Unit"), Expression("p.QuantityPerUnit")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("p.UnitPrice")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field DetailID;
            public readonly Int32Field OrderID;
            public readonly Int32Field ProductID;
            public readonly DecimalField UnitPrice;
            public readonly Int16Field Quantity;
            public readonly SingleField Discount;

            public readonly StringField OrderCustomerID;

            public readonly Int32Field OrderEmployeeID;
            public readonly DateTimeField OrderDate;
            public readonly DateTimeField OrderShippedDate;
            public readonly Int32Field OrderShipVia;
            public readonly StringField OrderShipCity;
            public readonly StringField OrderShipCountry;
  
            public readonly StringField ProductName;
            public readonly BooleanField ProductDiscontinued;
            public readonly Int32Field ProductSupplierID;
            public readonly StringField ProductQuantityPerUnit;
            public readonly DecimalField ProductUnitPrice;

            public readonly DecimalField LineTotal;

            public RowFields()
                : base("[Order Details]")
            {
                LocalTextPrefix = "Northwind.OrderDetail";
            }
        }
    }
}