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
    public sealed class ShipperRow : Row, IIdRow, INameRow
    {
        [DisplayName("Shipper Id"), Identity]
        public Int32? ShipperID
        {
            get { return Fields.ShipperID[this]; }
            set { Fields.ShipperID[this] = value; }
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipperID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ShipperRow()
            : base(Fields)
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