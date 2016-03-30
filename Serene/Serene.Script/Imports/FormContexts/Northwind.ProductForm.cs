
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class ProductForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Product";
    
        public ProductForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor ProductName { [InlineCode("{this}.w('ProductName', Serenity.StringEditor)")] get; private set; }
        public ImageUploadEditor ProductImage { [InlineCode("{this}.w('ProductImage', Serenity.ImageUploadEditor)")] get; private set; }
        public BooleanEditor Discontinued { [InlineCode("{this}.w('Discontinued', Serenity.BooleanEditor)")] get; private set; }
        public LookupEditor SupplierID { [InlineCode("{this}.w('SupplierID', Serenity.LookupEditor)")] get; private set; }
        public LookupEditor CategoryID { [InlineCode("{this}.w('CategoryID', Serenity.LookupEditor)")] get; private set; }
        public StringEditor QuantityPerUnit { [InlineCode("{this}.w('QuantityPerUnit', Serenity.StringEditor)")] get; private set; }
        public DecimalEditor UnitPrice { [InlineCode("{this}.w('UnitPrice', Serenity.DecimalEditor)")] get; private set; }
        public IntegerEditor UnitsInStock { [InlineCode("{this}.w('UnitsInStock', Serenity.IntegerEditor)")] get; private set; }
        public IntegerEditor UnitsOnOrder { [InlineCode("{this}.w('UnitsOnOrder', Serenity.IntegerEditor)")] get; private set; }
        public IntegerEditor ReorderLevel { [InlineCode("{this}.w('ReorderLevel', Serenity.IntegerEditor)")] get; private set; }
    }
}

