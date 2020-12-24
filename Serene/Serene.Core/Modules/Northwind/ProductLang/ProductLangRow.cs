using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("ProductLang")]
    [DisplayName("ProductLang"), InstanceName("ProductLang")]
    [ReadPermission("Northwind:General")]
    [ModifyPermission("Northwind:General")]
    public sealed class ProductLangRow : Row<ProductLangRow.RowFields>, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get => fields.LanguageId[this];
            set => fields.LanguageId[this] = value;
        }

        [DisplayName("Product Name"), Size(40), QuickSearch, NameProperty]
        public String ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }
        public Field CultureIdField
        {
            get => fields.LanguageId;
        }

        public ProductLangRow()
        {
        }

        public ProductLangRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductId;
            public Int32Field LanguageId;
            public StringField ProductName;
        }
    }
}