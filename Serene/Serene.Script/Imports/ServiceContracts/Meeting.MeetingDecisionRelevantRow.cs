
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
    public partial class MeetingDecisionRelevantRow
    {
        public Int32? MeetingDecisionRelevantId { get; set; }
        public Int32? MeetingDecisionId { get; set; }
        public Int32? RelevantUserId { get; set; }
        public Int16? IsActive { get; set; }
        public Int32? MeetingDecisionMeetingId { get; set; }
        public Int32? MeetingDecisionResolutionStatusId { get; set; }
        public Int32? MeetingDecisionDisplayOrder { get; set; }
        public Int16? MeetingDecisionIsActive { get; set; }
        public Int32? MeetingDecisionMeetingAgendaId { get; set; }
        public String MeetingDecisionDescription { get; set; }
        public Int32? MeetingDecisionImageFileId { get; set; }
        public Int32? MeetingDecisionResponsibleContactId { get; set; }
        public String MeetingDecisionDueDate { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingDecisionRelevantId = "MeetingDecisionRelevantId";
            [InlineConstant] public const string MeetingDecisionId = "MeetingDecisionId";
            [InlineConstant] public const string RelevantUserId = "RelevantUserId";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string MeetingDecisionMeetingId = "MeetingDecisionMeetingId";
            [InlineConstant] public const string MeetingDecisionResolutionStatusId = "MeetingDecisionResolutionStatusId";
            [InlineConstant] public const string MeetingDecisionDisplayOrder = "MeetingDecisionDisplayOrder";
            [InlineConstant] public const string MeetingDecisionIsActive = "MeetingDecisionIsActive";
            [InlineConstant] public const string MeetingDecisionMeetingAgendaId = "MeetingDecisionMeetingAgendaId";
            [InlineConstant] public const string MeetingDecisionDescription = "MeetingDecisionDescription";
            [InlineConstant] public const string MeetingDecisionImageFileId = "MeetingDecisionImageFileId";
            [InlineConstant] public const string MeetingDecisionResponsibleContactId = "MeetingDecisionResponsibleContactId";
            [InlineConstant] public const string MeetingDecisionDueDate = "MeetingDecisionDueDate";
        }
    }
    
}

