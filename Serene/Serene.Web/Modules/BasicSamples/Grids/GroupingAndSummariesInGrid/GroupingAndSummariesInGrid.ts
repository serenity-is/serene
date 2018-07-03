/// <reference path="../../../Northwind/Product/ProductGrid.ts" />

namespace SerExtra.BasicSamples {
    import fld = Northwind.ProductRow.Fields

    @Serenity.Decorators.registerClass()
    export class GroupingAndSummariesInGrid extends Northwind.ProductGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Avg(fld.UnitPrice),
                    new Slick.Aggregators.Sum(fld.UnitsInStock),
                    new Slick.Aggregators.Max(fld.UnitsOnOrder),
                    new Slick.Aggregators.Avg(fld.ReorderLevel)
                ]
            });

            return grid;
        }

        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === fld.UnitsOnOrder)
                .groupTotalsFormatter = (totals, col) =>
                    (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');

            Q.first(columns, x => x.field === fld.ReorderLevel)
                .groupTotalsFormatter = (totals, col) =>
                    (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');

            return columns;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }

        protected getButtons() {
            return [{
                title: 'Group By Category',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        getter: fld.CategoryName
                    }])
            },
            {
                title: 'Group By Category and Supplier',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        formatter: x => 'Category: ' + x.value + ' (' + x.count + ' items)',
                        getter: fld.CategoryName
                    }, {
                        formatter: x => 'Supplier: ' + x.value + ' (' + x.count + ' items)',
                        getter: fld.SupplierCompanyName
                    }])
            }, {
                title: 'No Grouping',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            }];
        }
    }
}
