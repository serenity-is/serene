
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [ColumnsKey("Northwind.Product"), Filterable, IdProperty("ProductID"), NameProperty("ProductName")]
    [DialogType(typeof(ProductDialog)), LocalTextPrefix("Northwind.Product"), Service("Northwind/Product")]
    public class ProductGrid : EntityGrid<ProductRow>
    {
        private LookupEditor supplier;
        private LookupEditor category;

        public ProductGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            supplier = Widget.Create<LookupEditor>(
                    element: e => e.AppendTo(toolbar.Element)
                        .Attribute("placeholder", "--- " + Q.Text("Db.Northwind.Product.SupplierCompanyName") + " ---"),
                    options: new LookupEditorOptions { LookupKey = "Northwind.Supplier" });

            supplier.Change(e => Refresh());

            category = Widget.Create<LookupEditor>(
                    element: e => e.AppendTo(toolbar.Element)
                        .Attribute("placeholder", "--- " + Q.Text("Db.Northwind.Product.CategoryName") + " ---"),
                    options: new LookupEditorOptions { LookupKey = "Northwind.Category" });

            category.Change(e => Refresh());
        }

        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            SetEquality("SupplierID", supplier.Value.ConvertToId());
            SetEquality("CategoryID", category.Value.ConvertToId());

            return true;
        }

        protected override List<ToolButton> GetButtons()
        {
            var buttons = base.GetButtons();
            buttons.Add(Common.ExcelExportHelper.CreateToolButton(this,
                ProductService.BaseUrl + "/ListExcel", this.OnViewSubmit));
            return buttons;
        }
    }
}