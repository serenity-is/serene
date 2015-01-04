
namespace Serene.Meeting.Forms
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
        public String MeetingGuid { get; set; }
        public String MeetingName { get; set; }
        public Int32 MeetingTypeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public Int32 InsertDate { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int32 UpdateDate { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 OrganizationId { get; set; }
        public Int32 OrganizerContactId { get; set; }
        public Int32 ReporterContactId { get; set; }
    }
}