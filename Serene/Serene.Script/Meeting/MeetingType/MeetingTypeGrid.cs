
namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Meeting.MeetingType"), IdProperty("MeetingTypeId"), NameProperty("Name"), IsActiveProperty("IsActive")]
    [DialogType(typeof(MeetingTypeDialog)), LocalTextPrefix("Meeting.MeetingType"), Service("Meeting/MeetingType")]
    public class MeetingTypeGrid : EntityGrid<MeetingTypeRow>
    {
        public MeetingTypeGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class MeetingTypeRow
    {
    }
}