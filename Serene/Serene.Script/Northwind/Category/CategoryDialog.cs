
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [IdProperty("CategoryID"), NameProperty("CategoryName")]
    [FormKey("Northwind.Category"), LocalTextPrefix("Northwind.Category"), Service("Northwind/Category")]
    [Imported]
    public class CategoryDialog : EntityDialog<CategoryRow>
    {
        protected override IEnumerable<System.Tuple<string, string>> GetLanguages()
        {
            return LanguageList.GetValue();
        }
    }
}