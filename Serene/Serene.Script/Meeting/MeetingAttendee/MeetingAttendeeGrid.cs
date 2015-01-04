
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingAttendee"), IdProperty("MeetingAttendeeId"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingAttendeeDialog)), LocalTextPrefix("Meeting.MeetingAttendee"), Service("Meeting/MeetingAttendee")]
    public class MeetingAttendeeGrid : EntityGrid<MeetingAttendeeRow>
    {
        public MeetingAttendeeGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingAttendeeRow
    {
    }
}