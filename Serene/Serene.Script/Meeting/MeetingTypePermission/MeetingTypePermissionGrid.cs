
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingTypePermission"), IdProperty("MeetingTypePermissionId")]
    [DialogType(typeof(MeetingTypePermissionDialog)), LocalTextPrefix("Meeting.MeetingTypePermission"), Service("Meeting/MeetingTypePermission")]
    public class MeetingTypePermissionGrid : EntityGrid<MeetingTypePermissionRow>
    {
        public MeetingTypePermissionGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingTypePermissionRow
    {
    }
}