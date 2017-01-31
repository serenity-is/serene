
namespace Serene.Meeting.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meeting.MeetingDecision")]
    [BasedOnRow(typeof(Entities.MeetingDecisionRow))]
    public class MeetingDecisionColumns
    {
        [EditLink, DisplayName("No"), AlignRight]
        public Int32 DecisionNumber { get; set; }
        public String Description { get; set; }
        public Int32 AgendaNumber { get; set; }
        public String ResponsibleContactFullName { get; set; }
        public DateTime DueDate { get; set; }
        public Int32 ResolutionStatus { get; set; }
    }
}