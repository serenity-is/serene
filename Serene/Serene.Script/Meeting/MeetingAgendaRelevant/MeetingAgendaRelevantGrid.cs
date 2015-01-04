
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingAgendaRelevant"), IdProperty("MeetingAgendaRelevantId"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingAgendaRelevantDialog)), LocalTextPrefix("Meeting.MeetingAgendaRelevant"), Service("Meeting/MeetingAgendaRelevant")]
    public class MeetingAgendaRelevantGrid : EntityGrid<MeetingAgendaRelevantRow>
    {
        public MeetingAgendaRelevantGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingAgendaRelevantRow
    {
    }
}