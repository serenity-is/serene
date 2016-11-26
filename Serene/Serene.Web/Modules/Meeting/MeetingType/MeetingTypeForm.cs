
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingType")]
    [BasedOnRow(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeForm
    {
        public String Name { get; set; }
    }
}