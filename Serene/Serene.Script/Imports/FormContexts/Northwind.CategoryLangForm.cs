
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class CategoryLangForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.CategoryLang";

        public CategoryLangForm(string idPrefix) : base(idPrefix) {}


        public IntegerEditor CategoryId { get { return ById<IntegerEditor>("CategoryId"); } }
        public IntegerEditor LanguageId { get { return ById<IntegerEditor>("LanguageId"); } }
        public StringEditor CategoryName { get { return ById<StringEditor>("CategoryName"); } }
        public StringEditor Description { get { return ById<StringEditor>("Description"); } }
    }
}