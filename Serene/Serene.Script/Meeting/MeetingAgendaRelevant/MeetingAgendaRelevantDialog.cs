
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingAgendaRelevantId"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingAgendaRelevant"), LocalTextPrefix("Meeting.MeetingAgendaRelevant"), Service("Meeting/MeetingAgendaRelevant")]
    public class MeetingAgendaRelevantDialog : EntityDialog<MeetingAgendaRelevantRow>
    {
    }
}