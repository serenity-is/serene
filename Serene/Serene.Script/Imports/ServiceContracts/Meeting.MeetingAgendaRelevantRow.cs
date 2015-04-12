
namespace Serene.Meeting
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class MeetingAgendaRelevantRow
    {
        public Int32? MeetingAgendaRelevantId { get; set; }
        public Int32? MeetingAgendaId { get; set; }
        public Int32? RelevantUserId { get; set; }
        public Int16? IsActive { get; set; }
        public Int32? MeetingAgendaAgendaTypeId { get; set; }
        public Int32? MeetingAgendaMeetingId { get; set; }
        public Int32? MeetingAgendaDisplayOrder { get; set; }
        public Int16? MeetingAgendaIsActive { get; set; }
        public Int32? MeetingAgendaRequestedByContactId { get; set; }
        public String MeetingAgendaTags { get; set; }
        public String MeetingAgendaTitle { get; set; }
        public String MeetingAgendaDescription { get; set; }
        public Int32? MeetingAgendaImageFileId { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingAgendaRelevantId = "MeetingAgendaRelevantId";
            [InlineConstant] public const string MeetingAgendaId = "MeetingAgendaId";
            [InlineConstant] public const string RelevantUserId = "RelevantUserId";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string MeetingAgendaAgendaTypeId = "MeetingAgendaAgendaTypeId";
            [InlineConstant] public const string MeetingAgendaMeetingId = "MeetingAgendaMeetingId";
            [InlineConstant] public const string MeetingAgendaDisplayOrder = "MeetingAgendaDisplayOrder";
            [InlineConstant] public const string MeetingAgendaIsActive = "MeetingAgendaIsActive";
            [InlineConstant] public const string MeetingAgendaRequestedByContactId = "MeetingAgendaRequestedByContactId";
            [InlineConstant] public const string MeetingAgendaTags = "MeetingAgendaTags";
            [InlineConstant] public const string MeetingAgendaTitle = "MeetingAgendaTitle";
            [InlineConstant] public const string MeetingAgendaDescription = "MeetingAgendaDescription";
            [InlineConstant] public const string MeetingAgendaImageFileId = "MeetingAgendaImageFileId";
        }
    }
    
}

