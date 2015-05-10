
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
    public partial class MeetingTypeRow
    {
        public Int32? MeetingTypeId { get; set; }
        public String Name { get; set; }
        public Int16? IsActive { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingTypeId = "MeetingTypeId";
            [InlineConstant] public const string Name = "Name";
            [InlineConstant] public const string IsActive = "IsActive";
        }
    }
    
}

