
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingDecision"), IdProperty("MeetingDecisionId"), NameProperty("Description"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingDecisionDialog)), LocalTextPrefix("Meeting.MeetingDecision"), Service("Meeting/MeetingDecision")]
    public class MeetingDecisionGrid : EntityGrid<MeetingDecisionRow>
    {
        public MeetingDecisionGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingDecisionRow
    {
    }
}