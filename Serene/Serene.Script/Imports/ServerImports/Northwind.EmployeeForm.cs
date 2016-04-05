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
    public partial class EmployeeForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Employee";

        public EmployeeForm(string idPrefix) : base(idPrefix) {}

        public StringEditor LastName { [InlineCode("{this}.w('LastName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor FirstName { [InlineCode("{this}.w('FirstName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Title { [InlineCode("{this}.w('Title', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor TitleOfCourtesy { [InlineCode("{this}.w('TitleOfCourtesy', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DateEditor BirthDate { [InlineCode("{this}.w('BirthDate', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DateEditor HireDate { [InlineCode("{this}.w('HireDate', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Address { [InlineCode("{this}.w('Address', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor City { [InlineCode("{this}.w('City', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Region { [InlineCode("{this}.w('Region', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor PostalCode { [InlineCode("{this}.w('PostalCode', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Country { [InlineCode("{this}.w('Country', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor HomePhone { [InlineCode("{this}.w('HomePhone', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Extension { [InlineCode("{this}.w('Extension', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Photo { [InlineCode("{this}.w('Photo', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Notes { [InlineCode("{this}.w('Notes', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public IntegerEditor ReportsTo { [InlineCode("{this}.w('ReportsTo', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor PhotoPath { [InlineCode("{this}.w('PhotoPath', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

