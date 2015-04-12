
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
    public partial class MeetingAgendaTypeRow
    {
        public Int32? MeetingAgendaTypeId { get; set; }
        public String Name { get; set; }
        public Int16? IsActive { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MeetingAgendaTypeId = "MeetingAgendaTypeId";
            [InlineConstant] public const string Name = "Name";
            [InlineConstant] public const string IsActive = "IsActive";
        }
    }
    
}

