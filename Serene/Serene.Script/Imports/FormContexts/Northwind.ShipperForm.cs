
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class ShipperForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Shipper";
    
        public ShipperForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CompanyName { [InlineCode("{this}.w('CompanyName', Serenity.StringEditor)")] get; private set; }
        public PhoneEditor Phone { [InlineCode("{this}.w('Phone', Serene.Northwind.PhoneEditor)")] get; private set; }
    }
}

