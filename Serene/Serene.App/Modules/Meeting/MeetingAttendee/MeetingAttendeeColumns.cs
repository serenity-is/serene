
namespace Serene.Meeting.Columns
{
    using Common;
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Meeting.MeetingAttendee")]
    [BasedOnRow(typeof(Entities.MeetingAttendeeRow))]
    public class MeetingAttendeeColumns
    {
        [Width(280), Sortable(false)]
        public Int32 ContactFullName { get; set; }
        [Width(180), Sortable(false), EnumSelectFormatter(EnumKey = "Meeting.MeetingAttendeeType", AllowClear = false)]
        public MeetingAttendeeType AttendeeType { get; set; }
        [Width(180), Sortable(false), EnumSelectFormatter(EnumKey = "Meeting.MeetingAttendanceStatus", AllowClear = false)]
        public MeetingAttendanceStatus AttendanceStatus { get; set; }
    }
}