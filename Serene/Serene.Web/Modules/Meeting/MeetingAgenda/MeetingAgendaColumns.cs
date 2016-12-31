
namespace Serene.Meeting.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Meeting.MeetingAgenda")]
    [BasedOnRow(typeof(Entities.MeetingAgendaRow))]
    public class MeetingAgendaColumns
    {
        [EditLink, AlignRight]
        public Int32 AgendaNumber { get; set; }
        [EditLink, Width(250)]
        public String Title { get; set; }
        [Width(350)]
        public String Description { get; set; }
        [Width(130)]
        public String AgendaTypeName { get; set; }
        [Width(130)]
        public Int32 RequestedByContactFullName { get; set; }
    }
}