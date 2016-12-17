

namespace Serene.Meeting.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("MeetingDecisionRelevant"), InstanceName("MeetingDecisionRelevant"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class MeetingDecisionRelevantRow : Row, IIdRow
    {
        [DisplayName("Decision Relevant Id"), Identity]
        public Int32? DecisionRelevantId
        {
            get { return Fields.DecisionRelevantId[this]; }
            set { Fields.DecisionRelevantId[this] = value; }
        }

        [DisplayName("Decision"), NotNull, ForeignKey("MeetingDecisions", "DecisionId"), LeftJoin("jDecision"), TextualField("DecisionDescription")]
        public Int32? DecisionId
        {
            get { return Fields.DecisionId[this]; }
            set { Fields.DecisionId[this] = value; }
        }

        [DisplayName("Contact"), NotNull, ForeignKey("Contacts", "ContactId"), LeftJoin("jContact"), TextualField("ContactTitle")]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Decision Meeting Id"), Expression("jDecision.[MeetingId]")]
        public Int32? DecisionMeetingId
        {
            get { return Fields.DecisionMeetingId[this]; }
            set { Fields.DecisionMeetingId[this] = value; }
        }

        [DisplayName("Decision Agenda Id"), Expression("jDecision.[AgendaId]")]
        public Int32? DecisionAgendaId
        {
            get { return Fields.DecisionAgendaId[this]; }
            set { Fields.DecisionAgendaId[this] = value; }
        }

        [DisplayName("Decision Description"), Expression("jDecision.[Description]")]
        public String DecisionDescription
        {
            get { return Fields.DecisionDescription[this]; }
            set { Fields.DecisionDescription[this] = value; }
        }

        [DisplayName("Decision Decision Number"), Expression("jDecision.[DecisionNumber]")]
        public Int32? DecisionDecisionNumber
        {
            get { return Fields.DecisionDecisionNumber[this]; }
            set { Fields.DecisionDecisionNumber[this] = value; }
        }

        [DisplayName("Decision Responsible Contact Id"), Expression("jDecision.[ResponsibleContactId]")]
        public Int32? DecisionResponsibleContactId
        {
            get { return Fields.DecisionResponsibleContactId[this]; }
            set { Fields.DecisionResponsibleContactId[this] = value; }
        }

        [DisplayName("Decision Due Date"), Expression("jDecision.[DueDate]")]
        public DateTime? DecisionDueDate
        {
            get { return Fields.DecisionDueDate[this]; }
            set { Fields.DecisionDueDate[this] = value; }
        }

        [DisplayName("Decision Resolution Status"), Expression("jDecision.[ResolutionStatus]")]
        public Int32? DecisionResolutionStatus
        {
            get { return Fields.DecisionResolutionStatus[this]; }
            set { Fields.DecisionResolutionStatus[this] = value; }
        }

        [DisplayName("Decision Images"), Expression("jDecision.[Images]")]
        public String DecisionImages
        {
            get { return Fields.DecisionImages[this]; }
            set { Fields.DecisionImages[this] = value; }
        }

        [DisplayName("Decision Attachments"), Expression("jDecision.[Attachments]")]
        public String DecisionAttachments
        {
            get { return Fields.DecisionAttachments[this]; }
            set { Fields.DecisionAttachments[this] = value; }
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
            get { return Fields.DecisionRelevantId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingDecisionRelevantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DecisionRelevantId;
            public Int32Field DecisionId;
            public Int32Field ContactId;

            public Int32Field DecisionMeetingId;
            public Int32Field DecisionAgendaId;
            public StringField DecisionDescription;
            public Int32Field DecisionDecisionNumber;
            public Int32Field DecisionResponsibleContactId;
            public DateTimeField DecisionDueDate;
            public Int32Field DecisionResolutionStatus;
            public StringField DecisionImages;
            public StringField DecisionAttachments;

            public StringField ContactTitle;
            public StringField ContactFirstName;
            public StringField ContactLastName;
            public StringField ContactEmail;
            public StringField ContactIdentityNo;
            public Int32Field ContactUserId;

            public RowFields()
                : base("MeetingDecisionRelevant")
            {
                LocalTextPrefix = "Meeting.MeetingDecisionRelevant";
            }
        }
    }
}