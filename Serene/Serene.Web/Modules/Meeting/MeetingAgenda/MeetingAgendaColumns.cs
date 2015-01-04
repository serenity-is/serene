
namespace Serene.Meeting.Forms
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
        public Int32 MeetingAgendaId { get; set; }
        public Int32 AgendaTypeId { get; set; }
        public Int32 MeetingId { get; set; }
        public Int32 DisplayOrder { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 RequestedByContactId { get; set; }
        [EditLink]
        public String Tags { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 ImageFileId { get; set; }
    }
}