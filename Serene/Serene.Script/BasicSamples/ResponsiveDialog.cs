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
    public class ResponsiveDialog : OrderDialog
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

        protected override List<PropertyItem> GetPropertyItems()
        {
            var items = base.GetPropertyItems();
            //items.First(x => x.Name == CustomerRow.Fields.NoteList).Category = "Notes";
            return items;
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