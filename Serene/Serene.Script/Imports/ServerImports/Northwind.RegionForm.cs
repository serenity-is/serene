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
    public partial class RegionForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Region";

        public RegionForm(string idPrefix) : base(idPrefix) {}

        public IntegerEditor RegionID { [InlineCode("{this}.w('RegionID', Serenity.IntegerEditor)")] get; private set; }
        public StringEditor RegionDescription { [InlineCode("{this}.w('RegionDescription', Serenity.StringEditor)")] get; private set; }
    }
}

