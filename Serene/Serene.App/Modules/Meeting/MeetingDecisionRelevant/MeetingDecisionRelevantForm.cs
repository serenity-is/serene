
namespace Serene.Meeting.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meeting.MeetingDecisionRelevant")]
    [BasedOnRow(typeof(Entities.MeetingDecisionRelevantRow))]
    public class MeetingDecisionRelevantForm
    {
        public Int32 DecisionId { get; set; }
        public Int32 ContactId { get; set; }
    }
}