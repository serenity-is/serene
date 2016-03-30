
namespace Serene.BasicSamples
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

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

