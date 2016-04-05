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
    public partial class TerritoryForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Territory";

        public TerritoryForm(string idPrefix) : base(idPrefix) {}

        public StringEditor TerritoryID { [InlineCode("{this}.w('TerritoryID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor TerritoryDescription { [InlineCode("{this}.w('TerritoryDescription', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public LookupEditor RegionID { [InlineCode("{this}.w('RegionID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

