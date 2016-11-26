
namespace Serene.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingAgenda")]
    [BasedOnRow(typeof(Entities.MeetingAgendaRow))]
    public class MeetingAgendaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AgendaId { get; set; }
        public Int32 MeetingId { get; set; }
        public Int32 AgendaNumber { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 AgendaTypeId { get; set; }
        public Int32 RequestedByContactId { get; set; }
        public String Images { get; set; }
        public String Attachments { get; set; }
    }
}