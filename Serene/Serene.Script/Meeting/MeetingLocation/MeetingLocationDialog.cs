
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingLocationId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingLocation"), LocalTextPrefix("Meeting.MeetingLocation"), Service("Meeting/MeetingLocation")]
    public class MeetingLocationDialog : EntityDialog<MeetingLocationRow>
    {
    }
}