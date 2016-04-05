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
    public partial class CustomerDemographicForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.CustomerDemographic";

        public CustomerDemographicForm(string idPrefix) : base(idPrefix) {}

        public StringEditor CustomerTypeID { [InlineCode("{this}.w('CustomerTypeID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor CustomerDesc { [InlineCode("{this}.w('CustomerDesc', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

