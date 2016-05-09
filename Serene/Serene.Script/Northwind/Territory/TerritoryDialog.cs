
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    [IdProperty("ID"), NameProperty("TerritoryID")]
    [FormKey("Northwind.Territory"), LocalTextPrefix("Northwind.Territory"), Service("Northwind/Territory")]
    public class TerritoryDialog : EntityDialog<TerritoryRow>
    {
    }
}