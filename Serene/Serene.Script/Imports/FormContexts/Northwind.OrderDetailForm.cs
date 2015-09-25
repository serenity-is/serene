
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class OrderDetailForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.OrderDetail";
    
        public OrderDetailForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor ProductID { get { return ById<IntegerEditor>("ProductID"); } }
        public DecimalEditor UnitPrice { get { return ById<DecimalEditor>("UnitPrice"); } }
        public StringEditor Quantity { get { return ById<StringEditor>("Quantity"); } }
        public StringEditor Discount { get { return ById<StringEditor>("Discount"); } }
    }
}

