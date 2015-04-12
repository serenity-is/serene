
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
    public partial class MeetingContactRow
    {
        public Int32? MeetingContactId { get; set; }
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public Int16? IsActive { get; set; }
        public String Title { get; set; }
        public String Firstname { get; set; }
        public String Lastname { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingContactId = "MeetingContactId";
            [InlineConstant] public const string DisplayName = "DisplayName";
            [InlineConstant] public const string Email = "Email";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string Title = "Title";
            [InlineConstant] public const string Firstname = "Firstname";
            [InlineConstant] public const string Lastname = "Lastname";
        }
    }
    
}

