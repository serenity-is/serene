
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingId"), NameProperty("MeetingGuid"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.Meeting"), LocalTextPrefix("Meeting.Meeting"), Service("Meeting/Meeting")]
    public class MeetingDialog : EntityDialog<MeetingRow>
    {
    }
}