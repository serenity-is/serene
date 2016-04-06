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
    public partial class CategoryForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Category";

        public CategoryForm(string idPrefix) : base(idPrefix) {}

        public StringEditor CategoryName { [InlineCode("{this}.w('CategoryName', Serenity.StringEditor)")] get; private set; }
        public StringEditor Description { [InlineCode("{this}.w('Description', Serenity.StringEditor)")] get; private set; }
    }
}

