
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

    [ConnectionKey("Default"), DisplayName("MeetingDecisionRelevant"), InstanceName("MeetingDecisionRelevant"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingDecisionRelevantRow : Row, IIdRow
    {
        [DisplayName("Meeting Decision Relevant Id"), Identity]
        public Int32? MeetingDecisionRelevantId
        {
            get { return Fields.MeetingDecisionRelevantId[this]; }
            set { Fields.MeetingDecisionRelevantId[this] = value; }
        }

        [DisplayName("Meeting Decision Id"), NotNull, ForeignKey("MeetingDecision", "MeetingDecisionId"), LeftJoin("jMeetingDecision")]
        public Int32? MeetingDecisionId
        {
            get { return Fields.MeetingDecisionId[this]; }
            set { Fields.MeetingDecisionId[this] = value; }
        }

        [DisplayName("Relevant User Id"), NotNull]
        public Int32? RelevantUserId
        {
            get { return Fields.RelevantUserId[this]; }
            set { Fields.RelevantUserId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Meeting Decision Meeting Id"), Expression("jMeetingDecision.MeetingId")]
        public Int32? MeetingDecisionMeetingId
        {
            get { return Fields.MeetingDecisionMeetingId[this]; }
            set { Fields.MeetingDecisionMeetingId[this] = value; }
        }

        [DisplayName("Meeting Decision Resolution Status Id"), Expression("jMeetingDecision.ResolutionStatusId")]
        public Int32? MeetingDecisionResolutionStatusId
        {
            get { return Fields.MeetingDecisionResolutionStatusId[this]; }
            set { Fields.MeetingDecisionResolutionStatusId[this] = value; }
        }

        [DisplayName("Meeting Decision Display Order"), Expression("jMeetingDecision.DisplayOrder")]
        public Int32? MeetingDecisionDisplayOrder
        {
            get { return Fields.MeetingDecisionDisplayOrder[this]; }
            set { Fields.MeetingDecisionDisplayOrder[this] = value; }
        }

        [DisplayName("Meeting Decision Is Active"), Expression("jMeetingDecision.IsActive")]
        public Int16? MeetingDecisionIsActive
        {
            get { return Fields.MeetingDecisionIsActive[this]; }
            set { Fields.MeetingDecisionIsActive[this] = value; }
        }

        [DisplayName("Meeting Decision Meeting Agenda Id"), Expression("jMeetingDecision.MeetingAgendaId")]
        public Int32? MeetingDecisionMeetingAgendaId
        {
            get { return Fields.MeetingDecisionMeetingAgendaId[this]; }
            set { Fields.MeetingDecisionMeetingAgendaId[this] = value; }
        }

        [DisplayName("Meeting Decision Description"), Expression("jMeetingDecision.Description")]
        public String MeetingDecisionDescription
        {
            get { return Fields.MeetingDecisionDescription[this]; }
            set { Fields.MeetingDecisionDescription[this] = value; }
        }

        [DisplayName("Meeting Decision Image File Id"), Expression("jMeetingDecision.ImageFileId")]
        public Int32? MeetingDecisionImageFileId
        {
            get { return Fields.MeetingDecisionImageFileId[this]; }
            set { Fields.MeetingDecisionImageFileId[this] = value; }
        }

        [DisplayName("Meeting Decision Responsible Contact Id"), Expression("jMeetingDecision.ResponsibleContactId")]
        public Int32? MeetingDecisionResponsibleContactId
        {
            get { return Fields.MeetingDecisionResponsibleContactId[this]; }
            set { Fields.MeetingDecisionResponsibleContactId[this] = value; }
        }

        [DisplayName("Meeting Decision Due Date"), Expression("jMeetingDecision.DueDate")]
        public DateTime? MeetingDecisionDueDate
        {
            get { return Fields.MeetingDecisionDueDate[this]; }
            set { Fields.MeetingDecisionDueDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingDecisionRelevantId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingDecisionRelevantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingDecisionRelevantId;
            public readonly Int32Field MeetingDecisionId;
            public readonly Int32Field RelevantUserId;
            public readonly Int16Field IsActive;

            public readonly Int32Field MeetingDecisionMeetingId;
            public readonly Int32Field MeetingDecisionResolutionStatusId;
            public readonly Int32Field MeetingDecisionDisplayOrder;
            public readonly Int16Field MeetingDecisionIsActive;
            public readonly Int32Field MeetingDecisionMeetingAgendaId;
            public readonly StringField MeetingDecisionDescription;
            public readonly Int32Field MeetingDecisionImageFileId;
            public readonly Int32Field MeetingDecisionResponsibleContactId;
            public readonly DateTimeField MeetingDecisionDueDate;


            public RowFields()
                : base("MeetingDecisionRelevant")
            {
                LocalTextPrefix = "Meeting.MeetingDecisionRelevant";
            }
        }
    }
}