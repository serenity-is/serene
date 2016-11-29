
namespace Serene.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.Meeting")]
    [BasedOnRow(typeof(Entities.MeetingRow))]
    public class MeetingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeetingId { get; set; }
        [EditLink]
        public String MeetingName { get; set; }
        public String MeetingNumber { get; set; }
        public String MeetingTypeName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String LocationName { get; set; }
        public String UnitName { get; set; }
        public String OrganizerContactFullName { get; set; }
        public String ReporterContactFullName { get; set; }
    }
}