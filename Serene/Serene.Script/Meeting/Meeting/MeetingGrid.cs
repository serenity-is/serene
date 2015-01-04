
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.Meeting"), IdProperty("MeetingId"), NameProperty("MeetingGuid"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingDialog)), LocalTextPrefix("Meeting.Meeting"), Service("Meeting/Meeting")]
    public class MeetingGrid : EntityGrid<MeetingRow>
    {
        public MeetingGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingRow
    {
    }
}