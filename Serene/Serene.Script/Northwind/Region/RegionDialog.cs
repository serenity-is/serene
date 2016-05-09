
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    [IdProperty("RegionID"), NameProperty("RegionDescription")]
    [FormKey("Northwind.Region"), LocalTextPrefix("Northwind.Region"), Service("Northwind/Region")]
    public class RegionDialog : EntityDialog<RegionRow>
    {
    }
}