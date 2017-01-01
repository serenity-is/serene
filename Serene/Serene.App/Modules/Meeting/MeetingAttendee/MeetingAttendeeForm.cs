
namespace Serene.Meeting.Forms
{
    using Serenity.ComponentModel;
    using System;

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