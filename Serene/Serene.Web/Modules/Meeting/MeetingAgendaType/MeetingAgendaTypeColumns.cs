
namespace Serene.Meeting.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meeting.MeetingAgendaType")]
    [BasedOnRow(typeof(Entities.MeetingAgendaTypeRow))]
    public class MeetingAgendaTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AgendaTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}