
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
    public partial class MeetingAgendaRow
    {
        public Int32? MeetingAgendaId { get; set; }
        public Int32? AgendaTypeId { get; set; }
        public Int32? MeetingId { get; set; }
        public Int32? DisplayOrder { get; set; }
        public Int16? IsActive { get; set; }
        public Int32? RequestedByContactId { get; set; }
        public String Tags { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public Int32? ImageFileId { get; set; }
        public String AgendaTypeName { get; set; }
        public Int16? AgendaTypeIsActive { get; set; }
        public String MeetingMeetingGuid { get; set; }
        public String MeetingMeetingName { get; set; }
        public Int32? MeetingMeetingTypeId { get; set; }
        public String MeetingStartDate { get; set; }
        public String MeetingEndDate { get; set; }
        public Int32? MeetingInsertUserId { get; set; }
        public Int32? MeetingInsertDate { get; set; }
        public Int16? MeetingIsActive { get; set; }
        public Int32? MeetingUpdateUserId { get; set; }
        public Int32? MeetingUpdateDate { get; set; }
        public Int32? MeetingLocationId { get; set; }
        public Int32? MeetingOrganizationId { get; set; }
        public Int32? MeetingOrganizerContactId { get; set; }
        public Int32? MeetingReporterContactId { get; set; }
        public String RequestedByContactDisplayName { get; set; }
        public String RequestedByContactEmail { get; set; }
        public Int16? RequestedByContactIsActive { get; set; }
        public String RequestedByContactTitle { get; set; }
        public String RequestedByContactFirstname { get; set; }
        public String RequestedByContactLastname { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingAgendaId = "MeetingAgendaId";
            [InlineConstant] public const string AgendaTypeId = "AgendaTypeId";
            [InlineConstant] public const string MeetingId = "MeetingId";
            [InlineConstant] public const string DisplayOrder = "DisplayOrder";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string RequestedByContactId = "RequestedByContactId";
            [InlineConstant] public const string Tags = "Tags";
            [InlineConstant] public const string Title = "Title";
            [InlineConstant] public const string Description = "Description";
            [InlineConstant] public const string ImageFileId = "ImageFileId";
            [InlineConstant] public const string AgendaTypeName = "AgendaTypeName";
            [InlineConstant] public const string AgendaTypeIsActive = "AgendaTypeIsActive";
            [InlineConstant] public const string MeetingMeetingGuid = "MeetingMeetingGuid";
            [InlineConstant] public const string MeetingMeetingName = "MeetingMeetingName";
            [InlineConstant] public const string MeetingMeetingTypeId = "MeetingMeetingTypeId";
            [InlineConstant] public const string MeetingStartDate = "MeetingStartDate";
            [InlineConstant] public const string MeetingEndDate = "MeetingEndDate";
            [InlineConstant] public const string MeetingInsertUserId = "MeetingInsertUserId";
            [InlineConstant] public const string MeetingInsertDate = "MeetingInsertDate";
            [InlineConstant] public const string MeetingIsActive = "MeetingIsActive";
            [InlineConstant] public const string MeetingUpdateUserId = "MeetingUpdateUserId";
            [InlineConstant] public const string MeetingUpdateDate = "MeetingUpdateDate";
            [InlineConstant] public const string MeetingLocationId = "MeetingLocationId";
            [InlineConstant] public const string MeetingOrganizationId = "MeetingOrganizationId";
            [InlineConstant] public const string MeetingOrganizerContactId = "MeetingOrganizerContactId";
            [InlineConstant] public const string MeetingReporterContactId = "MeetingReporterContactId";
            [InlineConstant] public const string RequestedByContactDisplayName = "RequestedByContactDisplayName";
            [InlineConstant] public const string RequestedByContactEmail = "RequestedByContactEmail";
            [InlineConstant] public const string RequestedByContactIsActive = "RequestedByContactIsActive";
            [InlineConstant] public const string RequestedByContactTitle = "RequestedByContactTitle";
            [InlineConstant] public const string RequestedByContactFirstname = "RequestedByContactFirstname";
            [InlineConstant] public const string RequestedByContactLastname = "RequestedByContactLastname";
        }
    }
    
}

