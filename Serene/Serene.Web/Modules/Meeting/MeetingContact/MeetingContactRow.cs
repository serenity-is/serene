
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

    [ConnectionKey("Default"), DisplayName("MeetingContact"), InstanceName("MeetingContact"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingContactRow : Row, IIdRow, INameRow
    {
        [DisplayName("Meeting Contact Id"), Identity]
        public Int32? MeetingContactId
        {
            get { return Fields.MeetingContactId[this]; }
            set { Fields.MeetingContactId[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, QuickSearch]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100), NotNull]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Title"), Size(15)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Firstname"), Size(30)]
        public String Firstname
        {
            get { return Fields.Firstname[this]; }
            set { Fields.Firstname[this] = value; }
        }

        [DisplayName("Lastname"), Size(50)]
        public String Lastname
        {
            get { return Fields.Lastname[this]; }
            set { Fields.Lastname[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingContactId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingContactRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingContactId;
            public readonly StringField DisplayName;
            public readonly StringField Email;
            public readonly Int16Field IsActive;
            public readonly StringField Title;
            public readonly StringField Firstname;
            public readonly StringField Lastname;

            public RowFields()
                : base("MeetingContact")
            {
                LocalTextPrefix = "Meeting.MeetingContact";
            }
        }
    }
}