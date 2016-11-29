
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingAttendee")]
    [BasedOnRow(typeof(Entities.MeetingAttendeeRow))]
    public class MeetingAttendeeForm
    {
        public Int32 MeetingId { get; set; }
        public Int32 ContactId { get; set; }
        public Int32 AttendeeType { get; set; }
        public Int32 AttendanceStatus { get; set; }
    }
}