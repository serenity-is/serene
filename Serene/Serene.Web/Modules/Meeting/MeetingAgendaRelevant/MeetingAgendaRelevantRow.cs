
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

    [ConnectionKey("Default"), DisplayName("MeetingAgendaRelevant"), InstanceName("MeetingAgendaRelevant"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingAgendaRelevantRow : Row, IIdRow
    {
        [DisplayName("Meeting Agenda Relevant Id"), Identity]
        public Int32? MeetingAgendaRelevantId
        {
            get { return Fields.MeetingAgendaRelevantId[this]; }
            set { Fields.MeetingAgendaRelevantId[this] = value; }
        }

        [DisplayName("Meeting Agenda Id"), NotNull, ForeignKey("MeetingAgenda", "MeetingAgendaId"), LeftJoin("jMeetingAgenda")]
        public Int32? MeetingAgendaId
        {
            get { return Fields.MeetingAgendaId[this]; }
            set { Fields.MeetingAgendaId[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingAgendaRelevantId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAgendaRelevantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingAgendaRelevantId;
            public readonly Int32Field MeetingAgendaId;
            public readonly Int32Field RelevantUserId;
            public readonly Int16Field IsActive;

            public readonly Int32Field MeetingAgendaAgendaTypeId;
            public readonly Int32Field MeetingAgendaMeetingId;
            public readonly Int32Field MeetingAgendaDisplayOrder;
            public readonly Int16Field MeetingAgendaIsActive;
            public readonly Int32Field MeetingAgendaRequestedByContactId;
            public readonly StringField MeetingAgendaTags;
            public readonly StringField MeetingAgendaTitle;
            public readonly StringField MeetingAgendaDescription;
            public readonly Int32Field MeetingAgendaImageFileId;


            public RowFields()
                : base("MeetingAgendaRelevant")
            {
                LocalTextPrefix = "Meeting.MeetingAgendaRelevant";
            }
        }
    }
}