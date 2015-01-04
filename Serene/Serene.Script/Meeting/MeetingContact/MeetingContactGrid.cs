
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingContact"), IdProperty("MeetingContactId"), NameProperty("DisplayName"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingContactDialog)), LocalTextPrefix("Meeting.MeetingContact"), Service("Meeting/MeetingContact")]
    public class MeetingContactGrid : EntityGrid<MeetingContactRow>
    {
        public MeetingContactGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingContactRow
    {
    }
}