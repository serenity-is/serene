
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
    public partial class MeetingAttendeeRow
    {
        public Int32? MeetingAttendeeId { get; set; }
        public Int32? MeetingId { get; set; }
        public Int32? ContactId { get; set; }
        public Int32? AttendeeTypeId { get; set; }
        public Int32? AttendanceStatusId { get; set; }
        public Int16? IsActive { get; set; }
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
        public String ContactDisplayName { get; set; }
        public String ContactEmail { get; set; }
        public Int16? ContactIsActive { get; set; }
        public String ContactTitle { get; set; }
        public String ContactFirstname { get; set; }
        public String ContactLastname { get; set; }
        public String AttendeeTypeName { get; set; }
        public Int16? AttendeeTypeIsActive { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingAttendeeId = "MeetingAttendeeId";
            [InlineConstant] public const string MeetingId = "MeetingId";
            [InlineConstant] public const string ContactId = "ContactId";
            [InlineConstant] public const string AttendeeTypeId = "AttendeeTypeId";
            [InlineConstant] public const string AttendanceStatusId = "AttendanceStatusId";
            [InlineConstant] public const string IsActive = "IsActive";
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
            [InlineConstant] public const string ContactDisplayName = "ContactDisplayName";
            [InlineConstant] public const string ContactEmail = "ContactEmail";
            [InlineConstant] public const string ContactIsActive = "ContactIsActive";
            [InlineConstant] public const string ContactTitle = "ContactTitle";
            [InlineConstant] public const string ContactFirstname = "ContactFirstname";
            [InlineConstant] public const string ContactLastname = "ContactLastname";
            [InlineConstant] public const string AttendeeTypeName = "AttendeeTypeName";
            [InlineConstant] public const string AttendeeTypeIsActive = "AttendeeTypeIsActive";
        }
    }
    
}

