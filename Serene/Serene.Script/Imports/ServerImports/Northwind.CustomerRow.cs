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
    [Imported, Serializable, PreserveMemberCase]
    public partial class CustomerRow
    {
        [InlineConstant] public const string IdProperty = "ID";
        [InlineConstant] public const string NameProperty = "CompanyName";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Customer";
        [InlineConstant] public const string LookupKey = "Northwind.Customer";

        public static Lookup<CustomerRow> Lookup { [InlineCode("Q.getLookup('Northwind.Customer')")] get { return null; } }

        public Int32? ID { get; set; }
        public String CustomerID { get; set; }
        public String CompanyName { get; set; }
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public List<NoteRow> NoteList { get; set; }
        public List<Int32> Representatives { get; set; }

        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string ID = "ID";
            [InlineConstant] public const string CustomerID = "CustomerID";
            [InlineConstant] public const string CompanyName = "CompanyName";
            [InlineConstant] public const string ContactName = "ContactName";
            [InlineConstant] public const string ContactTitle = "ContactTitle";
            [InlineConstant] public const string Address = "Address";
            [InlineConstant] public const string City = "City";
            [InlineConstant] public const string Region = "Region";
            [InlineConstant] public const string PostalCode = "PostalCode";
            [InlineConstant] public const string Country = "Country";
            [InlineConstant] public const string Phone = "Phone";
            [InlineConstant] public const string Fax = "Fax";
            [InlineConstant] public const string NoteList = "NoteList";
            [InlineConstant] public const string Representatives = "Representatives";
        }
    }
}

