
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Fields = ProductRow.Fields;

    [ColumnsKey("Northwind.Product"), Filterable, IdProperty("ProductID"), NameProperty("ProductName")]
    [DialogType(typeof(ProductDialog)), LocalTextPrefix("Northwind.Product"), Service("Northwind/Product")]
    public class ProductGrid : EntityGrid<ProductRow>
    {
        private JsDictionary<int, ProductRow> pendingChanges = new JsDictionary<int, ProductRow>();

        public ProductGrid(jQueryObject container)
            : base(container)
        {
            this.slickContainer.On("change", "input.edit", InputsChange);
        }

        protected override SlickGrid CreateSlickGrid()
        {
            view.SetGrouping(new List<SlickGroupInfo<ProductRow>>
            {
                new SlickGroupInfo<ProductRow>
                {
                    Getter = "CategoryName",
                    Aggregators = new List<SlickAggregator>
                    {
                        new SlickMin("QuantityPerUnit"),
                        new SlickSum("UnitsInStock")
                    }
                }
            });

            var grid = base.CreateSlickGrid();
            grid.RegisterPlugin(new SlickGroupItemMetadataProvider());
            return grid;
        }

        protected override SlickGridOptions GetSlickOptions()
        {
            var opt = base.GetSlickOptions();
            opt.ShowFooterRow = true;
            return opt;
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            AddEqualityFilter<LookupEditor>(Fields.SupplierID, 
                options: new LookupEditorOptions { LookupKey = "Northwind.Supplier" });

            AddEqualityFilter<LookupEditor>(Fields.CategoryID,
                options: new LookupEditorOptions { LookupKey = "Northwind.Category" });
        }

        protected override List<ToolButton> GetButtons()
        {
            var buttons = base.GetButtons();

            buttons.Add(Common.ExcelExportHelper.CreateToolButton(this,
                ProductService.BaseUrl + "/ListExcel", this.OnViewSubmit));

            buttons.Add(new ToolButton
            {
                Title = "Save Changes",
                CssClass = "apply-changes-button",
                OnClick = e => SaveClick()
            });

            return buttons;
        }

        protected override ListResponse<ProductRow> OnViewProcessData(ListResponse<ProductRow> response)
        {
            pendingChanges.Clear();
            SetSaveButtonState();
            return base.OnViewProcessData(response);
        }

        private string InputFormatter(SlickFormatterContext ctx)
        {
            var klass = "edit";
            var item = (ProductRow)ctx.Item;
            var pending = pendingChanges[item.ProductID.Value];
            if (pending != null && Script.IsValue(pending.As<dynamic>()[ctx.Column.Field]))
                klass += " dirty";

            double? value = GetEffectiveValue(item, ctx.Column.Field);

            return 
                "<input type='text'" + 
                    " class='" + klass + "'" + 
                    " value='" + Q.FormatNumber(value, "0.##") + "'" + 
                "/>";
        }

        private double? GetEffectiveValue(ProductRow item, string field)
        {
            var pending = pendingChanges[item.ProductID.Value];
            if (pending != null)
                return pending.As<dynamic>()[field] ?? item.As<dynamic>()[field];

            return item.As<dynamic>()[field];
        }

        protected override List<SlickColumn> GetColumns()
        {
            var columns = base.GetColumns();

            columns.Single(x => x.Field == Fields.UnitPrice).Format = InputFormatter;
            columns.Single(x => x.Field == Fields.UnitsInStock).Format = InputFormatter;
            columns.Single(x => x.Field == Fields.UnitsOnOrder).Format = InputFormatter;
            columns.Single(x => x.Field == Fields.ReorderLevel).Format = InputFormatter;
            columns.Single(x => x.Field == Fields.UnitsInStock).GroupTotalsFormatter = (t, c) =>
            {
                return t.Sum != null && t.Sum[c.Field] != null ?
                    "Sum: " + t.Sum[c.Field] : "";
            };
            return columns;
        }

        private void InputsChange(jQueryEvent e)
        {
            var cell = slickGrid.GetCellFromEvent(e);
            var item = Items[cell.Row];
            var field = GetColumns()[cell.Cell].Field;
            var input = J(e.Target);
            var text = input.GetValue().TrimToNull() ?? "0";
            var pending = pendingChanges[item.ProductID.Value];
            var oldText = Q.FormatNumber(GetEffectiveValue(item, field), "0.##");

            double? value;
            if (field == Fields.UnitPrice)
            {
                value = Q.ParseDecimal(text);
                if (value == null || double.IsNaN(value.Value))
                {
                    Q.NotifyError(Q.Text("Validation.Decimal"));
                    input.Value(oldText);
                    input.Focus();
                    return;
                }
            }
            else
            {
                int i;
                if (!int.TryParse(text, out i) || i > Int16.MaxValue || i < 0)
                {
                    Q.NotifyError(Q.Text("Validation.Integer"));
                    input.Value(oldText);
                    input.Focus();
                    return;
                }

                value = i;
            }

            if (pending == null)
                pendingChanges[item.ProductID.Value] = pending = new ProductRow();

            pending.As<dynamic>()[field] = value;
            input.Value(Q.FormatNumber(value, "0.##")).AddClass("dirty");
            SetSaveButtonState();
        }

        private void SetSaveButtonState()
        {
            toolbar.FindButton("apply-changes-button").ToggleClass("disabled",
                pendingChanges.Count == 0);
        }

        private void SaveClick()
        {
            if (pendingChanges.Count == 0)
                return;

            // this calls save service for all modified rows, one by one
            // you could write a batch update service

            var enumerator = Q.DeepClone(pendingChanges).GetEnumerator();

            Action saveNext = null;
            saveNext = delegate ()
            {
                if (!enumerator.MoveNext())
                {
                    Refresh();
                    return;
                }

                var pair = enumerator.Current;
                var entity = Q.DeepClone(pair.Value);
                entity.ProductID = pair.Key;
                ProductService.Update(new SaveWithLocalizationRequest<ProductRow>
                {
                    EntityId = pair.Key,
                    Entity = entity
                }, response => {
                    pendingChanges.Remove(pair.Key);
                    saveNext();
                });
            };

            saveNext();
        }
    }
}