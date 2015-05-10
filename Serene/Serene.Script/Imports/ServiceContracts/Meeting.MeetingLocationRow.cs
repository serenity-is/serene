
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
    public partial class MeetingLocationRow
    {
        public Int32? MeetingLocationId { get; set; }
        public String Name { get; set; }
        public Int16? IsActive { get; set; }
        public String Address { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingLocationId = "MeetingLocationId";
            [InlineConstant] public const string Name = "Name";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string Address = "Address";
        }
    }
    
}

