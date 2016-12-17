

namespace Serene.Meeting.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("MeetingAgendaRelevant"), InstanceName("MeetingAgendaRelevant"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class MeetingAgendaRelevantRow : Row, IIdRow
    {
        [DisplayName("Agenda Relevant Id"), Identity]
        public Int32? AgendaRelevantId
        {
            get { return Fields.AgendaRelevantId[this]; }
            set { Fields.AgendaRelevantId[this] = value; }
        }

        [DisplayName("Agenda"), NotNull, ForeignKey("[MeetingAgendas]", "AgendaId"), LeftJoin("jAgenda"), TextualField("AgendaTitle")]
        public Int32? AgendaId
        {
            get { return Fields.AgendaId[this]; }
            set { Fields.AgendaId[this] = value; }
        }

        [DisplayName("Contact"), NotNull, ForeignKey("[Contacts]", "ContactId"), LeftJoin("jContact"), TextualField("ContactTitle")]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Agenda Meeting Id"), Expression("jAgenda.[MeetingId]")]
        public Int32? AgendaMeetingId
        {
            get { return Fields.AgendaMeetingId[this]; }
            set { Fields.AgendaMeetingId[this] = value; }
        }

        [DisplayName("Agenda Agenda Number"), Expression("jAgenda.[AgendaNumber]")]
        public Int32? AgendaAgendaNumber
        {
            get { return Fields.AgendaAgendaNumber[this]; }
            set { Fields.AgendaAgendaNumber[this] = value; }
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
            get { return Fields.AgendaRelevantId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAgendaRelevantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AgendaRelevantId;
            public Int32Field AgendaId;
            public Int32Field ContactId;

            public Int32Field AgendaMeetingId;
            public Int32Field AgendaAgendaNumber;
            public StringField AgendaTitle;
            public StringField AgendaDescription;
            public Int32Field AgendaAgendaTypeId;
            public Int32Field AgendaRequestedByContactId;
            public StringField AgendaImages;
            public StringField AgendaAttachments;

            public StringField ContactTitle;
            public StringField ContactFirstName;
            public StringField ContactLastName;
            public StringField ContactEmail;
            public StringField ContactIdentityNo;
            public Int32Field ContactUserId;

            public RowFields()
                : base("[MeetingAgendaRelevant]")
            {
                LocalTextPrefix = "Meeting.MeetingAgendaRelevant";
            }
        }
    }
}