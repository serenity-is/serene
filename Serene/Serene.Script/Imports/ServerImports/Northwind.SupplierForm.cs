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
    public partial class SupplierForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Supplier";

        public SupplierForm(string idPrefix) : base(idPrefix) {}

        public StringEditor CompanyName { [InlineCode("{this}.w('CompanyName', Serenity.StringEditor)")] get; private set; }
        public StringEditor ContactName { [InlineCode("{this}.w('ContactName', Serenity.StringEditor)")] get; private set; }
        public StringEditor ContactTitle { [InlineCode("{this}.w('ContactTitle', Serenity.StringEditor)")] get; private set; }
        public StringEditor Address { [InlineCode("{this}.w('Address', Serenity.StringEditor)")] get; private set; }
        public StringEditor City { [InlineCode("{this}.w('City', Serenity.StringEditor)")] get; private set; }
        public StringEditor Region { [InlineCode("{this}.w('Region', Serenity.StringEditor)")] get; private set; }
        public StringEditor PostalCode { [InlineCode("{this}.w('PostalCode', Serenity.StringEditor)")] get; private set; }
        public StringEditor Country { [InlineCode("{this}.w('Country', Serenity.StringEditor)")] get; private set; }
        public StringEditor Phone { [InlineCode("{this}.w('Phone', Serenity.StringEditor)")] get; private set; }
        public StringEditor Fax { [InlineCode("{this}.w('Fax', Serenity.StringEditor)")] get; private set; }
        public StringEditor HomePage { [InlineCode("{this}.w('HomePage', Serenity.StringEditor)")] get; private set; }
    }
}

