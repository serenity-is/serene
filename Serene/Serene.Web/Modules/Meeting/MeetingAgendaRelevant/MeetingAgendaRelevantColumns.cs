
namespace Serene.Meeting.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meeting.MeetingAgendaRelevant")]
    [BasedOnRow(typeof(Entities.MeetingAgendaRelevantRow))]
    public class MeetingAgendaRelevantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AgendaRelevantId { get; set; }
        public Int32 AgendaId { get; set; }
        public Int32 ContactId { get; set; }
    }
}