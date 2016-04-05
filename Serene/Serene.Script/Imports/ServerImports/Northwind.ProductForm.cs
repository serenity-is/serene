using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Northwind
{
    public partial class ProductForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Product";

        public ProductForm(string idPrefix) : base(idPrefix) {}

        public StringEditor ProductName { [InlineCode("{this}.w('ProductName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public ImageUploadEditor ProductImage { [InlineCode("{this}.w('ProductImage', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public BooleanEditor Discontinued { [InlineCode("{this}.w('Discontinued', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public LookupEditor SupplierID { [InlineCode("{this}.w('SupplierID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public LookupEditor CategoryID { [InlineCode("{this}.w('CategoryID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor QuantityPerUnit { [InlineCode("{this}.w('QuantityPerUnit', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DecimalEditor UnitPrice { [InlineCode("{this}.w('UnitPrice', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public IntegerEditor UnitsInStock { [InlineCode("{this}.w('UnitsInStock', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public IntegerEditor UnitsOnOrder { [InlineCode("{this}.w('UnitsOnOrder', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public IntegerEditor ReorderLevel { [InlineCode("{this}.w('ReorderLevel', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

