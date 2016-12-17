
namespace Serene.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("UserRoles"), InstanceName("UserRoles"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    public sealed class UserRoleRow : Row, IIdRow
    {
        [DisplayName("User Role Id"), Identity]
        public Int64? UserRoleId
        {
            get { return Fields.UserRoleId[this]; }
            set { Fields.UserRoleId[this] = value; }
        }

        [DisplayName("User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Role Id"), NotNull]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
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
            get { return Fields.UserRoleId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRoleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field UserRoleId;
            public Int32Field UserId;
            public Int32Field RoleId;

            public StringField Username;
            public StringField User;

            public RowFields()
                : base("UserRoles")
            {
                LocalTextPrefix = "Administration.UserRole";
            }
        }
    }
}