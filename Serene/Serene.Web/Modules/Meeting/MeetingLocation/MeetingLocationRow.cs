
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

    [ConnectionKey("Default"), DisplayName("MeetingLocation"), InstanceName("MeetingLocation"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingLocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Location Id"), Identity]
        public Int32? MeetingLocationId
        {
            get { return Fields.MeetingLocationId[this]; }
            set { Fields.MeetingLocationId[this] = value; }
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

        [DisplayName("Address"), Size(100)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingLocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingLocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingLocationId;
            public readonly StringField Name;
            public readonly Int16Field IsActive;
            public readonly StringField Address;

            public RowFields()
                : base("MeetingLocation")
            {
                LocalTextPrefix = "Meeting.MeetingLocation";
            }
        }
    }
}