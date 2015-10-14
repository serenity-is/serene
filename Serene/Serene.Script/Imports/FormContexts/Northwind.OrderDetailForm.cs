
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
    
        public LookupEditor ProductID { get { return ById<LookupEditor>("ProductID"); } }
        public DecimalEditor UnitPrice { get { return ById<DecimalEditor>("UnitPrice"); } }
        public IntegerEditor Quantity { get { return ById<IntegerEditor>("Quantity"); } }
        public DecimalEditor Discount { get { return ById<DecimalEditor>("Discount"); } }
    }
}

