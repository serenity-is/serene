

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

    [ConnectionKey("Default"), DisplayName("MeetingAttendees"), InstanceName("MeetingAttendees"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class MeetingAttendeeRow : Row, IIdRow
    {
        [DisplayName("Attendee Id"), Identity]
        public Int32? AttendeeId
        {
            get { return Fields.AttendeeId[this]; }
            set { Fields.AttendeeId[this] = value; }
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("Meetings", "MeetingId"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Contact"), NotNull, ForeignKey("Contacts", "ContactId"), LeftJoin("jContact"), TextualField("ContactTitle")]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Attendee Type"), NotNull]
        public Int32? AttendeeType
        {
            get { return Fields.AttendeeType[this]; }
            set { Fields.AttendeeType[this] = value; }
        }

        [DisplayName("Attendance Status"), NotNull]
        public Int32? AttendanceStatus
        {
            get { return Fields.AttendanceStatus[this]; }
            set { Fields.AttendanceStatus[this] = value; }
        }

        [DisplayName("Meeting Meeting Name"), Expression("jMeeting.[MeetingName]")]
        public String MeetingMeetingName
        {
            get { return Fields.MeetingMeetingName[this]; }
            set { Fields.MeetingMeetingName[this] = value; }
        }

        [DisplayName("Meeting Meeting Number"), Expression("jMeeting.[MeetingNumber]")]
        public String MeetingMeetingNumber
        {
            get { return Fields.MeetingMeetingNumber[this]; }
            set { Fields.MeetingMeetingNumber[this] = value; }
        }

        [DisplayName("Meeting Meeting Guid"), Expression("jMeeting.[MeetingGuid]")]
        public Guid? MeetingMeetingGuid
        {
            get { return Fields.MeetingMeetingGuid[this]; }
            set { Fields.MeetingMeetingGuid[this] = value; }
        }

        [DisplayName("Meeting Meeting Type Id"), Expression("jMeeting.[MeetingTypeId]")]
        public Int32? MeetingMeetingTypeId
        {
            get { return Fields.MeetingMeetingTypeId[this]; }
            set { Fields.MeetingMeetingTypeId[this] = value; }
        }

        [DisplayName("Meeting Start Date"), Expression("jMeeting.[StartDate]")]
        public DateTime? MeetingStartDate
        {
            get { return Fields.MeetingStartDate[this]; }
            set { Fields.MeetingStartDate[this] = value; }
        }

        [DisplayName("Meeting End Date"), Expression("jMeeting.[EndDate]")]
        public DateTime? MeetingEndDate
        {
            get { return Fields.MeetingEndDate[this]; }
            set { Fields.MeetingEndDate[this] = value; }
        }

        [DisplayName("Meeting Location Id"), Expression("jMeeting.[LocationId]")]
        public Int32? MeetingLocationId
        {
            get { return Fields.MeetingLocationId[this]; }
            set { Fields.MeetingLocationId[this] = value; }
        }

        [DisplayName("Meeting Unit Id"), Expression("jMeeting.[UnitId]")]
        public Int32? MeetingUnitId
        {
            get { return Fields.MeetingUnitId[this]; }
            set { Fields.MeetingUnitId[this] = value; }
        }

        [DisplayName("Meeting Organizer Contact Id"), Expression("jMeeting.[OrganizerContactId]")]
        public Int32? MeetingOrganizerContactId
        {
            get { return Fields.MeetingOrganizerContactId[this]; }
            set { Fields.MeetingOrganizerContactId[this] = value; }
        }

        [DisplayName("Meeting Reporter Contact Id"), Expression("jMeeting.[ReporterContactId]")]
        public Int32? MeetingReporterContactId
        {
            get { return Fields.MeetingReporterContactId[this]; }
            set { Fields.MeetingReporterContactId[this] = value; }
        }

        [DisplayName("Meeting Insert User Id"), Expression("jMeeting.[InsertUserId]")]
        public Int32? MeetingInsertUserId
        {
            get { return Fields.MeetingInsertUserId[this]; }
            set { Fields.MeetingInsertUserId[this] = value; }
        }

        [DisplayName("Meeting Insert Date"), Expression("jMeeting.[InsertDate]")]
        public DateTime? MeetingInsertDate
        {
            get { return Fields.MeetingInsertDate[this]; }
            set { Fields.MeetingInsertDate[this] = value; }
        }

        [DisplayName("Meeting Update User Id"), Expression("jMeeting.[UpdateUserId]")]
        public Int32? MeetingUpdateUserId
        {
            get { return Fields.MeetingUpdateUserId[this]; }
            set { Fields.MeetingUpdateUserId[this] = value; }
        }

        [DisplayName("Meeting Update Date"), Expression("jMeeting.[UpdateDate]")]
        public DateTime? MeetingUpdateDate
        {
            get { return Fields.MeetingUpdateDate[this]; }
            set { Fields.MeetingUpdateDate[this] = value; }
        }

        [DisplayName("Contact Title"), Expression("jContact.[Title]")]
        public String ContactTitle
        {
            get { return Fields.ContactTitle[this]; }
            set { Fields.ContactTitle[this] = value; }
        }

        [DisplayName("Contact First Name"), Expression("jContact.[FirstName]")]
        public String ContactFirstName
        {
            get { return Fields.ContactFirstName[this]; }
            set { Fields.ContactFirstName[this] = value; }
        }

        [DisplayName("Contact Last Name"), Expression("jContact.[LastName]")]
        public String ContactLastName
        {
            get { return Fields.ContactLastName[this]; }
            set { Fields.ContactLastName[this] = value; }
        }

        [DisplayName("Contact Email"), Expression("jContact.[Email]")]
        public String ContactEmail
        {
            get { return Fields.ContactEmail[this]; }
            set { Fields.ContactEmail[this] = value; }
        }

        [DisplayName("Contact Identity No"), Expression("jContact.[IdentityNo]")]
        public String ContactIdentityNo
        {
            get { return Fields.ContactIdentityNo[this]; }
            set { Fields.ContactIdentityNo[this] = value; }
        }

        [DisplayName("Contact User Id"), Expression("jContact.[UserId]")]
        public Int32? ContactUserId
        {
            get { return Fields.ContactUserId[this]; }
            set { Fields.ContactUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AttendeeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAttendeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AttendeeId;
            public Int32Field MeetingId;
            public Int32Field ContactId;
            public Int32Field AttendeeType;
            public Int32Field AttendanceStatus;

            public StringField MeetingMeetingName;
            public StringField MeetingMeetingNumber;
            public GuidField MeetingMeetingGuid;
            public Int32Field MeetingMeetingTypeId;
            public DateTimeField MeetingStartDate;
            public DateTimeField MeetingEndDate;
            public Int32Field MeetingLocationId;
            public Int32Field MeetingUnitId;
            public Int32Field MeetingOrganizerContactId;
            public Int32Field MeetingReporterContactId;
            public Int32Field MeetingInsertUserId;
            public DateTimeField MeetingInsertDate;
            public Int32Field MeetingUpdateUserId;
            public DateTimeField MeetingUpdateDate;

            public StringField ContactTitle;
            public StringField ContactFirstName;
            public StringField ContactLastName;
            public StringField ContactEmail;
            public StringField ContactIdentityNo;
            public Int32Field ContactUserId;

            public RowFields()
                : base("MeetingAttendees")
            {
                LocalTextPrefix = "Meeting.MeetingAttendee";
            }
        }
    }
}