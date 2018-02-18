
namespace Serene.Common.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Common"), TableName("UserPreferences")]
    [DisplayName("User Preferences"), InstanceName("UserPreference")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class UserPreferenceRow : Row, IIdRow, INameRow
    {
        [DisplayName("ID"), Identity]
        public Int32? UserPreferenceId
        {
            get { return Fields.UserPreferenceId[this]; }
            set { Fields.UserPreferenceId[this] = value; }
        }

        [DisplayName("User ID")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("PreferenceType"), Size(100), NotNull]
        public String PreferenceType
        {
            get { return Fields.PreferenceType[this]; }
            set { Fields.PreferenceType[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Value")]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserPreferenceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPreferenceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field UserPreferenceId;
            public readonly Int32Field UserId;
            public readonly StringField PreferenceType;
            public readonly StringField Name;
            public readonly StringField Value;
        }
    }
}