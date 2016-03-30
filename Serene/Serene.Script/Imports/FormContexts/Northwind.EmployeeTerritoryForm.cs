
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class EmployeeTerritoryForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.EmployeeTerritory";
    
        public EmployeeTerritoryForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor TerritoryID { [InlineCode("{this}.w('TerritoryID', Serenity.StringEditor)")] get; private set; }
    }
}

