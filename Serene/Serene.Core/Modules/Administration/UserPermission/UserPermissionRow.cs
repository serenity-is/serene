using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Administration.Entities
{
    [ConnectionKey("Default"), Module("Administration"), TableName("UserPermissions")]
    [DisplayName("UserPermissions"), InstanceName("UserPermissions")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
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

        [DisplayName("Grant")]
        public Boolean? Granted
        {
            get { return Fields.Granted[this]; }
            set { Fields.Granted[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
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
            public Int64Field UserPermissionId;
            public Int32Field UserId;
            public StringField PermissionKey;
            public BooleanField Granted;

            public StringField Username;
            public StringField User;
        }
    }
}