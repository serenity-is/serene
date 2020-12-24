using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("CategoryLang")]
    [DisplayName("CategoryLang"), InstanceName("CategoryLang")]
    [ReadPermission("Northwind:General")]
    [ModifyPermission("Northwind:General")]
    public sealed class CategoryLangRow : Row<CategoryLangRow.RowFields>, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Category Id"), Column("CategoryID"), NotNull]
        public Int32? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get => fields.LanguageId[this];
            set => fields.LanguageId[this] = value;
        }

        [DisplayName("Category Name"), Size(15), QuickSearch, NameProperty]
        public String CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [DisplayName("Description")]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }
        public Field CultureIdField
        {
            get => fields.LanguageId;
        }

        public CategoryLangRow()
        {
        }

        public CategoryLangRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CategoryId;
            public Int32Field LanguageId;
            public StringField CategoryName;
            public StringField Description;
        }
    }
}