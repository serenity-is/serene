using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.BasicSamples
{
    public partial class FilteredLookupInDetailForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "BasicSamples.FilteredLookupInDetail";

        public FilteredLookupInDetailForm(string idPrefix) : base(idPrefix) {}

        public Northwind.CustomerEditor CustomerID { [InlineCode("{this}.w('CustomerID', Serene.Northwind.CustomerEditor)")] get; private set; }
        public DateEditor OrderDate { [InlineCode("{this}.w('OrderDate', Serenity.DateEditor)")] get; private set; }
        public LookupEditor CategoryID { [InlineCode("{this}.w('CategoryID', Serenity.LookupEditor)")] get; private set; }
        public FilteredLookupDetailEditor DetailList { [InlineCode("{this}.w('DetailList', Serene.BasicSamples.FilteredLookupDetailEditor)")] get; private set; }
    }
}

