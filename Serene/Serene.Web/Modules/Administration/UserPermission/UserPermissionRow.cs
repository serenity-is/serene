
namespace Serene.Administration.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("UserPermissions"), InstanceName("UserPermissions"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Security)]
    [ModifyPermission(Administration.PermissionKeys.Security)]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class UserPermissionRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Permission Id"), Identity]
        public Int64? UserPermissionId
        {
            get { return Fields.UserPermissionId[this]; }
            set { Fields.UserPermissionId[this] = value; }
        }

        [DisplayName("User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch]
        public String PermissionKey
        {
            get { return Fields.PermissionKey[this]; }
            set { Fields.PermissionKey[this] = value; }
        }

        [Column("[Grant]")]
        public Boolean? Grant
        {
            get { return Fields.Grant[this]; }
            set { Fields.Grant[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.Username")]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.DisplayName")]
        public String User
        {
            get { return Fields.User[this]; }
            set { Fields.User[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserPermissionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PermissionKey; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPermissionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int64Field UserPermissionId;
            public readonly Int32Field UserId;
            public readonly StringField PermissionKey;
            public readonly BooleanField Grant;

            public readonly StringField Username;
            public readonly StringField User;

            public RowFields()
                : base("UserPermissions")
            {
                LocalTextPrefix = "Administration.UserPermission";
            }
        }
    }
}