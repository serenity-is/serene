
namespace Serene.Meeting
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class MeetingTypePermissionRow
    {
        public Int32? MeetingTypePermissionId { get; set; }
        public Int32? MeetingTypeId { get; set; }
        public Int32? UserId { get; set; }
        public String MeetingTypeName { get; set; }
        public Int16? MeetingTypeIsActive { get; set; }
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
            [InlineConstant] public const string MeetingTypePermissionId = "MeetingTypePermissionId";
            [InlineConstant] public const string MeetingTypeId = "MeetingTypeId";
            [InlineConstant] public const string UserId = "UserId";
            [InlineConstant] public const string MeetingTypeName = "MeetingTypeName";
            [InlineConstant] public const string MeetingTypeIsActive = "MeetingTypeIsActive";
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

