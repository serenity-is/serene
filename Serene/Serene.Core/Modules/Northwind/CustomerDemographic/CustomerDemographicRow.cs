using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("CustomerDemographics")]
    [DisplayName("CustomerDemographics"), InstanceName("CustomerDemographics")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class CustomerDemographicRow : Row<CustomerDemographicRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Customer Type Id"), Size(10), PrimaryKey, QuickSearch, NameProperty]
        public String CustomerTypeID
        {
            get => fields.CustomerTypeID[this];
            set => fields.CustomerTypeID[this] = value;
        }

        [DisplayName("Customer Desc")]
        public String CustomerDesc
        {
            get => fields.CustomerDesc[this];
            set => fields.CustomerDesc[this] = value;
        }
        public CustomerDemographicRow()
        {
        }

        public CustomerDemographicRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField CustomerTypeID;
            public StringField CustomerDesc;
        }
    }
}