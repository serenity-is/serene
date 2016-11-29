
namespace Serene.Meeting.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Meeting.MeetingLocation")]
    [BasedOnRow(typeof(Entities.MeetingLocationRow))]
    public class MeetingLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LocationId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Address { get; set; }
        public Double Latitude { get; set; }
        public Double Longitude { get; set; }
    }
}