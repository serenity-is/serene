
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class CustomerForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Customer";
    
        public CustomerForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor CustomerID { [InlineCode("{this}.w('CustomerID', Serenity.StringEditor)")] get; private set; }
        public StringEditor CompanyName { [InlineCode("{this}.w('CompanyName', Serenity.StringEditor)")] get; private set; }
        public StringEditor ContactName { [InlineCode("{this}.w('ContactName', Serenity.StringEditor)")] get; private set; }
        public StringEditor ContactTitle { [InlineCode("{this}.w('ContactTitle', Serenity.StringEditor)")] get; private set; }
        public LookupEditor Representatives { [InlineCode("{this}.w('Representatives', Serenity.LookupEditor)")] get; private set; }
        public StringEditor Address { [InlineCode("{this}.w('Address', Serenity.StringEditor)")] get; private set; }
        public StringEditor City { [InlineCode("{this}.w('City', Serenity.StringEditor)")] get; private set; }
        public StringEditor Region { [InlineCode("{this}.w('Region', Serenity.StringEditor)")] get; private set; }
        public StringEditor PostalCode { [InlineCode("{this}.w('PostalCode', Serenity.StringEditor)")] get; private set; }
        public StringEditor Country { [InlineCode("{this}.w('Country', Serenity.StringEditor)")] get; private set; }
        public StringEditor Phone { [InlineCode("{this}.w('Phone', Serenity.StringEditor)")] get; private set; }
        public StringEditor Fax { [InlineCode("{this}.w('Fax', Serenity.StringEditor)")] get; private set; }
        public NotesEditor NoteList { [InlineCode("{this}.w('NoteList', Serene.Northwind.NotesEditor)")] get; private set; }
    }
}

