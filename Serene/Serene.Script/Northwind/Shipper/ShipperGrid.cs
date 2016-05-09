
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    [ColumnsKey("Northwind.Shipper"), IdProperty("ShipperID"), NameProperty("CompanyName")]
    [DialogType(typeof(ShipperDialog)), LocalTextPrefix("Northwind.Shipper"), Service("Northwind/Shipper")]
    public class ShipperGrid : EntityGrid<ShipperRow>
    {
        public ShipperGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}