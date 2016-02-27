
namespace Serene.BasicSamples
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class LookupFilterByMultipleForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "BasicSamples.LookupFilterByMultiple";
    
        public LookupFilterByMultipleForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor ProductName { get { return ById<StringEditor>("ProductName"); } }
        public ImageUploadEditor ProductImage { get { return ById<ImageUploadEditor>("ProductImage"); } }
        public BooleanEditor Discontinued { get { return ById<BooleanEditor>("Discontinued"); } }
        public LookupEditor SupplierID { get { return ById<LookupEditor>("SupplierID"); } }
        public ProduceSeafoodCategoryEditor CategoryID { get { return ById<ProduceSeafoodCategoryEditor>("CategoryID"); } }
        public StringEditor QuantityPerUnit { get { return ById<StringEditor>("QuantityPerUnit"); } }
        public DecimalEditor UnitPrice { get { return ById<DecimalEditor>("UnitPrice"); } }
        public IntegerEditor UnitsInStock { get { return ById<IntegerEditor>("UnitsInStock"); } }
        public IntegerEditor UnitsOnOrder { get { return ById<IntegerEditor>("UnitsOnOrder"); } }
        public IntegerEditor ReorderLevel { get { return ById<IntegerEditor>("ReorderLevel"); } }
    }
}

