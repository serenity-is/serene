
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

    [ConnectionKey("Default"), DisplayName("MeetingAgendaType"), InstanceName("MeetingAgendaType"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingAgendaTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Agenda Type Id"), Identity]
        public Int32? MeetingAgendaTypeId
        {
            get { return Fields.MeetingAgendaTypeId[this]; }
            set { Fields.MeetingAgendaTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingAgendaTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAgendaTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingAgendaTypeId;
            public readonly StringField Name;
            public readonly Int16Field IsActive;

            public RowFields()
                : base("MeetingAgendaType")
            {
                LocalTextPrefix = "Meeting.MeetingAgendaType";
            }
        }
    }
}