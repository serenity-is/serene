
namespace Serene.Organization.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Organization.Contact")]
    [BasedOnRow(typeof(Entities.ContactRow))]
    public class ContactColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContactId { get; set; }
        [EditLink]
        public String Title { get; set; }
        [EditLink]
        public String FirstName { get; set; }
        [EditLink]
        public String LastName { get; set; }
        public String Email { get; set; }
        public String IdentityNo { get; set; }
        public String UserDisplayName { get; set; }
    }
}