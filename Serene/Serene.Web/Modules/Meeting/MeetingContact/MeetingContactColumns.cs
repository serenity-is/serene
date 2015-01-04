
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingContact")]
    [BasedOnRow(typeof(Entities.MeetingContactRow))]
    public class MeetingContactColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingContactId { get; set; }
        [EditLink]
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public Int16 IsActive { get; set; }
        public String Title { get; set; }
        public String Firstname { get; set; }
        public String Lastname { get; set; }
    }
}