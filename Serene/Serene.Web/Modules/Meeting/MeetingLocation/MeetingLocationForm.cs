
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingLocation")]
    [BasedOnRow(typeof(Entities.MeetingLocationRow))]
    public class MeetingLocationForm
    {
        public String Name { get; set; }
        public Int16 IsActive { get; set; }
        public String Address { get; set; }
    }
}