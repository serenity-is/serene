
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingLocation"), IdProperty("MeetingLocationId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingLocationDialog)), LocalTextPrefix("Meeting.MeetingLocation"), Service("Meeting/MeetingLocation")]
    public class MeetingLocationGrid : EntityGrid<MeetingLocationRow>
    {
        public MeetingLocationGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingLocationRow
    {
    }
}