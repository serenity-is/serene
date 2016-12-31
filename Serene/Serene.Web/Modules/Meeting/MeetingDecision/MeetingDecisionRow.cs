

namespace Serene.Meeting.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Decisions"), InstanceName("Decision"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class MeetingDecisionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Decision Id"), Identity]
        public Int32? DecisionId
        {
            get { return Fields.DecisionId[this]; }
            set { Fields.DecisionId[this] = value; }
        }

        [DisplayName("Meeting"), NotNull, ForeignKey("Meetings", "MeetingId"), LeftJoin("jMeeting"), TextualField("MeetingMeetingName")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Agenda"), NotNull, ForeignKey("MeetingAgendas", "AgendaId"), LeftJoin("jAgenda"), TextualField("AgendaTitle")]
        public Int32? AgendaId
        {
            get { return Fields.AgendaId[this]; }
            set { Fields.AgendaId[this] = value; }
        }

        [DisplayName("Description"), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Decision Number"), NotNull, ForeignKey("MeetingAgendaTypes", "AgendaTypeId"), LeftJoin("jDecisionNumber"), TextualField("DecisionNumberName")]
        public Int32? DecisionNumber
        {
            get { return Fields.DecisionNumber[this]; }
            set { Fields.DecisionNumber[this] = value; }
        }

        [DisplayName("Responsible Contact"), ForeignKey("Contacts", "ContactId"), LeftJoin("jResponsibleContact"), TextualField("ResponsibleContactTitle")]
        public Int32? ResponsibleContactId
        {
            get { return Fields.ResponsibleContactId[this]; }
            set { Fields.ResponsibleContactId[this] = value; }
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
        }

        [DisplayName("Resolution Status"), NotNull]
        public Int32? ResolutionStatus
        {
            get { return Fields.ResolutionStatus[this]; }
            set { Fields.ResolutionStatus[this] = value; }
        }

        [DisplayName("Images")]
        public String Images
        {
            get { return Fields.Images[this]; }
            set { Fields.Images[this] = value; }
        }

        [DisplayName("Attachments")]
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

        [DisplayName("Agenda Meeting Id"), Expression("jAgenda.[MeetingId]")]
        public Int32? AgendaMeetingId
        {
            get { return Fields.AgendaMeetingId[this]; }
            set { Fields.AgendaMeetingId[this] = value; }
        }

        [DisplayName("Agenda No"), Expression("jAgenda.[AgendaNumber]")]
        public Int32? AgendaNumber
        {
            get { return Fields.AgendaNumber[this]; }
            set { Fields.AgendaNumber[this] = value; }
        }

        [DisplayName("Agenda Title"), Expression("jAgenda.[Title]")]
        public String AgendaTitle
        {
            get { return Fields.AgendaTitle[this]; }
            set { Fields.AgendaTitle[this] = value; }
        }

        [DisplayName("Agenda Description"), Expression("jAgenda.[Description]")]
        public String AgendaDescription
        {
            get { return Fields.AgendaDescription[this]; }
            set { Fields.AgendaDescription[this] = value; }
        }

        [DisplayName("Agenda Agenda Type Id"), Expression("jAgenda.[AgendaTypeId]")]
        public Int32? AgendaAgendaTypeId
        {
            get { return Fields.AgendaAgendaTypeId[this]; }
            set { Fields.AgendaAgendaTypeId[this] = value; }
        }

        [DisplayName("Agenda Requested By Contact Id"), Expression("jAgenda.[RequestedByContactId]")]
        public Int32? AgendaRequestedByContactId
        {
            get { return Fields.AgendaRequestedByContactId[this]; }
            set { Fields.AgendaRequestedByContactId[this] = value; }
        }

        [DisplayName("Agenda Images"), Expression("jAgenda.[Images]")]
        public String AgendaImages
        {
            get { return Fields.AgendaImages[this]; }
            set { Fields.AgendaImages[this] = value; }
        }

        [DisplayName("Agenda Attachments"), Expression("jAgenda.[Attachments]")]
        public String AgendaAttachments
        {
            get { return Fields.AgendaAttachments[this]; }
            set { Fields.AgendaAttachments[this] = value; }
        }

        [DisplayName("Decision Number Name"), Expression("jDecisionNumber.[Name]")]
        public String DecisionNumberName
        {
            get { return Fields.DecisionNumberName[this]; }
            set { Fields.DecisionNumberName[this] = value; }
        }

        [DisplayName("Responsible Contact Title"), Expression("jResponsibleContact.[Title]")]
        public String ResponsibleContactTitle
        {
            get { return Fields.ResponsibleContactTitle[this]; }
            set { Fields.ResponsibleContactTitle[this] = value; }
        }

        [DisplayName("Responsible Contact First Name"), Expression("jResponsibleContact.[FirstName]")]
        public String ResponsibleContactFirstName
        {
            get { return Fields.ResponsibleContactFirstName[this]; }
            set { Fields.ResponsibleContactFirstName[this] = value; }
        }

        [DisplayName("Responsible Contact Last Name"), Expression("jResponsibleContact.[LastName]")]
        public String ResponsibleContactLastName
        {
            get { return Fields.ResponsibleContactLastName[this]; }
            set { Fields.ResponsibleContactLastName[this] = value; }
        }

        [DisplayName("Requested By")]
        [Expression("CONCAT(CONCAT(jResponsibleContact.FirstName, ' '), jResponsibleContact.LastName)")]
        public String ResponsibleContactFullName
        {
            get { return Fields.ResponsibleContactFullName[this]; }
            set { Fields.ResponsibleContactFullName[this] = value; }
        }

        [DisplayName("Responsible Contact Email"), Expression("jResponsibleContact.[Email]")]
        public String ResponsibleContactEmail
        {
            get { return Fields.ResponsibleContactEmail[this]; }
            set { Fields.ResponsibleContactEmail[this] = value; }
        }

        [DisplayName("Responsible Contact Identity No"), Expression("jResponsibleContact.[IdentityNo]")]
        public String ResponsibleContactIdentityNo
        {
            get { return Fields.ResponsibleContactIdentityNo[this]; }
            set { Fields.ResponsibleContactIdentityNo[this] = value; }
        }

        [DisplayName("Responsible Contact User Id"), Expression("jResponsibleContact.[UserId]")]
        public Int32? ResponsibleContactUserId
        {
            get { return Fields.ResponsibleContactUserId[this]; }
            set { Fields.ResponsibleContactUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DecisionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingDecisionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DecisionId;
            public Int32Field MeetingId;
            public Int32Field AgendaId;
            public StringField Description;
            public Int32Field DecisionNumber;
            public Int32Field ResponsibleContactId;
            public DateTimeField DueDate;
            public Int32Field ResolutionStatus;
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

            public Int32Field AgendaMeetingId;
            public Int32Field AgendaNumber;
            public StringField AgendaTitle;
            public StringField AgendaDescription;
            public Int32Field AgendaAgendaTypeId;
            public Int32Field AgendaRequestedByContactId;
            public StringField AgendaImages;
            public StringField AgendaAttachments;

            public StringField DecisionNumberName;

            public StringField ResponsibleContactTitle;
            public StringField ResponsibleContactFirstName;
            public StringField ResponsibleContactLastName;
            public StringField ResponsibleContactFullName;
            public StringField ResponsibleContactEmail;
            public StringField ResponsibleContactIdentityNo;
            public Int32Field ResponsibleContactUserId;

            public RowFields()
                : base("MeetingDecisions")
            {
                LocalTextPrefix = "Meeting.MeetingDecision";
            }
        }
    }
}