
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

    [ConnectionKey("Default"), DisplayName("MeetingAgenda"), InstanceName("MeetingAgenda"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingAgendaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Agenda Id"), Identity]
        public Int32? MeetingAgendaId
        {
            get { return Fields.MeetingAgendaId[this]; }
            set { Fields.MeetingAgendaId[this] = value; }
        }

        [DisplayName("Agenda Type Id"), NotNull, ForeignKey("MeetingAgendaType", "MeetingAgendaTypeId"), LeftJoin("jAgendaType")]
        public Int32? AgendaTypeId
        {
            get { return Fields.AgendaTypeId[this]; }
            set { Fields.AgendaTypeId[this] = value; }
        }

        [DisplayName("Meeting Id"), NotNull, ForeignKey("Meeting", "MeetingId"), LeftJoin("jMeeting")]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
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

        [DisplayName("Requested By Contact Id"), ForeignKey("MeetingContact", "MeetingContactId"), LeftJoin("jRequestedByContact")]
        public Int32? RequestedByContactId
        {
            get { return Fields.RequestedByContactId[this]; }
            set { Fields.RequestedByContactId[this] = value; }
        }

        [DisplayName("Tags"), Size(200), QuickSearch]
        public String Tags
        {
            get { return Fields.Tags[this]; }
            set { Fields.Tags[this] = value; }
        }

        [DisplayName("Title"), Size(2000)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description"), Size(255)]
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

        [DisplayName("Agenda Type Name"), Expression("jAgendaType.Name")]
        public String AgendaTypeName
        {
            get { return Fields.AgendaTypeName[this]; }
            set { Fields.AgendaTypeName[this] = value; }
        }

        [DisplayName("Agenda Type Is Active"), Expression("jAgendaType.IsActive")]
        public Int16? AgendaTypeIsActive
        {
            get { return Fields.AgendaTypeIsActive[this]; }
            set { Fields.AgendaTypeIsActive[this] = value; }
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

        [DisplayName("Requested By Contact Display Name"), Expression("jRequestedByContact.DisplayName")]
        public String RequestedByContactDisplayName
        {
            get { return Fields.RequestedByContactDisplayName[this]; }
            set { Fields.RequestedByContactDisplayName[this] = value; }
        }

        [DisplayName("Requested By Contact Email"), Expression("jRequestedByContact.Email")]
        public String RequestedByContactEmail
        {
            get { return Fields.RequestedByContactEmail[this]; }
            set { Fields.RequestedByContactEmail[this] = value; }
        }

        [DisplayName("Requested By Contact Is Active"), Expression("jRequestedByContact.IsActive")]
        public Int16? RequestedByContactIsActive
        {
            get { return Fields.RequestedByContactIsActive[this]; }
            set { Fields.RequestedByContactIsActive[this] = value; }
        }

        [DisplayName("Requested By Contact Title"), Expression("jRequestedByContact.Title")]
        public String RequestedByContactTitle
        {
            get { return Fields.RequestedByContactTitle[this]; }
            set { Fields.RequestedByContactTitle[this] = value; }
        }

        [DisplayName("Requested By Contact Firstname"), Expression("jRequestedByContact.Firstname")]
        public String RequestedByContactFirstname
        {
            get { return Fields.RequestedByContactFirstname[this]; }
            set { Fields.RequestedByContactFirstname[this] = value; }
        }

        [DisplayName("Requested By Contact Lastname"), Expression("jRequestedByContact.Lastname")]
        public String RequestedByContactLastname
        {
            get { return Fields.RequestedByContactLastname[this]; }
            set { Fields.RequestedByContactLastname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingAgendaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Tags; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAgendaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingAgendaId;
            public readonly Int32Field AgendaTypeId;
            public readonly Int32Field MeetingId;
            public readonly Int32Field DisplayOrder;
            public readonly Int16Field IsActive;
            public readonly Int32Field RequestedByContactId;
            public readonly StringField Tags;
            public readonly StringField Title;
            public readonly StringField Description;
            public readonly Int32Field ImageFileId;

            public readonly StringField AgendaTypeName;
            public readonly Int16Field AgendaTypeIsActive;


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


            public readonly StringField RequestedByContactDisplayName;
            public readonly StringField RequestedByContactEmail;
            public readonly Int16Field RequestedByContactIsActive;
            public readonly StringField RequestedByContactTitle;
            public readonly StringField RequestedByContactFirstname;
            public readonly StringField RequestedByContactLastname;


            public RowFields()
                : base("MeetingAgenda")
            {
                LocalTextPrefix = "Meeting.MeetingAgenda";
            }
        }
    }
}