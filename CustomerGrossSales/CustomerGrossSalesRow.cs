namespace SereneSample.Northwind.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), DisplayName("Gross Sales"), InstanceName("Gross Sales"), TwoLevelCached]
    [ReadPermission("Northwind:General")]
    [ModifyPermission("Northwind:General")]
    public sealed class CustomerGrossSalesRow : Row, INameRow
    {

        [DisplayName("Customer Id"), Column("CustomerID"), NotNull]
        public String CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Contact Name"), Size(40), NotNull, QuickSearch]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull, QuickSearch]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Gross Amount"), Size(19), Scale(2)]
        public Decimal? GrossAmount
        {
            get { return Fields.GrossAmount[this]; }
            set { Fields.GrossAmount[this] = value; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ContactName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerGrossSalesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CustomerId;
            public StringField ContactName;
            public Int32Field ProductId;
            public StringField ProductName;
            public DecimalField GrossAmount;

            public RowFields()
                : base("[dbo].[GrossSales]")
            {
                LocalTextPrefix = "Northwind.GrossSales";
            }
        }

    }
}