
namespace Serene.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryID { get; set; }
        [EditLink, Width(250)]
        public String CategoryName { get; set; }
        [Width(450)]
        public String Description { get; set; }
    }
}