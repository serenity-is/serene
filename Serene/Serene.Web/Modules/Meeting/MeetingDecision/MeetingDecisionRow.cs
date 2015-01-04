
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

    [ConnectionKey("Default"), DisplayName("MeetingDecision"), InstanceName("MeetingDecision"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingDecisionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Decision Id"), Identity]
        public Int32? MeetingDecisionId
        {
            get { return Fields.MeetingDecisionId[this]; }
            set { Fields.MeetingDecisionId[this] = value; }
        }

        [DisplayName("Meeting Id"), NotNull, ForeignKey("Meeting", "MeetingId"), LeftJoin("jMeeting")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Resolution Status Id"), NotNull]
        public Int32? ResolutionStatusId
        {
            get { return Fields.ResolutionStatusId[this]; }
            set { Fields.ResolutionStatusId[this] = value; }
        }

        [DisplayName("Display Order"), NotNull]
        public Int32? DisplayOrder
        {
            get { return Fields.DisplayOrder[this]; }
            set { Fields.DisplayOrder[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Meeting Agenda Id"), ForeignKey("MeetingAgenda", "MeetingAgendaId"), LeftJoin("jMeetingAgenda")]
        public Int32? MeetingAgendaId
        {
            get { return Fields.MeetingAgendaId[this]; }
            set { Fields.MeetingAgendaId[this] = value; }
        }

        [DisplayName("Description"), Size(255), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Image File Id")]
        public Int32? ImageFileId
        {
            get { return Fields.ImageFileId[this]; }
            set { Fields.ImageFileId[this] = value; }
        }

        [DisplayName("Responsible Contact Id"), ForeignKey("MeetingContact", "MeetingContactId"), LeftJoin("jResponsibleContact")]
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

        [DisplayName("Meeting Agenda Agenda Type Id"), Expression("jMeetingAgenda.AgendaTypeId")]
        public Int32? MeetingAgendaAgendaTypeId
        {
            get { return Fields.MeetingAgendaAgendaTypeId[this]; }
            set { Fields.MeetingAgendaAgendaTypeId[this] = value; }
        }

        [DisplayName("Meeting Agenda Meeting Id"), Expression("jMeetingAgenda.MeetingId")]
        public Int32? MeetingAgendaMeetingId
        {
            get { return Fields.MeetingAgendaMeetingId[this]; }
            set { Fields.MeetingAgendaMeetingId[this] = value; }
        }

        [DisplayName("Meeting Agenda Display Order"), Expression("jMeetingAgenda.DisplayOrder")]
        public Int32? MeetingAgendaDisplayOrder
        {
            get { return Fields.MeetingAgendaDisplayOrder[this]; }
            set { Fields.MeetingAgendaDisplayOrder[this] = value; }
        }

        [DisplayName("Meeting Agenda Is Active"), Expression("jMeetingAgenda.IsActive")]
        public Int16? MeetingAgendaIsActive
        {
            get { return Fields.MeetingAgendaIsActive[this]; }
            set { Fields.MeetingAgendaIsActive[this] = value; }
        }

        [DisplayName("Meeting Agenda Requested By Contact Id"), Expression("jMeetingAgenda.RequestedByContactId")]
        public Int32? MeetingAgendaRequestedByContactId
        {
            get { return Fields.MeetingAgendaRequestedByContactId[this]; }
            set { Fields.MeetingAgendaRequestedByContactId[this] = value; }
        }

        [DisplayName("Meeting Agenda Tags"), Expression("jMeetingAgenda.Tags")]
        public String MeetingAgendaTags
        {
            get { return Fields.MeetingAgendaTags[this]; }
            set { Fields.MeetingAgendaTags[this] = value; }
        }

        [DisplayName("Meeting Agenda Title"), Expression("jMeetingAgenda.Title")]
        public String MeetingAgendaTitle
        {
            get { return Fields.MeetingAgendaTitle[this]; }
            set { Fields.MeetingAgendaTitle[this] = value; }
        }

        [DisplayName("Meeting Agenda Description"), Expression("jMeetingAgenda.Description")]
        public String MeetingAgendaDescription
        {
            get { return Fields.MeetingAgendaDescription[this]; }
            set { Fields.MeetingAgendaDescription[this] = value; }
        }

        [DisplayName("Meeting Agenda Image File Id"), Expression("jMeetingAgenda.ImageFileId")]
        public Int32? MeetingAgendaImageFileId
        {
            get { return Fields.MeetingAgendaImageFileId[this]; }
            set { Fields.MeetingAgendaImageFileId[this] = value; }
        }

        [DisplayName("Responsible Contact Display Name"), Expression("jResponsibleContact.DisplayName")]
        public String ResponsibleContactDisplayName
        {
            get { return Fields.ResponsibleContactDisplayName[this]; }
            set { Fields.ResponsibleContactDisplayName[this] = value; }
        }

        [DisplayName("Responsible Contact Email"), Expression("jResponsibleContact.Email")]
        public String ResponsibleContactEmail
        {
            get { return Fields.ResponsibleContactEmail[this]; }
            set { Fields.ResponsibleContactEmail[this] = value; }
        }

        [DisplayName("Responsible Contact Is Active"), Expression("jResponsibleContact.IsActive")]
        public Int16? ResponsibleContactIsActive
        {
            get { return Fields.ResponsibleContactIsActive[this]; }
            set { Fields.ResponsibleContactIsActive[this] = value; }
        }

        [DisplayName("Responsible Contact Title"), Expression("jResponsibleContact.Title")]
        public String ResponsibleContactTitle
        {
            get { return Fields.ResponsibleContactTitle[this]; }
            set { Fields.ResponsibleContactTitle[this] = value; }
        }

        [DisplayName("Responsible Contact Firstname"), Expression("jResponsibleContact.Firstname")]
        public String ResponsibleContactFirstname
        {
            get { return Fields.ResponsibleContactFirstname[this]; }
            set { Fields.ResponsibleContactFirstname[this] = value; }
        }

        [DisplayName("Responsible Contact Lastname"), Expression("jResponsibleContact.Lastname")]
        public String ResponsibleContactLastname
        {
            get { return Fields.ResponsibleContactLastname[this]; }
            set { Fields.ResponsibleContactLastname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingDecisionId; }
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
            public readonly Int32Field MeetingDecisionId;
            public readonly Int32Field MeetingId;
            public readonly Int32Field ResolutionStatusId;
            public readonly Int32Field DisplayOrder;
            public readonly Int16Field IsActive;
            public readonly Int32Field MeetingAgendaId;
            public readonly StringField Description;
            public readonly Int32Field ImageFileId;
            public readonly Int32Field ResponsibleContactId;
            public readonly DateTimeField DueDate;

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


            public readonly Int32Field MeetingAgendaAgendaTypeId;
            public readonly Int32Field MeetingAgendaMeetingId;
            public readonly Int32Field MeetingAgendaDisplayOrder;
            public readonly Int16Field MeetingAgendaIsActive;
            public readonly Int32Field MeetingAgendaRequestedByContactId;
            public readonly StringField MeetingAgendaTags;
            public readonly StringField MeetingAgendaTitle;
            public readonly StringField MeetingAgendaDescription;
            public readonly Int32Field MeetingAgendaImageFileId;


            public readonly StringField ResponsibleContactDisplayName;
            public readonly StringField ResponsibleContactEmail;
            public readonly Int16Field ResponsibleContactIsActive;
            public readonly StringField ResponsibleContactTitle;
            public readonly StringField ResponsibleContactFirstname;
            public readonly StringField ResponsibleContactLastname;


            public RowFields()
                : base("MeetingDecision")
            {
                LocalTextPrefix = "Meeting.MeetingDecision";
            }
        }
    }
}