
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
    public partial class MeetingDecisionRow
    {
        public Int32? MeetingDecisionId { get; set; }
        public Int32? MeetingId { get; set; }
        public Int32? ResolutionStatusId { get; set; }
        public Int32? DisplayOrder { get; set; }
        public Int16? IsActive { get; set; }
        public Int32? MeetingAgendaId { get; set; }
        public String Description { get; set; }
        public Int32? ImageFileId { get; set; }
        public Int32? ResponsibleContactId { get; set; }
        public String DueDate { get; set; }
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
        public Int32? MeetingAgendaAgendaTypeId { get; set; }
        public Int32? MeetingAgendaMeetingId { get; set; }
        public Int32? MeetingAgendaDisplayOrder { get; set; }
        public Int16? MeetingAgendaIsActive { get; set; }
        public Int32? MeetingAgendaRequestedByContactId { get; set; }
        public String MeetingAgendaTags { get; set; }
        public String MeetingAgendaTitle { get; set; }
        public String MeetingAgendaDescription { get; set; }
        public Int32? MeetingAgendaImageFileId { get; set; }
        public String ResponsibleContactDisplayName { get; set; }
        public String ResponsibleContactEmail { get; set; }
        public Int16? ResponsibleContactIsActive { get; set; }
        public String ResponsibleContactTitle { get; set; }
        public String ResponsibleContactFirstname { get; set; }
        public String ResponsibleContactLastname { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingDecisionId = "MeetingDecisionId";
            [InlineConstant] public const string MeetingId = "MeetingId";
            [InlineConstant] public const string ResolutionStatusId = "ResolutionStatusId";
            [InlineConstant] public const string DisplayOrder = "DisplayOrder";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string MeetingAgendaId = "MeetingAgendaId";
            [InlineConstant] public const string Description = "Description";
            [InlineConstant] public const string ImageFileId = "ImageFileId";
            [InlineConstant] public const string ResponsibleContactId = "ResponsibleContactId";
            [InlineConstant] public const string DueDate = "DueDate";
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
            [InlineConstant] public const string MeetingAgendaAgendaTypeId = "MeetingAgendaAgendaTypeId";
            [InlineConstant] public const string MeetingAgendaMeetingId = "MeetingAgendaMeetingId";
            [InlineConstant] public const string MeetingAgendaDisplayOrder = "MeetingAgendaDisplayOrder";
            [InlineConstant] public const string MeetingAgendaIsActive = "MeetingAgendaIsActive";
            [InlineConstant] public const string MeetingAgendaRequestedByContactId = "MeetingAgendaRequestedByContactId";
            [InlineConstant] public const string MeetingAgendaTags = "MeetingAgendaTags";
            [InlineConstant] public const string MeetingAgendaTitle = "MeetingAgendaTitle";
            [InlineConstant] public const string MeetingAgendaDescription = "MeetingAgendaDescription";
            [InlineConstant] public const string MeetingAgendaImageFileId = "MeetingAgendaImageFileId";
            [InlineConstant] public const string ResponsibleContactDisplayName = "ResponsibleContactDisplayName";
            [InlineConstant] public const string ResponsibleContactEmail = "ResponsibleContactEmail";
            [InlineConstant] public const string ResponsibleContactIsActive = "ResponsibleContactIsActive";
            [InlineConstant] public const string ResponsibleContactTitle = "ResponsibleContactTitle";
            [InlineConstant] public const string ResponsibleContactFirstname = "ResponsibleContactFirstname";
            [InlineConstant] public const string ResponsibleContactLastname = "ResponsibleContactLastname";
        }
    }
    
}

