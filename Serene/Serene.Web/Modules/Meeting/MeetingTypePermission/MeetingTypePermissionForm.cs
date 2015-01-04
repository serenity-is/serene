
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Meeting.MeetingTypePermission")]
    [BasedOnRow(typeof(Entities.MeetingTypePermissionRow))]
    public class MeetingTypePermissionForm
    {
        public Int32 MeetingTypeId { get; set; }
        public Int32 UserId { get; set; }
    }
}