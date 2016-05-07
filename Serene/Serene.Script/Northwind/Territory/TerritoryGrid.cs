
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Northwind.Territory"), IdProperty("ID"), NameProperty("TerritoryID")]
    [DialogType(typeof(TerritoryDialog)), LocalTextPrefix("Northwind.Territory"), Service("Northwind/Territory")]
    public class TerritoryGrid : EntityGrid<TerritoryRow>
    {
        private LookupEditor region;

        public TerritoryGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            region = Widget.Create<LookupEditor>(
                    element: e => e.AppendTo(toolbar.Element)
                        .Attribute("placeholder", "--- " + Q.Text("Db.Northwind.Territory.RegionDescription") + " ---"),
                    options: new LookupEditorOptions { LookupKey = "Northwind.Region" });
                
            region.Change(e => Refresh());
        }

        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            SetEquality("RegionID", region.Value.ToInt32());
            return true;
        }
    }
}