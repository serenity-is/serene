
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingAgenda")]
    [BasedOnRow(typeof(Entities.MeetingAgendaRow))]
    public class MeetingAgendaForm
    {
        public Int32 AgendaTypeId { get; set; }
        public Int32 MeetingId { get; set; }
        public Int32 DisplayOrder { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 RequestedByContactId { get; set; }
        public String Tags { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32 ImageFileId { get; set; }
    }
}