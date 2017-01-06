
namespace Serene.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Northwind.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow))]
    public class CustomerForm
    {
        [Category("General")]
        public String CustomerID { get; set; }
        public String CompanyName { get; set; }
        [Category("Contact")]
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }
        public List<Int32> Representatives { get; set; }

        [Category("Address")]
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public List<object> NoteList { get; set; }

        // note: these fields are stored in an extension table (CustomerDetails)
        [Category("Details")]
        public DateTime? LastContactDate { get; set; }
        public Int32? LastContactedBy { get; set; }
        public String Email { get; set; }
        public Boolean? SendBulletin { get; set; }
    }
}