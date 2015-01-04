
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingAttendeeTypeId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingAttendeeType"), LocalTextPrefix("Meeting.MeetingAttendeeType"), Service("Meeting/MeetingAttendeeType")]
    public class MeetingAttendeeTypeDialog : EntityDialog<MeetingAttendeeTypeRow>
    {
    }
}