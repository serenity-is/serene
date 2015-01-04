
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingAgendaType"), IdProperty("MeetingAgendaTypeId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingAgendaTypeDialog)), LocalTextPrefix("Meeting.MeetingAgendaType"), Service("Meeting/MeetingAgendaType")]
    public class MeetingAgendaTypeGrid : EntityGrid<MeetingAgendaTypeRow>
    {
        public MeetingAgendaTypeGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingAgendaTypeRow
    {
    }
}