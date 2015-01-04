
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

    [ConnectionKey("Default"), DisplayName("MeetingType"), InstanceName("MeetingType"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Type Id"), Identity]
        public Int32? MeetingTypeId
        {
            get { return Fields.MeetingTypeId[this]; }
            set { Fields.MeetingTypeId[this] = value; }
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
            get { return Fields.MeetingTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingTypeId;
            public readonly StringField Name;
            public readonly Int16Field IsActive;

            public RowFields()
                : base("MeetingType")
            {
                LocalTextPrefix = "Meeting.MeetingType";
            }
        }
    }
}