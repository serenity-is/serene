
namespace Serene.Meeting.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("MeetingAttendee"), InstanceName("MeetingAttendee"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingAttendeeRow : Row, IIdRow
    {
        [DisplayName("Meeting Attendee Id"), Identity]
        public Int32? MeetingAttendeeId
        {
            get { return Fields.MeetingAttendeeId[this]; }
            set { Fields.MeetingAttendeeId[this] = value; }
        }

        [DisplayName("Meeting Id"), NotNull, ForeignKey("Meeting", "MeetingId"), LeftJoin("jMeeting")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Contact Id"), NotNull, ForeignKey("MeetingContact", "MeetingContactId"), LeftJoin("jContact")]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Attendee Type Id"), NotNull, ForeignKey("MeetingAttendeeType", "MeetingAttendeeTypeId"), LeftJoin("jAttendeeType")]
        public Int32? AttendeeTypeId
        {
            get { return Fields.AttendeeTypeId[this]; }
            set { Fields.AttendeeTypeId[this] = value; }
        }

        [DisplayName("Attendance Status Id"), NotNull]
        public Int32? AttendanceStatusId
        {
            get { return Fields.AttendanceStatusId[this]; }
            set { Fields.AttendanceStatusId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Meeting Meeting Guid"), Expression("jMeeting.MeetingGuid")]
        public String MeetingMeetingGuid
        {
            get { return Fields.MeetingMeetingGuid[this]; }
            set { Fields.MeetingMeetingGuid[this] = value; }
        }

        [DisplayName("Meeting Meeting Name"), Expression("jMeeting.MeetingName")]
        public String MeetingMeetingName
        {
            get { return Fields.MeetingMeetingName[this]; }
            set { Fields.MeetingMeetingName[this] = value; }
        }

        [DisplayName("Meeting Meeting Type Id"), Expression("jMeeting.MeetingTypeId")]
        public Int32? MeetingMeetingTypeId
        {
            get { return Fields.MeetingMeetingTypeId[this]; }
            set { Fields.MeetingMeetingTypeId[this] = value; }
        }

        [DisplayName("Meeting Start Date"), Expression("jMeeting.StartDate")]
        public DateTime? MeetingStartDate
        {
            get { return Fields.MeetingStartDate[this]; }
            set { Fields.MeetingStartDate[this] = value; }
        }

        [DisplayName("Meeting End Date"), Expression("jMeeting.EndDate")]
        public DateTime? MeetingEndDate
        {
            get { return Fields.MeetingEndDate[this]; }
            set { Fields.MeetingEndDate[this] = value; }
        }

        [DisplayName("Meeting Insert User Id"), Expression("jMeeting.InsertUserId")]
        public Int32? MeetingInsertUserId
        {
            get { return Fields.MeetingInsertUserId[this]; }
            set { Fields.MeetingInsertUserId[this] = value; }
        }

        [DisplayName("Meeting Insert Date"), Expression("jMeeting.InsertDate")]
        public Int32? MeetingInsertDate
        {
            get { return Fields.MeetingInsertDate[this]; }
            set { Fields.MeetingInsertDate[this] = value; }
        }

        [DisplayName("Meeting Is Active"), Expression("jMeeting.IsActive")]
        public Int16? MeetingIsActive
        {
            get { return Fields.MeetingIsActive[this]; }
            set { Fields.MeetingIsActive[this] = value; }
        }

        [DisplayName("Meeting Update User Id"), Expression("jMeeting.UpdateUserId")]
        public Int32? MeetingUpdateUserId
        {
            get { return Fields.MeetingUpdateUserId[this]; }
            set { Fields.MeetingUpdateUserId[this] = value; }
        }

        [DisplayName("Meeting Update Date"), Expression("jMeeting.UpdateDate")]
        public Int32? MeetingUpdateDate
        {
            get { return Fields.MeetingUpdateDate[this]; }
            set { Fields.MeetingUpdateDate[this] = value; }
        }

        [DisplayName("Meeting Location Id"), Expression("jMeeting.LocationId")]
        public Int32? MeetingLocationId
        {
            get { return Fields.MeetingLocationId[this]; }
            set { Fields.MeetingLocationId[this] = value; }
        }

        [DisplayName("Meeting Organization Id"), Expression("jMeeting.OrganizationId")]
        public Int32? MeetingOrganizationId
        {
            get { return Fields.MeetingOrganizationId[this]; }
            set { Fields.MeetingOrganizationId[this] = value; }
        }

        [DisplayName("Meeting Organizer Contact Id"), Expression("jMeeting.OrganizerContactId")]
        public Int32? MeetingOrganizerContactId
        {
            get { return Fields.MeetingOrganizerContactId[this]; }
            set { Fields.MeetingOrganizerContactId[this] = value; }
        }

        [DisplayName("Meeting Reporter Contact Id"), Expression("jMeeting.ReporterContactId")]
        public Int32? MeetingReporterContactId
        {
            get { return Fields.MeetingReporterContactId[this]; }
            set { Fields.MeetingReporterContactId[this] = value; }
        }

        [DisplayName("Contact Display Name"), Expression("jContact.DisplayName")]
        public String ContactDisplayName
        {
            get { return Fields.ContactDisplayName[this]; }
            set { Fields.ContactDisplayName[this] = value; }
        }

        [DisplayName("Contact Email"), Expression("jContact.Email")]
        public String ContactEmail
        {
            get { return Fields.ContactEmail[this]; }
            set { Fields.ContactEmail[this] = value; }
        }

        [DisplayName("Contact Is Active"), Expression("jContact.IsActive")]
        public Int16? ContactIsActive
        {
            get { return Fields.ContactIsActive[this]; }
            set { Fields.ContactIsActive[this] = value; }
        }

        [DisplayName("Contact Title"), Expression("jContact.Title")]
        public String ContactTitle
        {
            get { return Fields.ContactTitle[this]; }
            set { Fields.ContactTitle[this] = value; }
        }

        [DisplayName("Contact Firstname"), Expression("jContact.Firstname")]
        public String ContactFirstname
        {
            get { return Fields.ContactFirstname[this]; }
            set { Fields.ContactFirstname[this] = value; }
        }

        [DisplayName("Contact Lastname"), Expression("jContact.Lastname")]
        public String ContactLastname
        {
            get { return Fields.ContactLastname[this]; }
            set { Fields.ContactLastname[this] = value; }
        }

        [DisplayName("Attendee Type Name"), Expression("jAttendeeType.Name")]
        public String AttendeeTypeName
        {
            get { return Fields.AttendeeTypeName[this]; }
            set { Fields.AttendeeTypeName[this] = value; }
        }

        [DisplayName("Attendee Type Is Active"), Expression("jAttendeeType.IsActive")]
        public Int16? AttendeeTypeIsActive
        {
            get { return Fields.AttendeeTypeIsActive[this]; }
            set { Fields.AttendeeTypeIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingAttendeeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAttendeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingAttendeeId;
            public readonly Int32Field MeetingId;
            public readonly Int32Field ContactId;
            public readonly Int32Field AttendeeTypeId;
            public readonly Int32Field AttendanceStatusId;
            public readonly Int16Field IsActive;

            public readonly StringField MeetingMeetingGuid;
            public readonly StringField MeetingMeetingName;
            public readonly Int32Field MeetingMeetingTypeId;
            public readonly DateTimeField MeetingStartDate;
            public readonly DateTimeField MeetingEndDate;
            public readonly Int32Field MeetingInsertUserId;
            public readonly Int32Field MeetingInsertDate;
            public readonly Int16Field MeetingIsActive;
            public readonly Int32Field MeetingUpdateUserId;
            public readonly Int32Field MeetingUpdateDate;
            public readonly Int32Field MeetingLocationId;
            public readonly Int32Field MeetingOrganizationId;
            public readonly Int32Field MeetingOrganizerContactId;
            public readonly Int32Field MeetingReporterContactId;


            public readonly StringField ContactDisplayName;
            public readonly StringField ContactEmail;
            public readonly Int16Field ContactIsActive;
            public readonly StringField ContactTitle;
            public readonly StringField ContactFirstname;
            public readonly StringField ContactLastname;


            public readonly StringField AttendeeTypeName;
            public readonly Int16Field AttendeeTypeIsActive;


            public RowFields()
                : base("MeetingAttendee")
            {
                LocalTextPrefix = "Meeting.MeetingAttendee";
            }
        }
    }
}