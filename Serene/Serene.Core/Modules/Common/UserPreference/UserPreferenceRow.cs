using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Common.Entities
{
    [ConnectionKey("Default"), Module("Common"), TableName("UserPreferences")]
    [DisplayName("User Preferences"), InstanceName("UserPreference")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class UserPreferenceRow : Row<UserPreferenceRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Identity, IdProperty]
        public Int32? UserPreferenceId
        {
            get => fields.UserPreferenceId[this];
            set => fields.UserPreferenceId[this] = value;
        }

        [DisplayName("User ID")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("PreferenceType"), Size(100), NotNull]
        public String PreferenceType
        {
            get => fields.PreferenceType[this];
            set => fields.PreferenceType[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Value")]
        public String Value
        {
            get => fields.Value[this];
            set => fields.Value[this] = value;
        }
        public UserPreferenceRow()
        {
        }

        public UserPreferenceRow(RowFields fields)
            : base(fields)
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