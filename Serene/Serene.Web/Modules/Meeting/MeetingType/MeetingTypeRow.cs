

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

    [ConnectionKey("Default"), DisplayName("Meeting Types"), InstanceName("Meeting Type"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.Management)]
    [LookupScript("Meeting.MeetingType")]
    public sealed class MeetingTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Type Id"), Identity]
        public Int32? MeetingTypeId
        {
            get { return Fields.MeetingTypeId[this]; }
            set { Fields.MeetingTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, Width(350)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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
            public Int32Field MeetingTypeId;
            public StringField Name;

            public RowFields()
                : base("MeetingTypes")
            {
                LocalTextPrefix = "Meeting.MeetingType";
            }
        }
    }
}