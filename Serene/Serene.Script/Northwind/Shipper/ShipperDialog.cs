
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    [IdProperty("ShipperID"), NameProperty("CompanyName")]
    [FormKey("Northwind.Shipper"), LocalTextPrefix("Northwind.Shipper"), Service("Northwind/Shipper")]
    public class ShipperDialog : EntityDialog<ShipperRow>
    {
    }
}