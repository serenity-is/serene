
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingAttendee")]
    [BasedOnRow(typeof(Entities.MeetingAttendeeRow))]
    public class MeetingAttendeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingAttendeeId { get; set; }
        public Int32 MeetingId { get; set; }
        public Int32 ContactId { get; set; }
        public Int32 AttendeeTypeId { get; set; }
        public Int32 AttendanceStatusId { get; set; }
        public Int16 IsActive { get; set; }
    }
}