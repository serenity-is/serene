using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Shippers")]
    [DisplayName("Shippers"), InstanceName("Shipper")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    public sealed class ShipperRow : Row<ShipperRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Shipper Id"), Identity, IdProperty]
        public Int32? ShipperID
        {
            get => fields.ShipperID[this];
            set => fields.ShipperID[this] = value;
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch, NameProperty]
        public String CompanyName
        {
            get => fields.CompanyName[this];
            set => fields.CompanyName[this] = value;
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }
        public ShipperRow()
        {
        }

        public ShipperRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShipperID;
            public StringField CompanyName;
            public StringField Phone;
        }
    }
}