
namespace Serene.Meeting.Entities
{
    using Organization.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Meetings"), InstanceName("Meeting"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class MeetingRow : Administration.Entities.LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Meeting Id"), Identity]
        public Int32? MeetingId
        {
            get { return Fields.MeetingId[this]; }
            set { Fields.MeetingId[this] = value; }
        }

        [DisplayName("Meeting Name"), Size(100), NotNull, QuickSearch]
        public String MeetingName
        {
            get { return Fields.MeetingName[this]; }
            set { Fields.MeetingName[this] = value; }
        }

        [DisplayName("Meeting Number"), Size(20)]
        public String MeetingNumber
        {
            get { return Fields.MeetingNumber[this]; }
            set { Fields.MeetingNumber[this] = value; }
        }

        [DisplayName("Meeting Guid"), NotNull, Insertable(false), Updatable(false)]
        public Guid? MeetingGuid
        {
            get { return Fields.MeetingGuid[this]; }
            set { Fields.MeetingGuid[this] = value; }
        }

        [DisplayName("Meeting Type"), NotNull, ForeignKey("MeetingTypes", "MeetingTypeId"), LeftJoin("jMeetingType"), TextualField("MeetingTypeName")]
        [LookupEditor(typeof(MeetingTypeRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Management)]
        public Int32? MeetingTypeId
        {
            get { return Fields.MeetingTypeId[this]; }
            set { Fields.MeetingTypeId[this] = value; }
        }

        [DisplayName("Start Date"), NotNull]
        [DateTimeKind(DateTimeKind.Utc), DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date"), NotNull]
        [DateTimeKind(DateTimeKind.Utc), DateTimeEditor]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Location"), ForeignKey("MeetingLocations", "LocationId"), LeftJoin("jLocation"), TextualField("LocationName")]
        [LookupEditor(typeof(MeetingLocationRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Management)]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Location"), Expression("jLocation.[Name]")]
        public String LocationName
        {
            get { return Fields.LocationName[this]; }
            set { Fields.LocationName[this] = value; }
        }

        [DisplayName("Unit"), ForeignKey("BusinessUnits", "UnitId"), LeftJoin("jUnit"), TextualField("UnitName")]
        [Organization.BusinessUnitEditor(InplaceAdd = true, InplaceAddPermission = Organization.PermissionKeys.BusinessUnits.Management)]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Organized By"), ForeignKey("Contacts", "ContactId"), LeftJoin("jOrganizerContact"), TextualField("OrganizerContactFullName")]
        [LookupEditor(typeof(ContactRow), InplaceAdd = true, InplaceAddPermission = Organization.PermissionKeys.Contacts.Management)]
        public Int32? OrganizerContactId
        {
            get { return Fields.OrganizerContactId[this]; }
            set { Fields.OrganizerContactId[this] = value; }
        }

        [DisplayName("Organized By")]
        [Expression("CONCAT(CONCAT(jOrganizerContact.[FirstName], ' '), jOrganizerContact.[LastName])")]
        [Expression("(jOrganizerContact.FirstName || ' ' || jOrganizerContact.LastName)", Dialect = "Sqlite")]
        public String OrganizerContactFullName
        {
            get { return Fields.OrganizerContactFullName[this]; }
            set { Fields.OrganizerContactFullName[this] = value; }
        }

        [DisplayName("Reporter"), ForeignKey("Contacts", "ContactId"), LeftJoin("jReporterContact"), TextualField("ReporterContactFullName")]
        [LookupEditor(typeof(ContactRow), InplaceAdd = true, InplaceAddPermission = Organization.PermissionKeys.Contacts.Management)]
        public Int32? ReporterContactId
        {
            get { return Fields.ReporterContactId[this]; }
            set { Fields.ReporterContactId[this] = value; }
        }

        [DisplayName("Reporter")]
        [Expression("CONCAT(CONCAT(jReporterContact.[FirstName], ' '), jReporterContact.[LastName])")]
        [Expression("(jReporterContact.FirstName || ' ' || jReporterContact.LastName)", Dialect = "Sqlite")]
        public String ReporterContactFullName
        {
            get { return Fields.ReporterContactFullName[this]; }
            set { Fields.ReporterContactFullName[this] = value; }
        }

        [DisplayName("Meeting Type"), Expression("jMeetingType.[Name]")]
        public String MeetingTypeName
        {
            get { return Fields.MeetingTypeName[this]; }
            set { Fields.MeetingTypeName[this] = value; }
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Unit Parent Unit Id"), Expression("jUnit.[ParentUnitId]")]
        public Int32? UnitParentUnitId
        {
            get { return Fields.UnitParentUnitId[this]; }
            set { Fields.UnitParentUnitId[this] = value; }
        }

        [DisplayName("Organizer Contact Title"), Expression("jOrganizerContact.[Title]")]
        public String OrganizerContactTitle
        {
            get { return Fields.OrganizerContactTitle[this]; }
            set { Fields.OrganizerContactTitle[this] = value; }
        }

        [DisplayName("Organizer Contact First Name"), Expression("jOrganizerContact.[FirstName]")]
        public String OrganizerContactFirstName
        {
            get { return Fields.OrganizerContactFirstName[this]; }
            set { Fields.OrganizerContactFirstName[this] = value; }
        }

        [DisplayName("Organizer Contact Last Name"), Expression("jOrganizerContact.[LastName]")]
        public String OrganizerContactLastName
        {
            get { return Fields.OrganizerContactLastName[this]; }
            set { Fields.OrganizerContactLastName[this] = value; }
        }

        [DisplayName("Organizer Contact Email"), Expression("jOrganizerContact.[Email]")]
        public String OrganizerContactEmail
        {
            get { return Fields.OrganizerContactEmail[this]; }
            set { Fields.OrganizerContactEmail[this] = value; }
        }

        [DisplayName("Organizer Contact Identity No"), Expression("jOrganizerContact.[IdentityNo]")]
        public String OrganizerContactIdentityNo
        {
            get { return Fields.OrganizerContactIdentityNo[this]; }
            set { Fields.OrganizerContactIdentityNo[this] = value; }
        }

        [DisplayName("Organizer Contact User Id"), Expression("jOrganizerContact.[UserId]")]
        public Int32? OrganizerContactUserId
        {
            get { return Fields.OrganizerContactUserId[this]; }
            set { Fields.OrganizerContactUserId[this] = value; }
        }

        [DisplayName("Reporter Contact Title"), Expression("jReporterContact.[Title]")]
        public String ReporterContactTitle
        {
            get { return Fields.ReporterContactTitle[this]; }
            set { Fields.ReporterContactTitle[this] = value; }
        }

        [DisplayName("Reporter Contact First Name"), Expression("jReporterContact.[FirstName]")]
        public String ReporterContactFirstName
        {
            get { return Fields.ReporterContactFirstName[this]; }
            set { Fields.ReporterContactFirstName[this] = value; }
        }

        [DisplayName("Reporter Contact Last Name"), Expression("jReporterContact.[LastName]")]
        public String ReporterContactLastName
        {
            get { return Fields.ReporterContactLastName[this]; }
            set { Fields.ReporterContactLastName[this] = value; }
        }

        [DisplayName("Reporter Contact Email"), Expression("jReporterContact.[Email]")]
        public String ReporterContactEmail
        {
            get { return Fields.ReporterContactEmail[this]; }
            set { Fields.ReporterContactEmail[this] = value; }
        }

        [DisplayName("Reporter Contact Identity No"), Expression("jReporterContact.[IdentityNo]")]
        public String ReporterContactIdentityNo
        {
            get { return Fields.ReporterContactIdentityNo[this]; }
            set { Fields.ReporterContactIdentityNo[this] = value; }
        }

        [DisplayName("Reporter Contact User Id"), Expression("jReporterContact.[UserId]")]
        public Int32? ReporterContactUserId
        {
            get { return Fields.ReporterContactUserId[this]; }
            set { Fields.ReporterContactUserId[this] = value; }
        }

        [DisplayName("Attendee List")]
        [MasterDetailRelation("MeetingId", IncludeColumns = "ContactFullName"), MeetingAttendeeEditor]
        public List<MeetingAttendeeRow> AttendeeList
        {
            get { return Fields.AttendeeList[this]; }
            set { Fields.AttendeeList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MeetingName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingRow()
            : base(Fields)
        {
        }

        public class RowFields : Administration.Entities.LoggingRow.LoggingRowFields
        {
            public Int32Field MeetingId;
            public StringField MeetingName;
            public StringField MeetingNumber;
            public GuidField MeetingGuid;
            public Int32Field MeetingTypeId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field LocationId;
            public Int32Field UnitId;
            public Int32Field OrganizerContactId;
            public Int32Field ReporterContactId;

            public StringField MeetingTypeName;

            public StringField LocationName;

            public StringField UnitName;
            public Int32Field UnitParentUnitId;

            public StringField OrganizerContactTitle;
            public StringField OrganizerContactFirstName;
            public StringField OrganizerContactLastName;
            public StringField OrganizerContactFullName;
            public StringField OrganizerContactEmail;
            public StringField OrganizerContactIdentityNo;
            public Int32Field OrganizerContactUserId;

            public StringField ReporterContactTitle;
            public StringField ReporterContactFirstName;
            public StringField ReporterContactLastName;
            public StringField ReporterContactFullName;
            public StringField ReporterContactEmail;
            public StringField ReporterContactIdentityNo;
            public Int32Field ReporterContactUserId;

            public ListField<MeetingAttendeeRow> AttendeeList;

            public RowFields()
                : base("Meetings")
            {
                LocalTextPrefix = "Meeting.Meeting";
            }
        }
    }
}