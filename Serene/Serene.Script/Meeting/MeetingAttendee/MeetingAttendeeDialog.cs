
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingAttendeeId"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingAttendee"), LocalTextPrefix("Meeting.MeetingAttendee"), Service("Meeting/MeetingAttendee")]
    public class MeetingAttendeeDialog : EntityDialog<MeetingAttendeeRow>
    {
    }
}