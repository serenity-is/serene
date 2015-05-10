
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingAttendeeType")]
    [BasedOnRow(typeof(Entities.MeetingAttendeeTypeRow))]
    public class MeetingAttendeeTypeForm
    {
        public String Name { get; set; }
        public Boolean IsActive { get; set; }
    }
}