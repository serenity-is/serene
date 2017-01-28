
namespace Serene.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), TableName("[Order Details]"), DisplayName("Order Details"), InstanceName("Order Detail"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class OrderDetailRow : Row, IIdRow
    {
        [DisplayName("ID"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        [DisplayName("Order Id"), PrimaryKey, ForeignKey(typeof(OrderRow)), LeftJoin("o"), Updatable(false)]
        public Int32? OrderID
        {
            get { return Fields.OrderID[this]; }
            set { Fields.OrderID[this] = value; }
        }

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("p")]
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

        [DisplayName("Line Total"), Expression("(t0.[UnitPrice] * t0.[Quantity] - t0.[Discount])")]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [Origin("o")]
        public String OrderCustomerID
        {
            get { return Fields.OrderCustomerID[this]; }
            set { Fields.OrderCustomerID[this] = value; }
        }

        [Origin("o")]
        public Int32? OrderEmployeeID
        {
            get { return Fields.OrderEmployeeID[this]; }
            set { Fields.OrderEmployeeID[this] = value; }
        }

        [Origin("o")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [Origin("o")]
        public DateTime? OrderShippedDate
        {
            get { return Fields.OrderShippedDate[this]; }
            set { Fields.OrderShippedDate[this] = value; }
        }

        [Origin("o")]
        public Int32? OrderShipVia
        {
            get { return Fields.OrderShipVia[this]; }
            set { Fields.OrderShipVia[this] = value; }
        }

        [Origin("o")]
        public String OrderShipCity
        {
            get { return Fields.OrderShipCity[this]; }
            set { Fields.OrderShipCity[this] = value; }
        }

        [Origin("o")]
        public String OrderShipCountry
        {
            get { return Fields.OrderShipCountry[this]; }
            set { Fields.OrderShipCountry[this] = value; }
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [Origin("p")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [Origin("p")]
        public Int32? ProductSupplierID
        {
            get { return Fields.ProductSupplierID[this]; }
            set { Fields.ProductSupplierID[this] = value; }
        }

        [Origin("p")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [Origin("p")]
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
            public Int32Field DetailID;
            public Int32Field OrderID;
            public Int32Field ProductID;
            public DecimalField UnitPrice;
            public Int16Field Quantity;
            public SingleField Discount;

            public StringField OrderCustomerID;

            public Int32Field OrderEmployeeID;
            public DateTimeField OrderDate;
            public DateTimeField OrderShippedDate;
            public Int32Field OrderShipVia;
            public StringField OrderShipCity;
            public StringField OrderShipCountry;
  
            public StringField ProductName;
            public BooleanField ProductDiscontinued;
            public Int32Field ProductSupplierID;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;

            public DecimalField LineTotal;

            public RowFields()
            {
                LocalTextPrefix = "Northwind.OrderDetail";
            }
        }
    }
}