using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("ProductLog")]
    public sealed class ProductLogRow : Row, ICaptureLogRow
    {
        [Identity]
        public Int64? ProductLogID
        {
            get { return Fields.ProductLogID[this]; }
            set { Fields.ProductLogID[this] = value; }
        }

        public CaptureOperationType? OperationType
        {
            get { return (CaptureOperationType?)Fields.OperationType[this]; }
            set { Fields.OperationType[this] = (Int16?)value; }
        }

        public Int32? ChangingUserId
        {
            get { return Fields.ChangingUserId[this]; }
            set { Fields.ChangingUserId[this] = value; }
        }

        public DateTime? ValidFrom
        {
            get { return Fields.ValidFrom[this]; }
            set { Fields.ValidFrom[this] = value; }
        }

        public DateTime? ValidUntil
        {
            get { return Fields.ValidUntil[this]; }
            set { Fields.ValidUntil[this] = value; }
        }

        [NotNull]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [Size(40)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [Size(100)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        public Int32? SupplierID
        {
            get { return Fields.SupplierID[this]; }
            set { Fields.SupplierID[this] = value; }
        }

        public Int32? CategoryID
        {
            get { return Fields.CategoryID[this]; }
            set { Fields.CategoryID[this] = value; }
        }

        public String QuantityPerUnit
        {
            get { return Fields.QuantityPerUnit[this]; }
            set { Fields.QuantityPerUnit[this] = value; }
        }

        [Scale(4)]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        public Int16? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        public Int16? UnitsOnOrder
        {
            get { return Fields.UnitsOnOrder[this]; }
            set { Fields.UnitsOnOrder[this] = value; }
        }

        public Int16? ReorderLevel
        {
            get { return Fields.ReorderLevel[this]; }
            set { Fields.ReorderLevel[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductLogID; }
        }

        Int16Field ICaptureLogRow.OperationTypeField
        {
            get { return Fields.OperationType; }
        }

        Field ICaptureLogRow.ChangingUserIdField
        {
            get { return Fields.ChangingUserId; }
        }

        DateTimeField ICaptureLogRow.ValidFromField
        {
            get { return Fields.ValidFrom; }
        }

        DateTimeField ICaptureLogRow.ValidUntilField
        {
            get { return Fields.ValidUntil; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductLogID;
            public Int16Field OperationType;
            public Int32Field ChangingUserId;
            public DateTimeField ValidFrom;
            public DateTimeField ValidUntil;

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
        }
    }
}