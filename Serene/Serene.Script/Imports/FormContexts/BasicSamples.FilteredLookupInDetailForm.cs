
namespace Serene.BasicSamples
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class FilteredLookupInDetailForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "BasicSamples.FilteredLookupInDetail";
    
        public FilteredLookupInDetailForm(string idPrefix) : base(idPrefix) {}
    
        public Northwind.CustomerEditor CustomerID { get { return ById<Northwind.CustomerEditor>("CustomerID"); } }
        public DateEditor OrderDate { get { return ById<DateEditor>("OrderDate"); } }
        public LookupEditor CategoryID { get { return ById<LookupEditor>("CategoryID"); } }
        public FilteredLookupDetailEditor DetailList { get { return ById<FilteredLookupDetailEditor>("DetailList"); } }
    }
}

