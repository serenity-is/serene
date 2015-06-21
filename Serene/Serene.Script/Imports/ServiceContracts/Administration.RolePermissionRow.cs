
namespace Serene.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class RolePermissionRow
    {
        [InlineConstant] public const string IdProperty = "RolePermissionId";
        [InlineConstant] public const string NameProperty = "PermissionKey";
        [InlineConstant] public const string LocalTextPrefix = "Administration.RolePermission";
    
        public Int64? RolePermissionId { get; set; }
        public Int32? RoleId { get; set; }
        public String PermissionKey { get; set; }
        public String RoleRoleName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string RolePermissionId = "RolePermissionId";
            [InlineConstant] public const string RoleId = "RoleId";
            [InlineConstant] public const string PermissionKey = "PermissionKey";
            [InlineConstant] public const string RoleRoleName = "RoleRoleName";
        }
    }
    
}

