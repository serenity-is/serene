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
    public partial class EmployeeTerritoryForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.EmployeeTerritory";

        public EmployeeTerritoryForm(string idPrefix) : base(idPrefix) {}

        public StringEditor TerritoryID { [InlineCode("{this}.w('TerritoryID', Serenity.StringEditor)")] get; private set; }
    }
}

