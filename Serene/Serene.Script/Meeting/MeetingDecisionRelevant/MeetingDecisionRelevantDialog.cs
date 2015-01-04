
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingDecisionRelevantId"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingDecisionRelevant"), LocalTextPrefix("Meeting.MeetingDecisionRelevant"), Service("Meeting/MeetingDecisionRelevant")]
    public class MeetingDecisionRelevantDialog : EntityDialog<MeetingDecisionRelevantRow>
    {
    }
}