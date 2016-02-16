
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class ProductLangForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.ProductLang";

        public ProductLangForm(string idPrefix) : base(idPrefix) {}


        public IntegerEditor ProductId { get { return ById<IntegerEditor>("ProductId"); } }
        public StringEditor ProductName { get { return ById<StringEditor>("ProductName"); } }
    }
}