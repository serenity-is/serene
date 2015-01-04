
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingTypeId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [FormKey("Meeting.MeetingType"), LocalTextPrefix("Meeting.MeetingType"), Service("Meeting/MeetingType")]
    public class MeetingTypeDialog : EntityDialog<MeetingTypeRow>
    {
    }
}