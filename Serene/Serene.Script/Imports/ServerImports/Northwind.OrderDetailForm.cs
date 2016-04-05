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
    public partial class OrderDetailForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.OrderDetail";

        public OrderDetailForm(string idPrefix) : base(idPrefix) {}

        public LookupEditor ProductID { [InlineCode("{this}.w('ProductID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DecimalEditor UnitPrice { [InlineCode("{this}.w('UnitPrice', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public IntegerEditor Quantity { [InlineCode("{this}.w('Quantity', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DecimalEditor Discount { [InlineCode("{this}.w('Discount', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

