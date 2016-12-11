

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

    [ConnectionKey("Default"), DisplayName("Agenda"), InstanceName("Agenda"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class MeetingAgendaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Agenda Id"), Identity]
        public Int32? AgendaId
        {
            get { return Fields.AgendaId[this]; }
            set { Fields.AgendaId[this] = value; }
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("Meetings", "MeetingId"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("No"), NotNull]
        public Int32? AgendaNumber
        {
            get { return Fields.AgendaNumber[this]; }
            set { Fields.AgendaNumber[this] = value; }
        }

        [DisplayName("Title"), Size(2000), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Agenda Type"), NotNull, ForeignKey("MeetingAgendaTypes", "AgendaTypeId"), LeftJoin("jAgendaType"), TextualField("AgendaTypeName")]
        public Int32? AgendaTypeId
        {
            get { return Fields.AgendaTypeId[this]; }
            set { Fields.AgendaTypeId[this] = value; }
        }

        [DisplayName("Requested By Contact"), ForeignKey("Contacts", "ContactId"), LeftJoin("jRequestedByContact"), TextualField("RequestedByContactTitle")]
        public Int32? RequestedByContactId
        {
            get { return Fields.RequestedByContactId[this]; }
            set { Fields.RequestedByContactId[this] = value; }
        }

        [DisplayName("Images"), MultipleImageUploadEditor]
        public String Images
        {
            get { return Fields.Images[this]; }
            set { Fields.Images[this] = value; }
        }

        [DisplayName("Attachments"), MultipleFileUploadEditor]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
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

        [DisplayName("Agenda Type"), Expression("jAgendaType.[Name]")]
        public String AgendaTypeName
        {
            get { return Fields.AgendaTypeName[this]; }
            set { Fields.AgendaTypeName[this] = value; }
        }

        [DisplayName("Requested By Contact Title"), Expression("jRequestedByContact.[Title]")]
        public String RequestedByContactTitle
        {
            get { return Fields.RequestedByContactTitle[this]; }
            set { Fields.RequestedByContactTitle[this] = value; }
        }

        [DisplayName("Requested By Contact First Name"), Expression("jRequestedByContact.[FirstName]")]
        public String RequestedByContactFirstName
        {
            get { return Fields.RequestedByContactFirstName[this]; }
            set { Fields.RequestedByContactFirstName[this] = value; }
        }

        [DisplayName("Requested By Contact Last Name"), Expression("jRequestedByContact.[LastName]")]
        public String RequestedByContactLastName
        {
            get { return Fields.RequestedByContactLastName[this]; }
            set { Fields.RequestedByContactLastName[this] = value; }
        }

        [DisplayName("Requested By")]
        [Expression("CONCAT(CONCAT(jRequestedByContact.FirstName, ' '), jRequestedByContact.LastName)")]
        public String RequestedByContactFullName
        {
            get { return Fields.RequestedByContactFullName[this]; }
            set { Fields.RequestedByContactFullName[this] = value; }
        }

        [DisplayName("Requested By Contact Email"), Expression("jRequestedByContact.[Email]")]
        public String RequestedByContactEmail
        {
            get { return Fields.RequestedByContactEmail[this]; }
            set { Fields.RequestedByContactEmail[this] = value; }
        }

        [DisplayName("Requested By Contact Identity No"), Expression("jRequestedByContact.[IdentityNo]")]
        public String RequestedByContactIdentityNo
        {
            get { return Fields.RequestedByContactIdentityNo[this]; }
            set { Fields.RequestedByContactIdentityNo[this] = value; }
        }

        [DisplayName("Requested By Contact User Id"), Expression("jRequestedByContact.[UserId]")]
        public Int32? RequestedByContactUserId
        {
            get { return Fields.RequestedByContactUserId[this]; }
            set { Fields.RequestedByContactUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AgendaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAgendaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgendaId;
            public Int32Field MeetingId;
            public Int32Field AgendaNumber;
            public StringField Title;
            public StringField Description;
            public Int32Field AgendaTypeId;
            public Int32Field RequestedByContactId;
            public StringField Images;
            public StringField Attachments;

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

            public StringField AgendaTypeName;

            public StringField RequestedByContactTitle;
            public StringField RequestedByContactFirstName;
            public StringField RequestedByContactLastName;
            public StringField RequestedByContactFullName;
            public StringField RequestedByContactEmail;
            public StringField RequestedByContactIdentityNo;
            public Int32Field RequestedByContactUserId;

            public RowFields()
                : base("MeetingAgendas")
            {
                LocalTextPrefix = "Meeting.MeetingAgenda";
            }
        }
    }
}