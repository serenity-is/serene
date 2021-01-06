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
    public sealed class UserPermissionRow : Row<UserPermissionRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("User Permission Id"), Identity, IdProperty]
        public Int64? UserPermissionId
        {
            get => fields.UserPermissionId[this];
            set => fields.UserPermissionId[this] = value;
        }

        [DisplayName("User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch, NameProperty]
        public String PermissionKey
        {
            get => fields.PermissionKey[this];
            set => fields.PermissionKey[this] = value;
        }

        [DisplayName("Grant")]
        public Boolean? Granted
        {
            get => fields.Granted[this];
            set => fields.Granted[this] = value;
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String Username
        {
            get => fields.Username[this];
            set => fields.Username[this] = value;
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String User
        {
            get => fields.User[this];
            set => fields.User[this] = value;
        }
        public UserPermissionRow()
        {
        }

        public UserPermissionRow(RowFields fields)
            : base(fields)
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