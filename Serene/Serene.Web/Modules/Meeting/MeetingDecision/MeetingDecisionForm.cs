﻿
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingDecision")]
    [BasedOnRow(typeof(Entities.MeetingDecisionRow))]
    public class MeetingDecisionForm
    {
        public Int32 MeetingId { get; set; }
        public Int32 AgendaId { get; set; }
        public String Description { get; set; }
        public Int32 DecisionNumber { get; set; }
        public Int32 ResponsibleContactId { get; set; }
        public DateTime DueDate { get; set; }
        public Int32 ResolutionStatus { get; set; }
        public String Images { get; set; }
        public String Attachments { get; set; }
    }
}