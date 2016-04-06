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
    public partial class CustomerCustomerDemoForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.CustomerCustomerDemo";

        public CustomerCustomerDemoForm(string idPrefix) : base(idPrefix) {}

        public StringEditor CustomerID { [InlineCode("{this}.w('CustomerID', Serenity.StringEditor)")] get; private set; }
        public StringEditor CustomerTypeID { [InlineCode("{this}.w('CustomerTypeID', Serenity.StringEditor)")] get; private set; }
    }
}

