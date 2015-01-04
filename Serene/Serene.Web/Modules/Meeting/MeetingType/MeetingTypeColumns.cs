
namespace Serene.Meeting.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingType")]
    [BasedOnRow(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int16 IsActive { get; set; }
    }
}