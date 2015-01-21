
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

    [ConnectionKey("Default"), DisplayName("Attendee Types"), InstanceName("Attendee Type"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingAttendeeTypeRow : Row, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("ID"), Identity]
        public Int32? MeetingAttendeeTypeId
        {
            get { return Fields.MeetingAttendeeTypeId[this]; }
            set { Fields.MeetingAttendeeTypeId[this] = value; }
        }

        [DisplayName("Attendee Type"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Is Active"), NotNull, DefaultValue(1)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingAttendeeTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingAttendeeTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingAttendeeTypeId;
            public readonly StringField Name;
            public readonly Int16Field IsActive;

            public RowFields()
                : base("MeetingAttendeeType")
            {
                LocalTextPrefix = "Meeting.MeetingAttendeeType";
            }
        }
    }
}