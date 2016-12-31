
namespace Serene.Meeting.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Meeting.MeetingType")]
    [BasedOnRow(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}