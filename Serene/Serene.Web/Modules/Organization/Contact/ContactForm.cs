
namespace Serene.Organization.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Organization.Contact")]
    [BasedOnRow(typeof(Entities.ContactRow))]
    public class ContactForm
    {
        public String Title { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String IdentityNo { get; set; }
        public Int32 UserId { get; set; }
    }
}