using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("ProductLog")]
    public sealed class ProductLogRow : Row<ProductLogRow.RowFields>, ICaptureLogRow
    {
        [Identity, IdProperty]
        public Int64? ProductLogID
        {
            get => fields.ProductLogID[this];
            set => fields.ProductLogID[this] = value;
        }

        public CaptureOperationType? OperationType
        {
            get => fields.OperationType[this];
            set => fields.OperationType[this] = value;
        }

        public Int32? ChangingUserId
        {
            get => fields.ChangingUserId[this];
            set => fields.ChangingUserId[this] = value;
        }

        public DateTime? ValidFrom
        {
            get => fields.ValidFrom[this];
            set => fields.ValidFrom[this] = value;
        }

        public DateTime? ValidUntil
        {
            get => fields.ValidUntil[this];
            set => fields.ValidUntil[this] = value;
        }

        [NotNull]
        public Int32? ProductID
        {
            get => fields.ProductID[this];
            set => fields.ProductID[this] = value;
        }

        [Size(40)]
        public String ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [Size(100)]
        public String ProductImage
        {
            get => fields.ProductImage[this];
            set => fields.ProductImage[this] = value;
        }

        public Boolean? Discontinued
        {
            get => fields.Discontinued[this];
            set => fields.Discontinued[this] = value;
        }

        public Int32? SupplierID
        {
            get => fields.SupplierID[this];
            set => fields.SupplierID[this] = value;
        }

        public Int32? CategoryID
        {
            get => fields.CategoryID[this];
            set => fields.CategoryID[this] = value;
        }

        public String QuantityPerUnit
        {
            get => fields.QuantityPerUnit[this];
            set => fields.QuantityPerUnit[this] = value;
        }

        [Scale(4)]
        public Decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        public Int16? UnitsInStock
        {
            get => fields.UnitsInStock[this];
            set => fields.UnitsInStock[this] = value;
        }

        public Int16? UnitsOnOrder
        {
            get => fields.UnitsOnOrder[this];
            set => fields.UnitsOnOrder[this] = value;
        }

        public Int16? ReorderLevel
        {
            get => fields.ReorderLevel[this];
            set => fields.ReorderLevel[this] = value;
        }
        EnumField<CaptureOperationType> ICaptureLogRow.OperationTypeField
        {
            get => fields.OperationType;
        }

        Field ICaptureLogRow.ChangingUserIdField
        {
            get => fields.ChangingUserId;
        }

        DateTimeField ICaptureLogRow.ValidFromField
        {
            get => fields.ValidFrom;
        }

        DateTimeField ICaptureLogRow.ValidUntilField
        {
            get => fields.ValidUntil;
        }

        public ProductLogRow()
        {
        }

        public ProductLogRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductLogID;
            public EnumField<CaptureOperationType> OperationType;
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