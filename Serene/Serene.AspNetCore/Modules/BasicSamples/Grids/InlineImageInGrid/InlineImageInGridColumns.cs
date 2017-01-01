
namespace Serene.BasicSamples.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("BasicSamples.InlineImageInGrid")]
    [BasedOnRow(typeof(Northwind.Entities.ProductRow))]
    public class InlineImageInGridColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ProductID { get; set; }
        [EditLink, Width(250)]
        public String ProductName { get; set; }
        [InlineImageFormatter, Width(450)]
        public String ProductImage { get; set; }
        [InlineImageFormatter(FileProperty = "ProductImage", Thumb = true), Width(450)]
        public String ProductThumbnail { get; set; }

    }
}