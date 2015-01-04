
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingDecision")]
    [BasedOnRow(typeof(Entities.MeetingDecisionRow))]
    public class MeetingDecisionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingDecisionId { get; set; }
        public Int32 MeetingId { get; set; }
        public Int32 ResolutionStatusId { get; set; }
        public Int32 DisplayOrder { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 MeetingAgendaId { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Int32 ImageFileId { get; set; }
        public Int32 ResponsibleContactId { get; set; }
        public DateTime DueDate { get; set; }
    }
}