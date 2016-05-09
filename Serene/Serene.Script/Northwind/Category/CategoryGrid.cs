
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    [ColumnsKey("Northwind.Category"), IdProperty("CategoryID"), NameProperty("CategoryName")]
    [DialogType(typeof(CategoryDialog)), LocalTextPrefix("Northwind.Category"), Service("Northwind/Category")]
    public class CategoryGrid : EntityGrid<CategoryRow>
    {
        public CategoryGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}