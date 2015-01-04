
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingAgendaRelevant")]
    [BasedOnRow(typeof(Entities.MeetingAgendaRelevantRow))]
    public class MeetingAgendaRelevantForm
    {
        public Int32 MeetingAgendaId { get; set; }
        public Int32 RelevantUserId { get; set; }
        public Int16 IsActive { get; set; }
    }
}