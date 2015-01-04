
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingDecisionRelevant"), IdProperty("MeetingDecisionRelevantId"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingDecisionRelevantDialog)), LocalTextPrefix("Meeting.MeetingDecisionRelevant"), Service("Meeting/MeetingDecisionRelevant")]
    public class MeetingDecisionRelevantGrid : EntityGrid<MeetingDecisionRelevantRow>
    {
        public MeetingDecisionRelevantGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingDecisionRelevantRow
    {
    }
}