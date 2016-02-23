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
    [IdProperty(OrderRow.IdProperty), NameProperty(OrderRow.Fields.OrderID), Maximizable]
    [FormKey("Northwind.Order"), LocalTextPrefix("Northwind.Order"), Service("Northwind/Order")]
    public class ResponsiveDialog : EntityDialog<OrderRow>
    {
        public ResponsiveDialog()
        {
            jQuery.Window.Resize(e => HandleResponsivity());
            this.Element.Closest(".ui-dialog").AddClass("flex-layout");
        }

        protected override void OnDialogOpen()
        {
            base.OnDialogOpen();
            HandleResponsivity();
        }
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