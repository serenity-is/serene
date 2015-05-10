
namespace Serene.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.Region")]
    [BasedOnRow(typeof(Entities.RegionRow))]
    public class RegionForm
    {
        public Int32? RegionID { get; set; }
        [DateTimeEditor(IntervalMinutes = 5)]
        public String RegionDescription { get; set; }
    }
}