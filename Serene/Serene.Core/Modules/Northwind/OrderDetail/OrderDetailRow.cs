using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[Order Details]")]
    [DisplayName("Order Details"), InstanceName("Order Detail")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class OrderDetailRow : Row<OrderDetailRow.RowFields>, IIdRow
    {
        [DisplayName("ID"), Identity, IdProperty]
        public Int32? DetailID
        {
            get => fields.DetailID[this];
            set => fields.DetailID[this] = value;
        }

        [DisplayName("Order Id"), PrimaryKey, ForeignKey(typeof(OrderRow)), LeftJoin("o"), Updatable(false)]
        public Int32? OrderID
        {
            get => fields.OrderID[this];
            set => fields.OrderID[this] = value;
        }

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("p")]
        [LookupEditor(typeof(ProductRow))]
        public Int32? ProductID
        {
            get => fields.ProductID[this];
            set => fields.ProductID[this] = value;
        }

        [DisplayName("Unit Price"), Scale(4), NotNull, AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Int16? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0), AlignRight, DisplayFormat("#,##0.00")]
        public Single? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Line Total"), Expression("(T0.[UnitPrice] * T0.[Quantity] - T0.[Discount])")]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get => fields.LineTotal[this];
            set => fields.LineTotal[this] = value;
        }

        [Origin("o")]
        public String OrderCustomerID
        {
            get => fields.OrderCustomerID[this];
            set => fields.OrderCustomerID[this] = value;
        }

        [Origin("o")]
        public Int32? OrderEmployeeID
        {
            get => fields.OrderEmployeeID[this];
            set => fields.OrderEmployeeID[this] = value;
        }

        [Origin("o")]
        public DateTime? OrderDate
        {
            get => fields.OrderDate[this];
            set => fields.OrderDate[this] = value;
        }

        [Origin("o")]
        public DateTime? OrderShippedDate
        {
            get => fields.OrderShippedDate[this];
            set => fields.OrderShippedDate[this] = value;
        }

        [Origin("o")]
        public Int32? OrderShipVia
        {
            get => fields.OrderShipVia[this];
            set => fields.OrderShipVia[this] = value;
        }

        [Origin("o")]
        public String OrderShipCity
        {
            get => fields.OrderShipCity[this];
            set => fields.OrderShipCity[this] = value;
        }

        [Origin("o")]
        public String OrderShipCountry
        {
            get => fields.OrderShipCountry[this];
            set => fields.OrderShipCountry[this] = value;
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [Origin("p")]
        public Boolean? ProductDiscontinued
        {
            get => fields.ProductDiscontinued[this];
            set => fields.ProductDiscontinued[this] = value;
        }

        [Origin("p")]
        public Int32? ProductSupplierID
        {
            get => fields.ProductSupplierID[this];
            set => fields.ProductSupplierID[this] = value;
        }

        [Origin("p")]
        public String ProductQuantityPerUnit
        {
            get => fields.ProductQuantityPerUnit[this];
            set => fields.ProductQuantityPerUnit[this] = value;
        }

        [Origin("p")]
        public Decimal? ProductUnitPrice
        {
            get => fields.ProductUnitPrice[this];
            set => fields.ProductUnitPrice[this] = value;
        }
        public OrderDetailRow()
        {
        }

        public OrderDetailRow(RowFields fields)
            : base(fields)
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
        }
    }
}