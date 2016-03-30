
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class CustomerDemographicForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.CustomerDemographic";
    
        public CustomerDemographicForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CustomerTypeID { [InlineCode("{this}.w('CustomerTypeID', Serenity.StringEditor)")] get; private set; }
        public StringEditor CustomerDesc { [InlineCode("{this}.w('CustomerDesc', Serenity.StringEditor)")] get; private set; }
    }
}

