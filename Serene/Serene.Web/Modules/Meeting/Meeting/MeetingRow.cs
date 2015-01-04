
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

    [ConnectionKey("Default"), DisplayName("Meeting"), InstanceName("Meeting"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Id"), Identity]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Meeting Guid"), Size(100), NotNull, QuickSearch]
        public String MeetingGuid
        {
            get { return Fields.MeetingGuid[this]; }
            set { Fields.MeetingGuid[this] = value; }
        }

        [DisplayName("Meeting Name"), Size(100), NotNull]
        public String MeetingName
        {
            get { return Fields.MeetingName[this]; }
            set { Fields.MeetingName[this] = value; }
        }

        [DisplayName("Meeting Type Id"), NotNull, ForeignKey("MeetingType", "MeetingTypeId"), LeftJoin("jMeetingType")]
        public Int32? MeetingTypeId
        {
            get { return Fields.MeetingTypeId[this]; }
            set { Fields.MeetingTypeId[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public Int32? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public Int32? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Location Id"), ForeignKey("MeetingLocation", "MeetingLocationId"), LeftJoin("jLocation")]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Organization Id"), ForeignKey("Organizations", "OrganizationId"), LeftJoin("jOrganization")]
        public Int32? OrganizationId
        {
            get { return Fields.OrganizationId[this]; }
            set { Fields.OrganizationId[this] = value; }
        }

        [DisplayName("Organizer Contact Id"), ForeignKey("MeetingContact", "MeetingContactId"), LeftJoin("jOrganizerContact")]
        public Int32? OrganizerContactId
        {
            get { return Fields.OrganizerContactId[this]; }
            set { Fields.OrganizerContactId[this] = value; }
        }

        [DisplayName("Reporter Contact Id"), ForeignKey("MeetingContact", "MeetingContactId"), LeftJoin("jReporterContact")]
        public Int32? ReporterContactId
        {
            get { return Fields.ReporterContactId[this]; }
            set { Fields.ReporterContactId[this] = value; }
        }

        [DisplayName("Meeting Type Name"), Expression("jMeetingType.Name")]
        public String MeetingTypeName
        {
            get { return Fields.MeetingTypeName[this]; }
            set { Fields.MeetingTypeName[this] = value; }
        }

        [DisplayName("Meeting Type Is Active"), Expression("jMeetingType.IsActive")]
        public Int16? MeetingTypeIsActive
        {
            get { return Fields.MeetingTypeIsActive[this]; }
            set { Fields.MeetingTypeIsActive[this] = value; }
        }

        [DisplayName("Location Name"), Expression("jLocation.Name")]
        public String LocationName
        {
            get { return Fields.LocationName[this]; }
            set { Fields.LocationName[this] = value; }
        }

        [DisplayName("Location Is Active"), Expression("jLocation.IsActive")]
        public Int16? LocationIsActive
        {
            get { return Fields.LocationIsActive[this]; }
            set { Fields.LocationIsActive[this] = value; }
        }

        [DisplayName("Location Address"), Expression("jLocation.Address")]
        public String LocationAddress
        {
            get { return Fields.LocationAddress[this]; }
            set { Fields.LocationAddress[this] = value; }
        }

        [DisplayName("Organization Name"), Expression("jOrganization.Name")]
        public String OrganizationName
        {
            get { return Fields.OrganizationName[this]; }
            set { Fields.OrganizationName[this] = value; }
        }

        [DisplayName("Organization Is Active"), Expression("jOrganization.IsActive")]
        public Int16? OrganizationIsActive
        {
            get { return Fields.OrganizationIsActive[this]; }
            set { Fields.OrganizationIsActive[this] = value; }
        }

        [DisplayName("Organization Description"), Expression("jOrganization.Description")]
        public String OrganizationDescription
        {
            get { return Fields.OrganizationDescription[this]; }
            set { Fields.OrganizationDescription[this] = value; }
        }

        [DisplayName("Organization Parent Organization Id"), Expression("jOrganization.ParentOrganizationId")]
        public Int32? OrganizationParentOrganizationId
        {
            get { return Fields.OrganizationParentOrganizationId[this]; }
            set { Fields.OrganizationParentOrganizationId[this] = value; }
        }

        [DisplayName("Organizer Contact Display Name"), Expression("jOrganizerContact.DisplayName")]
        public String OrganizerContactDisplayName
        {
            get { return Fields.OrganizerContactDisplayName[this]; }
            set { Fields.OrganizerContactDisplayName[this] = value; }
        }

        [DisplayName("Organizer Contact Email"), Expression("jOrganizerContact.Email")]
        public String OrganizerContactEmail
        {
            get { return Fields.OrganizerContactEmail[this]; }
            set { Fields.OrganizerContactEmail[this] = value; }
        }

        [DisplayName("Organizer Contact Is Active"), Expression("jOrganizerContact.IsActive")]
        public Int16? OrganizerContactIsActive
        {
            get { return Fields.OrganizerContactIsActive[this]; }
            set { Fields.OrganizerContactIsActive[this] = value; }
        }

        [DisplayName("Organizer Contact Title"), Expression("jOrganizerContact.Title")]
        public String OrganizerContactTitle
        {
            get { return Fields.OrganizerContactTitle[this]; }
            set { Fields.OrganizerContactTitle[this] = value; }
        }

        [DisplayName("Organizer Contact Firstname"), Expression("jOrganizerContact.Firstname")]
        public String OrganizerContactFirstname
        {
            get { return Fields.OrganizerContactFirstname[this]; }
            set { Fields.OrganizerContactFirstname[this] = value; }
        }

        [DisplayName("Organizer Contact Lastname"), Expression("jOrganizerContact.Lastname")]
        public String OrganizerContactLastname
        {
            get { return Fields.OrganizerContactLastname[this]; }
            set { Fields.OrganizerContactLastname[this] = value; }
        }

        [DisplayName("Reporter Contact Display Name"), Expression("jReporterContact.DisplayName")]
        public String ReporterContactDisplayName
        {
            get { return Fields.ReporterContactDisplayName[this]; }
            set { Fields.ReporterContactDisplayName[this] = value; }
        }

        [DisplayName("Reporter Contact Email"), Expression("jReporterContact.Email")]
        public String ReporterContactEmail
        {
            get { return Fields.ReporterContactEmail[this]; }
            set { Fields.ReporterContactEmail[this] = value; }
        }

        [DisplayName("Reporter Contact Is Active"), Expression("jReporterContact.IsActive")]
        public Int16? ReporterContactIsActive
        {
            get { return Fields.ReporterContactIsActive[this]; }
            set { Fields.ReporterContactIsActive[this] = value; }
        }

        [DisplayName("Reporter Contact Title"), Expression("jReporterContact.Title")]
        public String ReporterContactTitle
        {
            get { return Fields.ReporterContactTitle[this]; }
            set { Fields.ReporterContactTitle[this] = value; }
        }

        [DisplayName("Reporter Contact Firstname"), Expression("jReporterContact.Firstname")]
        public String ReporterContactFirstname
        {
            get { return Fields.ReporterContactFirstname[this]; }
            set { Fields.ReporterContactFirstname[this] = value; }
        }

        [DisplayName("Reporter Contact Lastname"), Expression("jReporterContact.Lastname")]
        public String ReporterContactLastname
        {
            get { return Fields.ReporterContactLastname[this]; }
            set { Fields.ReporterContactLastname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MeetingGuid; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingId;
            public readonly StringField MeetingGuid;
            public readonly StringField MeetingName;
            public readonly Int32Field MeetingTypeId;
            public readonly DateTimeField StartDate;
            public readonly DateTimeField EndDate;
            public readonly Int32Field InsertUserId;
            public readonly Int32Field InsertDate;
            public readonly Int16Field IsActive;
            public readonly Int32Field UpdateUserId;
            public readonly Int32Field UpdateDate;
            public readonly Int32Field LocationId;
            public readonly Int32Field OrganizationId;
            public readonly Int32Field OrganizerContactId;
            public readonly Int32Field ReporterContactId;

            public readonly StringField MeetingTypeName;
            public readonly Int16Field MeetingTypeIsActive;


            public readonly StringField LocationName;
            public readonly Int16Field LocationIsActive;
            public readonly StringField LocationAddress;


            public readonly StringField OrganizationName;
            public readonly Int16Field OrganizationIsActive;
            public readonly StringField OrganizationDescription;
            public readonly Int32Field OrganizationParentOrganizationId;


            public readonly StringField OrganizerContactDisplayName;
            public readonly StringField OrganizerContactEmail;
            public readonly Int16Field OrganizerContactIsActive;
            public readonly StringField OrganizerContactTitle;
            public readonly StringField OrganizerContactFirstname;
            public readonly StringField OrganizerContactLastname;


            public readonly StringField ReporterContactDisplayName;
            public readonly StringField ReporterContactEmail;
            public readonly Int16Field ReporterContactIsActive;
            public readonly StringField ReporterContactTitle;
            public readonly StringField ReporterContactFirstname;
            public readonly StringField ReporterContactLastname;


            public RowFields()
                : base("Meeting")
            {
                LocalTextPrefix = "Meeting.Meeting";
            }
        }
    }
}