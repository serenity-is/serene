
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class OrderDetailForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.OrderDetail";
    
        public OrderDetailForm(string idPrefix) : base(idPrefix) {}
    
        public LookupEditor ProductID { [InlineCode("{this}.w('ProductID', Serenity.LookupEditor)")] get; private set; }
        public DecimalEditor UnitPrice { [InlineCode("{this}.w('UnitPrice', Serenity.DecimalEditor)")] get; private set; }
        public IntegerEditor Quantity { [InlineCode("{this}.w('Quantity', Serenity.IntegerEditor)")] get; private set; }
        public DecimalEditor Discount { [InlineCode("{this}.w('Discount', Serenity.DecimalEditor)")] get; private set; }
    }
}

