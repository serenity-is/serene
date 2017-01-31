
namespace Serene.Meeting.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meeting.MeetingType")]
    [BasedOnRow(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeForm
    {
        public String Name { get; set; }
    }
}