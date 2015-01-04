
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingContactId"), NameProperty("DisplayName"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingContact"), LocalTextPrefix("Meeting.MeetingContact"), Service("Meeting/MeetingContact")]
    public class MeetingContactDialog : EntityDialog<MeetingContactRow>
    {
    }
}