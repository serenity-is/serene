using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Orders")]
    [DisplayName("Orders"), InstanceName("Order")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class OrderRow : Row<OrderRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Order ID"), NotNull, Identity, QuickSearch, IdProperty]
        public Int32? OrderID
        {
            get => fields.OrderID[this];
            set => fields.OrderID[this] = value;
        }

        [DisplayName("Customer"), Size(5), NotNull, ForeignKey(typeof(CustomerRow), "CustomerID"), LeftJoin("c"), CustomerEditor, NameProperty]
        public String CustomerID
        {
            get => fields.CustomerID[this];
            set => fields.CustomerID[this] = value;
        }

        [Origin("c"), DisplayName("Customer"), QuickSearch]
        public String CustomerCompanyName
        {
            get => fields.CustomerCompanyName[this];
            set => fields.CustomerCompanyName[this] = value;
        }

        [DisplayName("Employee"), ForeignKey(typeof(EmployeeRow)), LeftJoin("e")]
        [LookupEditor(typeof(EmployeeRow)), TextualField("EmployeeFullName")]
        public Int32? EmployeeID
        {
            get => fields.EmployeeID[this];
            set => fields.EmployeeID[this] = value;
        }

        [Origin("e"), DisplayName("Employee")]
        public String EmployeeFullName
        {
            get => fields.EmployeeFullName[this];
            set => fields.EmployeeFullName[this] = value;
        }

        [Origin("e")]
        public Gender? EmployeeGender
        {
            get => fields.EmployeeGender[this];
            set => fields.EmployeeGender[this] = value;
        }

        [Origin("e")]
        public String EmployeeReportsToFullName
        {
            get => fields.EmployeeReportsToFullName[this];
            set => fields.EmployeeReportsToFullName[this] = value;
        }

        [DisplayName("Order Date"), NotNull]
        public DateTime? OrderDate
        {
            get => fields.OrderDate[this];
            set => fields.OrderDate[this] = value;
        }

        [DisplayName("Required Date")]
        public DateTime? RequiredDate
        {
            get => fields.RequiredDate[this];
            set => fields.RequiredDate[this] = value;
        }

        [DisplayName("Shipped Date")]
        public DateTime? ShippedDate
        {
            get => fields.ShippedDate[this];
            set => fields.ShippedDate[this] = value;
        }

        [DisplayName("Shipping State"), Expression("(CASE WHEN T0.[ShippedDate] IS NULL THEN 0 ELSE 1 END)")]
        public OrderShippingState? ShippingState
        {
            get => fields.ShippingState[this];
            set => fields.ShippingState[this] = value;
        }

        [DisplayName("Ship Via"), ForeignKey(typeof(ShipperRow)), LeftJoin("via"), LookupEditor(typeof(ShipperRow))]
        public Int32? ShipVia
        {
            get => fields.ShipVia[this];
            set => fields.ShipVia[this] = value;
        }

        [DisplayName("Freight"), Scale(4), DisplayFormat("#,##0.####"), AlignRight]
        public Decimal? Freight
        {
            get => fields.Freight[this];
            set => fields.Freight[this] = value;
        }

        [DisplayName("Ship Name"), Size(40)]
        public String ShipName
        {
            get => fields.ShipName[this];
            set => fields.ShipName[this] = value;
        }

        [DisplayName("Ship Address"), Size(60)]
        public String ShipAddress
        {
            get => fields.ShipAddress[this];
            set => fields.ShipAddress[this] = value;
        }

        [DisplayName("Ship City"), Size(15)]
        public String ShipCity
        {
            get => fields.ShipCity[this];
            set => fields.ShipCity[this] = value;
        }

        [DisplayName("Ship Region"), Size(15)]
        public String ShipRegion
        {
            get => fields.ShipRegion[this];
            set => fields.ShipRegion[this] = value;
        }

        [DisplayName("Ship Postal Code"), Size(10)]
        public String ShipPostalCode
        {
            get => fields.ShipPostalCode[this];
            set => fields.ShipPostalCode[this] = value;
        }

        [DisplayName("Ship Country"), Size(15)]
        public String ShipCountry
        {
            get => fields.ShipCountry[this];
            set => fields.ShipCountry[this] = value;
        }

        [Origin("c")]
        public String CustomerContactName
        {
            get => fields.CustomerContactName[this];
            set => fields.CustomerContactName[this] = value;
        }

        [Origin("c")]
        public String CustomerContactTitle
        {
            get => fields.CustomerContactTitle[this];
            set => fields.CustomerContactTitle[this] = value;
        }

        [Origin("c")]
        public String CustomerCity
        {
            get => fields.CustomerCity[this];
            set => fields.CustomerCity[this] = value;
        }

        [Origin("c")]
        public String CustomerRegion
        {
            get => fields.CustomerRegion[this];
            set => fields.CustomerRegion[this] = value;
        }

        [Origin("c")]
        public String CustomerCountry
        {
            get => fields.CustomerCountry[this];
            set => fields.CustomerCountry[this] = value;
        }

        [Origin("c")]
        public String CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [Origin("c")]
        public String CustomerFax
        {
            get => fields.CustomerFax[this];
            set => fields.CustomerFax[this] = value;
        }

        [Origin("via"), DisplayName("Ship Via")]
        public String ShipViaCompanyName
        {
            get => fields.ShipViaCompanyName[this];
            set => fields.ShipViaCompanyName[this] = value;
        }

        [Origin("via")]
        public String ShipViaPhone
        {
            get => fields.ShipViaPhone[this];
            set => fields.ShipViaPhone[this] = value;
        }
        
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "OrderID"), NotMapped]
        public List<OrderDetailRow> DetailList
        {
            get => fields.DetailList[this];
            set => fields.DetailList[this] = value;
        }
        public OrderRow()
        {
        }

        public OrderRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderID;
            public StringField CustomerID;
            public Int32Field EmployeeID;
            public DateTimeField OrderDate;
            public DateTimeField RequiredDate;
            public DateTimeField ShippedDate;
            public Int32Field ShipVia;
            public DecimalField Freight;
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipRegion;
            public StringField ShipPostalCode;
            public StringField ShipCountry;

            public StringField CustomerCompanyName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public StringField CustomerCity;
            public StringField CustomerRegion;
            public StringField CustomerCountry;
            public StringField CustomerPhone;
            public StringField CustomerFax;

            public StringField EmployeeFullName;
            public EnumField<Gender> EmployeeGender;
            public StringField EmployeeReportsToFullName;

            public StringField ShipViaCompanyName;
            public StringField ShipViaPhone;

            public EnumField<OrderShippingState> ShippingState;
            public RowListField<OrderDetailRow> DetailList;
        }
    }
}