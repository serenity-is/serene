using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Categories")]
    [DisplayName("Categories"), InstanceName("Category")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    [LocalizationRow(typeof(CategoryLangRow))]
    public sealed class CategoryRow : Row<CategoryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Category Id"), Identity, IdProperty]
        public Int32? CategoryID
        {
            get => fields.CategoryID[this];
            set => fields.CategoryID[this] = value;
        }

        [DisplayName("Category Name"), Size(15), NotNull, QuickSearch, NameProperty, Localizable(true)]
        public String CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [DisplayName("Description"), QuickSearch, Localizable(true)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Picture")]
        public Stream Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }
        public CategoryRow()
        {
        }

        public CategoryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryID;
            public StringField CategoryName;
            public StringField Description;
            public StreamField Picture;
        }
    }
}