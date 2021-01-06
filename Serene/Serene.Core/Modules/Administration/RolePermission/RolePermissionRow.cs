using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Administration.Entities
{
    [ConnectionKey("Default"), Module("Administration"), TableName("RolePermissions")]
    [DisplayName("Role Permissions"), InstanceName("Role Permission")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    public sealed class RolePermissionRow : Row<RolePermissionRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Role Permission Id"), Identity, IdProperty]
        public Int64? RolePermissionId
        {
            get => fields.RolePermissionId[this];
            set => fields.RolePermissionId[this] = value;
        }

        [DisplayName("Role Id"), NotNull, ForeignKey("Roles", "RoleId"), LeftJoin("jRole")]
        public Int32? RoleId
        {
            get => fields.RoleId[this];
            set => fields.RoleId[this] = value;
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch, NameProperty]
        public String PermissionKey
        {
            get => fields.PermissionKey[this];
            set => fields.PermissionKey[this] = value;
        }

        [DisplayName("Role Role Name"), Expression("jRole.[RoleName]")]
        public String RoleRoleName
        {
            get => fields.RoleRoleName[this];
            set => fields.RoleRoleName[this] = value;
        }
        public RolePermissionRow()
        {
        }

        public RolePermissionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field RolePermissionId;
            public Int32Field RoleId;
            public StringField PermissionKey;

            public StringField RoleRoleName;
        }
    }
}