
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
    public partial class MeetingRow
    {
        public Int32? MeetingId { get; set; }
        public String MeetingGuid { get; set; }
        public String MeetingName { get; set; }
        public Int32? MeetingTypeId { get; set; }
        public String StartDate { get; set; }
        public String EndDate { get; set; }
        public Int32? InsertUserId { get; set; }
        public Int32? InsertDate { get; set; }
        public Int16? IsActive { get; set; }
        public Int32? UpdateUserId { get; set; }
        public Int32? UpdateDate { get; set; }
        public Int32? LocationId { get; set; }
        public Int32? OrganizationId { get; set; }
        public Int32? OrganizerContactId { get; set; }
        public Int32? ReporterContactId { get; set; }
        public String MeetingTypeName { get; set; }
        public Int16? MeetingTypeIsActive { get; set; }
        public String LocationName { get; set; }
        public Int16? LocationIsActive { get; set; }
        public String LocationAddress { get; set; }
        public String OrganizationName { get; set; }
        public Int16? OrganizationIsActive { get; set; }
        public String OrganizationDescription { get; set; }
        public Int32? OrganizationParentOrganizationId { get; set; }
        public String OrganizerContactDisplayName { get; set; }
        public String OrganizerContactEmail { get; set; }
        public Int16? OrganizerContactIsActive { get; set; }
        public String OrganizerContactTitle { get; set; }
        public String OrganizerContactFirstname { get; set; }
        public String OrganizerContactLastname { get; set; }
        public String ReporterContactDisplayName { get; set; }
        public String ReporterContactEmail { get; set; }
        public Int16? ReporterContactIsActive { get; set; }
        public String ReporterContactTitle { get; set; }
        public String ReporterContactFirstname { get; set; }
        public String ReporterContactLastname { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingId = "MeetingId";
            [InlineConstant] public const string MeetingGuid = "MeetingGuid";
            [InlineConstant] public const string MeetingName = "MeetingName";
            [InlineConstant] public const string MeetingTypeId = "MeetingTypeId";
            [InlineConstant] public const string StartDate = "StartDate";
            [InlineConstant] public const string EndDate = "EndDate";
            [InlineConstant] public const string InsertUserId = "InsertUserId";
            [InlineConstant] public const string InsertDate = "InsertDate";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string UpdateUserId = "UpdateUserId";
            [InlineConstant] public const string UpdateDate = "UpdateDate";
            [InlineConstant] public const string LocationId = "LocationId";
            [InlineConstant] public const string OrganizationId = "OrganizationId";
            [InlineConstant] public const string OrganizerContactId = "OrganizerContactId";
            [InlineConstant] public const string ReporterContactId = "ReporterContactId";
            [InlineConstant] public const string MeetingTypeName = "MeetingTypeName";
            [InlineConstant] public const string MeetingTypeIsActive = "MeetingTypeIsActive";
            [InlineConstant] public const string LocationName = "LocationName";
            [InlineConstant] public const string LocationIsActive = "LocationIsActive";
            [InlineConstant] public const string LocationAddress = "LocationAddress";
            [InlineConstant] public const string OrganizationName = "OrganizationName";
            [InlineConstant] public const string OrganizationIsActive = "OrganizationIsActive";
            [InlineConstant] public const string OrganizationDescription = "OrganizationDescription";
            [InlineConstant] public const string OrganizationParentOrganizationId = "OrganizationParentOrganizationId";
            [InlineConstant] public const string OrganizerContactDisplayName = "OrganizerContactDisplayName";
            [InlineConstant] public const string OrganizerContactEmail = "OrganizerContactEmail";
            [InlineConstant] public const string OrganizerContactIsActive = "OrganizerContactIsActive";
            [InlineConstant] public const string OrganizerContactTitle = "OrganizerContactTitle";
            [InlineConstant] public const string OrganizerContactFirstname = "OrganizerContactFirstname";
            [InlineConstant] public const string OrganizerContactLastname = "OrganizerContactLastname";
            [InlineConstant] public const string ReporterContactDisplayName = "ReporterContactDisplayName";
            [InlineConstant] public const string ReporterContactEmail = "ReporterContactEmail";
            [InlineConstant] public const string ReporterContactIsActive = "ReporterContactIsActive";
            [InlineConstant] public const string ReporterContactTitle = "ReporterContactTitle";
            [InlineConstant] public const string ReporterContactFirstname = "ReporterContactFirstname";
            [InlineConstant] public const string ReporterContactLastname = "ReporterContactLastname";
        }
    }
    
}

