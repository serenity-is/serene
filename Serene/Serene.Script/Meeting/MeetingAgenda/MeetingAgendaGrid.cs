
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingAgenda"), IdProperty("MeetingAgendaId"), NameProperty("Tags"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingAgendaDialog)), LocalTextPrefix("Meeting.MeetingAgenda"), Service("Meeting/MeetingAgenda")]
    public class MeetingAgendaGrid : EntityGrid<MeetingAgendaRow>
    {
        public MeetingAgendaGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingAgendaRow
    {
    }
}