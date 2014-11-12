
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
    public partial class UserPermissionRow
    {
        public Int64? UserPermissionId { get; set; }
        public Int32? UserId { get; set; }
        public String PermissionKey { get; set; }
        public String Username { get; set; }
        public String User { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string UserPermissionId = "UserPermissionId";
            [InlineConstant] public const string UserId = "UserId";
            [InlineConstant] public const string PermissionKey = "PermissionKey";
            [InlineConstant] public const string Username = "Username";
            [InlineConstant] public const string User = "User";
        }
    }
    
}

