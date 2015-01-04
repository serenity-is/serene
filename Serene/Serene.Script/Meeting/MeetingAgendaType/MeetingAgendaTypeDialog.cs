
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingAgendaTypeId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingAgendaType"), LocalTextPrefix("Meeting.MeetingAgendaType"), Service("Meeting/MeetingAgendaType")]
    public class MeetingAgendaTypeDialog : EntityDialog<MeetingAgendaTypeRow>
    {
    }
}