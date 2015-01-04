
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingAttendeeType")]
    [BasedOnRow(typeof(Entities.MeetingAttendeeTypeRow))]
    public class MeetingAttendeeTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingAttendeeTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int16 IsActive { get; set; }
    }
}