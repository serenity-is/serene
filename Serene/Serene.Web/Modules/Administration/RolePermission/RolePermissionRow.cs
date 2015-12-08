
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

    [ConnectionKey("Default"), DisplayName("Role Permissions"), InstanceName("Role Permission"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Security)]
    [ModifyPermission(Administration.PermissionKeys.Security)]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class RolePermissionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Role Permission Id"), Identity]
        public Int64? RolePermissionId
        {
            get { return Fields.RolePermissionId[this]; }
            set { Fields.RolePermissionId[this] = value; }
        }

        [DisplayName("Role Id"), NotNull, ForeignKey("Roles", "RoleId"), LeftJoin("jRole")]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch]
        public String PermissionKey
        {
            get { return Fields.PermissionKey[this]; }
            set { Fields.PermissionKey[this] = value; }
        }

        [DisplayName("Role Role Name"), Expression("jRole.[RoleName]")]
        public String RoleRoleName
        {
            get { return Fields.RoleRoleName[this]; }
            set { Fields.RoleRoleName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RolePermissionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PermissionKey; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RolePermissionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int64Field RolePermissionId;
            public readonly Int32Field RoleId;
            public readonly StringField PermissionKey;

            public readonly StringField RoleRoleName;


            public RowFields()
                : base("RolePermissions")
            {
                LocalTextPrefix = "Administration.RolePermission";
            }
        }
    }
}