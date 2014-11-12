
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
    public partial class UserRoleRow
    {
        public Int64? UserRoleId { get; set; }
        public Int32? UserId { get; set; }
        public Int32? RoleId { get; set; }
        public String Username { get; set; }
        public String User { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string UserRoleId = "UserRoleId";
            [InlineConstant] public const string UserId = "UserId";
            [InlineConstant] public const string RoleId = "RoleId";
            [InlineConstant] public const string Username = "Username";
            [InlineConstant] public const string User = "User";
        }
    }
    
}

