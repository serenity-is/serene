
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingAgendaType")]
    [BasedOnRow(typeof(Entities.MeetingAgendaTypeRow))]
    public class MeetingAgendaTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingAgendaTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int16 IsActive { get; set; }
    }
}