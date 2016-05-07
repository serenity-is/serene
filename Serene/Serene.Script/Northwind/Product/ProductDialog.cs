namespace Serene.Northwind
{
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class ProductDialog : EntityDialog<ProductRow>
    {
    }
}
/* 
This class has been ported to TypeScript. See ProductGrid.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("ProductID"), NameProperty("ProductName")]
    [FormKey("Northwind.Product"), LocalTextPrefix("Northwind.Product"), Service("Northwind/Product")]
    public class ProductDialog : EntityDialog<ProductRow>
    {
        protected override IEnumerable<System.Tuple<string, string>> GetLanguages()
        {
            return LanguageList.Value;
        }
    }
}
*/