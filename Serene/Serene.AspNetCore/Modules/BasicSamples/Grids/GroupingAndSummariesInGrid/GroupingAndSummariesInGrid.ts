/// <reference path="../../../Northwind/Product/ProductGrid.ts" />

namespace Serene.BasicSamples {

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
                    new Slick.Aggregators.Avg('UnitPrice'),
                    new Slick.Aggregators.Sum('UnitsInStock'),
                    new Slick.Aggregators.Max('UnitsOnOrder'),
                    new Slick.Aggregators.Avg('ReorderLevel')
                ]
            });

            return grid;
        }

        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === 'UnitsOnOrder')
                .groupTotalsFormatter = (totals, col) =>
                    (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');

            Q.first(columns, x => x.field === 'ReorderLevel')
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
                        getter: 'CategoryName'
                    }])
            },
            {
                title: 'Group By Category and Supplier',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        formatter: x => 'Category: ' + x.value + ' (' + x.count + ' items)',
                        getter: 'CategoryName'
                    }, {
                        formatter: x => 'Supplier: ' + x.value + ' (' + x.count + ' items)',
                        getter: 'SupplierCompanyName'
                    }])
            }, {
                title: 'No Grouping',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            }];
        }
    }
}