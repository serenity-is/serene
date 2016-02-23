using System.Collections.Generic;
using jQueryApi;
using Serene.Northwind;
using System.Linq;
using Serenity;
using jQueryApi.UI.Widgets;
using System;
using System.Html;

namespace Serene.BasicSamples
{
    /// <summary>
    /// Adding Responsive attribute makes this dialog use full screen in mobile devices.
    /// </summary>
    [IdProperty(OrderRow.IdProperty), NameProperty(OrderRow.Fields.OrderID)]
    [FormKey("Northwind.Order"), LocalTextPrefix("Northwind.Order"), Service("Northwind/Order")]
    [Responsive, Maximizable]
    public class ResponsiveDialog : EntityDialog<OrderRow>
    {
    }

    [DialogType(typeof(ResponsiveDialog))]
    public class ResponsiveGrid : OrderGrid
    {
        public ResponsiveGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}