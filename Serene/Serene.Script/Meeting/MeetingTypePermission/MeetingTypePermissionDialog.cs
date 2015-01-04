
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("MeetingTypePermissionId")]
    [FormKey("Meeting.MeetingTypePermission"), LocalTextPrefix("Meeting.MeetingTypePermission"), Service("Meeting/MeetingTypePermission")]
    public class MeetingTypePermissionDialog : EntityDialog<MeetingTypePermissionRow>
    {
    }
}