
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingAgendaId"), NameProperty("Tags"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingAgenda"), LocalTextPrefix("Meeting.MeetingAgenda"), Service("Meeting/MeetingAgenda")]
    public class MeetingAgendaDialog : EntityDialog<MeetingAgendaRow>
    {
    }
}