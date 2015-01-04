
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingDecisionRelevant")]
    [BasedOnRow(typeof(Entities.MeetingDecisionRelevantRow))]
    public class MeetingDecisionRelevantForm
    {
        public Int32 MeetingDecisionId { get; set; }
        public Int32 RelevantUserId { get; set; }
        public Int16 IsActive { get; set; }
    }
}