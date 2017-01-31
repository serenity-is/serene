
namespace Serene.Meeting.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meeting.MeetingDecisionRelevant")]
    [BasedOnRow(typeof(Entities.MeetingDecisionRelevantRow))]
    public class MeetingDecisionRelevantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DecisionRelevantId { get; set; }
        public Int32 DecisionId { get; set; }
        public Int32 ContactId { get; set; }
    }
}