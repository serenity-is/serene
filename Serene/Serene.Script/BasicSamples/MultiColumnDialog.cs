using jQueryApi;
using Serene.Northwind;
using Serenity;

namespace Serene.BasicSamples
{
    /// <summary>
    /// Styling for columns is done with CSS in site.basicsamples.less file.
    /// We just need to set flexify options here to determine how much editors
    /// will grow or shrink when dialog is resized. If dialog wasn't resizable
    /// we didn't have to do this.
    /// </summary>
    public class MultiColumnDialog : OrderDialog
    {
        public MultiColumnDialog()
        {
            // as these editors are in a three column line, 
            // all should grow 0.5px when dialog grows 1px
            form.OrderDate.Element.FlexXFactor(0.5);
            form.RequiredDate.Element.FlexXFactor(0.5);
            form.ShipName.Element.FlexXFactor(0.5);
            form.ShipCity.Element.FlexXFactor(0.5);
            form.ShipPostalCode.Element.FlexXFactor(0.5);
            form.ShipAddress.Element.FlexXFactor(0.5);
            form.ShipRegion.Element.FlexXFactor(0.5);
            form.ShipCountry.Element.FlexXFactor(0.5);

            // as these editors are in a three column line, 
            // all should grow 0.33px when dialog grows 1px
            form.ShippedDate.Element.FlexXFactor(0.33);
            form.ShipVia.Element.Siblings(".select2-container").FlexXFactor(0.33);
            form.Freight.Element.FlexXFactor(0.33);

            // grid should grow in height and width when dialog grows
            form.DetailList.Element.FlexWidthHeight(1.0, 1.0);
        }
    }

    [DialogType(typeof(MultiColumnDialog))]
    public class MultiColumnGrid : OrderGrid
    {
        public MultiColumnGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}