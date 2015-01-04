
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

    [ConnectionKey("Default"), DisplayName("MeetingTypePermission"), InstanceName("MeetingTypePermission"), TwoLevelCached]
    [ReadPermission("Meeting")]
    [ModifyPermission("Meeting")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MeetingTypePermissionRow : Row, IIdRow
    {
        [DisplayName("Meeting Type Permission Id"), Identity]
        public Int32? MeetingTypePermissionId
        {
            get { return Fields.MeetingTypePermissionId[this]; }
            set { Fields.MeetingTypePermissionId[this] = value; }
        }

        [DisplayName("Meeting Type Id"), NotNull, ForeignKey("MeetingType", "MeetingTypeId"), LeftJoin("jMeetingType")]
        public Int32? MeetingTypeId
        {
            get { return Fields.MeetingTypeId[this]; }
            set { Fields.MeetingTypeId[this] = value; }
        }

        [DisplayName("User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Meeting Type Name"), Expression("jMeetingType.Name")]
        public String MeetingTypeName
        {
            get { return Fields.MeetingTypeName[this]; }
            set { Fields.MeetingTypeName[this] = value; }
        }

        [DisplayName("Meeting Type Is Active"), Expression("jMeetingType.IsActive")]
        public Int16? MeetingTypeIsActive
        {
            get { return Fields.MeetingTypeIsActive[this]; }
            set { Fields.MeetingTypeIsActive[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.Username")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.DisplayName")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.Source")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.PasswordHash")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.PasswordSalt")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.InsertDate")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.InsertUserId")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.IsActive")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.UpdateDate")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.UpdateUserId")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.Email")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MeetingTypePermissionId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingTypePermissionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MeetingTypePermissionId;
            public readonly Int32Field MeetingTypeId;
            public readonly Int32Field UserId;

            public readonly StringField MeetingTypeName;
            public readonly Int16Field MeetingTypeIsActive;


            public readonly StringField UserUsername;
            public readonly StringField UserDisplayName;
            public readonly StringField UserSource;
            public readonly StringField UserPasswordHash;
            public readonly StringField UserPasswordSalt;
            public readonly DateTimeField UserInsertDate;
            public readonly Int32Field UserInsertUserId;
            public readonly Int16Field UserIsActive;
            public readonly DateTimeField UserUpdateDate;
            public readonly Int32Field UserUpdateUserId;
            public readonly StringField UserEmail;


            public RowFields()
                : base("MeetingTypePermission")
            {
                LocalTextPrefix = "Meeting.MeetingTypePermission";
            }
        }
    }
}