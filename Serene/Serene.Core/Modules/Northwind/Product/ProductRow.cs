using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Products")]
    [DisplayName("Products"), InstanceName("Product")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    [CaptureLog(typeof(ProductLogRow))]
    [LocalizationRow(typeof(ProductLangRow))]
    public sealed class ProductRow : Row<ProductRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Product Id"), Identity, LookupInclude, IdProperty]
        public Int32? ProductID
        {
            get => fields.ProductID[this];
            set => fields.ProductID[this] = value;
        }

        [DisplayName("Product Name"), Size(40), NotNull, QuickSearch, LookupInclude, NameProperty]
        public String ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [DisplayName("Product Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "ProductImage/~", CopyToHistory = true)]
        public String ProductImage
        {
            get => fields.ProductImage[this];
            set => fields.ProductImage[this] = value;
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get => fields.Discontinued[this];
            set => fields.Discontinued[this] = value;
        }

        [DisplayName("Supplier"), ForeignKey(typeof(SupplierRow)), LeftJoin("sup")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierID
        {
            get => fields.SupplierID[this];
            set => fields.SupplierID[this] = value;
        }

        [DisplayName("Category"), ForeignKey(typeof(CategoryRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(CategoryRow), InplaceAdd = true)]
        public Int32? CategoryID
        {
            get => fields.CategoryID[this];
            set => fields.CategoryID[this] = value;
        }

        [DisplayName("Quantity Per Unit"), Size(20)]
        public String QuantityPerUnit
        {
            get => fields.QuantityPerUnit[this];
            set => fields.QuantityPerUnit[this] = value;
        }

        [DisplayName("Unit Price"), Scale(4), LookupInclude]
        public Decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Units In Stock"), NotNull, DefaultValue(0), LookupInclude]
        public Int16? UnitsInStock
        {
            get => fields.UnitsInStock[this];
            set => fields.UnitsInStock[this] = value;
        }

        [DisplayName("Units On Order"), NotNull, DefaultValue(0)]
        public Int16? UnitsOnOrder
        {
            get => fields.UnitsOnOrder[this];
            set => fields.UnitsOnOrder[this] = value;
        }

        [DisplayName("Reorder Level"), NotNull, DefaultValue(0)]
        public Int16? ReorderLevel
        {
            get => fields.ReorderLevel[this];
            set => fields.ReorderLevel[this] = value;
        }

        [Origin("sup"), DisplayName("Supplier"), LookupInclude]
        public String SupplierCompanyName
        {
            get => fields.SupplierCompanyName[this];
            set => fields.SupplierCompanyName[this] = value;
        }

        [Origin("sup")]
        public String SupplierContactName
        {
            get => fields.SupplierContactName[this];
            set => fields.SupplierContactName[this] = value;
        }

        [Origin("sup")]
        public String SupplierContactTitle
        {
            get => fields.SupplierContactTitle[this];
            set => fields.SupplierContactTitle[this] = value;
        }

        [Origin("sup")]
        public String SupplierAddress
        {
            get => fields.SupplierAddress[this];
            set => fields.SupplierAddress[this] = value;
        }

        [Origin("sup")]
        public String SupplierCity
        {
            get => fields.SupplierCity[this];
            set => fields.SupplierCity[this] = value;
        }

        [Origin("sup")]
        public String SupplierRegion
        {
            get => fields.SupplierRegion[this];
            set => fields.SupplierRegion[this] = value;
        }

        [Origin("sup")]
        public String SupplierPostalCode
        {
            get => fields.SupplierPostalCode[this];
            set => fields.SupplierPostalCode[this] = value;
        }

        [Origin("sup")]
        public String SupplierCountry
        {
            get => fields.SupplierCountry[this];
            set => fields.SupplierCountry[this] = value;
        }

        [Origin("sup")]
        public String SupplierPhone
        {
            get => fields.SupplierPhone[this];
            set => fields.SupplierPhone[this] = value;
        }

        [Origin("sup")]
        public String SupplierFax
        {
            get => fields.SupplierFax[this];
            set => fields.SupplierFax[this] = value;
        }

        [Origin("sup")]
        public String SupplierHomePage
        {
            get => fields.SupplierHomePage[this];
            set => fields.SupplierHomePage[this] = value;
        }

        [Origin("cat"), DisplayName("Category")]
        public String CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [Origin("cat")]
        public String CategoryDescription
        {
            get => fields.CategoryDescription[this];
            set => fields.CategoryDescription[this] = value;
        }

        [Origin("cat")]
        public Stream CategoryPicture
        {
            get => fields.CategoryPicture[this];
            set => fields.CategoryPicture[this] = value;
        }
        public ProductRow()
        {
        }

        public ProductRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductID;
            public StringField ProductName;
            public StringField ProductImage;
            public BooleanField Discontinued;
            public Int32Field SupplierID;
            public Int32Field CategoryID;
            public StringField QuantityPerUnit;
            public DecimalField UnitPrice;
            public Int16Field UnitsInStock;
            public Int16Field UnitsOnOrder;
            public Int16Field ReorderLevel;

            public StringField SupplierCompanyName;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierAddress;
            public StringField SupplierCity;
            public StringField SupplierRegion;
            public StringField SupplierPostalCode;
            public StringField SupplierCountry;
            public StringField SupplierPhone;
            public StringField SupplierFax;
            public StringField SupplierHomePage;

            public StringField CategoryName;
            public StringField CategoryDescription;
            public StreamField CategoryPicture;
        }
    }
}