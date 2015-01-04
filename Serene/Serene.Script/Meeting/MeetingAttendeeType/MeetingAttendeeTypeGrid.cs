
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingAttendeeType"), IdProperty("MeetingAttendeeTypeId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingAttendeeTypeDialog)), LocalTextPrefix("Meeting.MeetingAttendeeType"), Service("Meeting/MeetingAttendeeType")]
    public class MeetingAttendeeTypeGrid : EntityGrid<MeetingAttendeeTypeRow>
    {
        public MeetingAttendeeTypeGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingAttendeeTypeRow
    {
    }
}