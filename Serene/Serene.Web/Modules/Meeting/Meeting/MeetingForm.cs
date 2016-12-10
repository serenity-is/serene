
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;

    [FormScript("Meeting.Meeting")]
    [BasedOnRow(typeof(Entities.MeetingRow))]
    public class MeetingForm
    {
        public String MeetingName { get; set; }
        [ReadOnly(true)]
        public Int32 MeetingTypeId { get; set; }
        public String MeetingNumber { get; set; }
        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [DefaultValue("now")]
        public DateTime EndDate { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 UnitId { get; set; }
        public Int32 OrganizerContactId { get; set; }
        public Int32 ReporterContactId { get; set; }
        public List<MeetingAttendeeRow> AttendeeList { get; set;}
    }
}