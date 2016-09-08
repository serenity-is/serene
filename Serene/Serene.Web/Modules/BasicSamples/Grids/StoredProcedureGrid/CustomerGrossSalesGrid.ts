namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class CustomerGrossSalesGrid extends Serenity.EntityGrid<CustomerGrossSalesRow, any> {

        protected getColumnsKey() { return "BasicSamples.CustomerGrossSales"; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return CustomerGrossSalesRow.nameProperty; }
        protected getLocalTextPrefix() { return CustomerGrossSalesRow.localTextPrefix; }
        protected getService() { return CustomerGrossSalesService.baseUrl; }

        private nextId = 1;

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in CustomerGrossSalesRow but 
            // this is javascript and we can set any property of an object
            for (var x of response.Entities) {
                (x as any).__id = this.nextId++;
            }
            return response;
        }

        protected getButtons() {
            var buttons = [];

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: CustomerGrossSalesService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('GrossAmount')
                ]
            });

            this.view.setGrouping(
                [{
                    getter: 'ContactName'
                }]);

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();

            let endDate: Serenity.DateEditor = null;

            filters.push({
                field: 'OrderDate',
                type: Serenity.DateEditor,
                title: 'Order Date',
                element: el => {
                    endDate = Serenity.Widget.create({
                        type: Serenity.DateEditor,
                        element: el2 => el2.insertAfter(el)
                    });

                    endDate.element.change(x => el.triggerHandler("change"));
                    $("<span/>").addClass("range-separator").text("-").insertAfter(el);
                },
                handler: args => {
                    var start = (args.widget as Serenity.DateEditor).value;

                    args.active =
                        !Q.isEmptyOrNull(start) ||
                        !Q.isEmptyOrNull(endDate.value);

                    (args.request as CustomerGrossSalesListRequest).StartDate = start;
                    (args.request as CustomerGrossSalesListRequest).EndDate = endDate.value;
                }
            });

            return filters;
        }
    }
}