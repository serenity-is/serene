
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingDecisionId"), NameProperty("Description"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingDecision"), LocalTextPrefix("Meeting.MeetingDecision"), Service("Meeting/MeetingDecision")]
    public class MeetingDecisionDialog : EntityDialog<MeetingDecisionRow>
    {
    }
}