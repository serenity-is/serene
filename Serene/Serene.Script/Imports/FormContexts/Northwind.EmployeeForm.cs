
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class EmployeeForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Employee";
    
        public EmployeeForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor LastName { [InlineCode("{this}.w('LastName', Serenity.StringEditor)")] get; private set; }
        public StringEditor FirstName { [InlineCode("{this}.w('FirstName', Serenity.StringEditor)")] get; private set; }
        public StringEditor Title { [InlineCode("{this}.w('Title', Serenity.StringEditor)")] get; private set; }
        public StringEditor TitleOfCourtesy { [InlineCode("{this}.w('TitleOfCourtesy', Serenity.StringEditor)")] get; private set; }
        public DateEditor BirthDate { [InlineCode("{this}.w('BirthDate', Serenity.DateEditor)")] get; private set; }
        public DateEditor HireDate { [InlineCode("{this}.w('HireDate', Serenity.DateEditor)")] get; private set; }
        public StringEditor Address { [InlineCode("{this}.w('Address', Serenity.StringEditor)")] get; private set; }
        public StringEditor City { [InlineCode("{this}.w('City', Serenity.StringEditor)")] get; private set; }
        public StringEditor Region { [InlineCode("{this}.w('Region', Serenity.StringEditor)")] get; private set; }
        public StringEditor PostalCode { [InlineCode("{this}.w('PostalCode', Serenity.StringEditor)")] get; private set; }
        public StringEditor Country { [InlineCode("{this}.w('Country', Serenity.StringEditor)")] get; private set; }
        public StringEditor HomePhone { [InlineCode("{this}.w('HomePhone', Serenity.StringEditor)")] get; private set; }
        public StringEditor Extension { [InlineCode("{this}.w('Extension', Serenity.StringEditor)")] get; private set; }
        public StringEditor Photo { [InlineCode("{this}.w('Photo', Serenity.StringEditor)")] get; private set; }
        public StringEditor Notes { [InlineCode("{this}.w('Notes', Serenity.StringEditor)")] get; private set; }
        public IntegerEditor ReportsTo { [InlineCode("{this}.w('ReportsTo', Serenity.IntegerEditor)")] get; private set; }
        public StringEditor PhotoPath { [InlineCode("{this}.w('PhotoPath', Serenity.StringEditor)")] get; private set; }
    }
}

