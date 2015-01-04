
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingContact")]
    [BasedOnRow(typeof(Entities.MeetingContactRow))]
    public class MeetingContactForm
    {
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public Int16 IsActive { get; set; }
        public String Title { get; set; }
        public String Firstname { get; set; }
        public String Lastname { get; set; }
    }
}