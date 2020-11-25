using Serenity.ComponentModel;
using System;

namespace Serene.Northwind.Forms
{
    [FormScript("Northwind.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryForm
    {
        public String CategoryName { get; set; }
        public String Description { get; set; }
    }
}