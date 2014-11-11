
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
        public String UserUsername { get; set; }
        public String UserDisplayName { get; set; }
        public String UserSource { get; set; }
        public String UserPasswordHash { get; set; }
        public String UserPasswordSalt { get; set; }
        public String UserInsertDate { get; set; }
        public Int32? UserInsertUserId { get; set; }
        public Int16? UserIsActive { get; set; }
        public String UserUpdateDate { get; set; }
        public Int32? UserUpdateUserId { get; set; }
        public String UserEmail { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string UserPermissionId = "UserPermissionId";
            [InlineConstant] public const string UserId = "UserId";
            [InlineConstant] public const string PermissionKey = "PermissionKey";
            [InlineConstant] public const string UserUsername = "UserUsername";
            [InlineConstant] public const string UserDisplayName = "UserDisplayName";
            [InlineConstant] public const string UserSource = "UserSource";
            [InlineConstant] public const string UserPasswordHash = "UserPasswordHash";
            [InlineConstant] public const string UserPasswordSalt = "UserPasswordSalt";
            [InlineConstant] public const string UserInsertDate = "UserInsertDate";
            [InlineConstant] public const string UserInsertUserId = "UserInsertUserId";
            [InlineConstant] public const string UserIsActive = "UserIsActive";
            [InlineConstant] public const string UserUpdateDate = "UserUpdateDate";
            [InlineConstant] public const string UserUpdateUserId = "UserUpdateUserId";
            [InlineConstant] public const string UserEmail = "UserEmail";
        }
    }
    
}

