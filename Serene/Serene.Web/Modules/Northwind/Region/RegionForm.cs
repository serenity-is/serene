
namespace Serene.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.Region")]
    [BasedOnRow(typeof(Entities.RegionRow))]
    public class RegionForm
    {
        public Int32? RegionID { get; set; }
        public String RegionDescription { get; set; }
    }
}