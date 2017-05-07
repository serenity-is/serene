namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {

        protected getColumnsKey() { return "BasicSamples.CustomerGrossSales"; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return Northwind.CustomerGrossSalesRow.nameProperty; }
        protected getLocalTextPrefix() { return Northwind.CustomerGrossSalesRow.localTextPrefix; }
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

            // we create a date-range quick filter, which is a composite
            // filter with two date time editors
            var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');

            // need to override its handler, as default date-range filter will set Criteria parameter of list request.
            // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
            orderDate.handler = args => {
                
                // args.widget here is the start date editor. value of a date editor is a ISO date string
                var start = args.widget.value;

                // to find end date editor, need to search it by its css class among siblings
                var end = args.widget.element.nextAll('.s-DateEditor')
                    .getWidget(Serenity.DateEditor).value;

                (args.request as CustomerGrossSalesListRequest).StartDate = start;
                (args.request as CustomerGrossSalesListRequest).EndDate = end;

                // active option controls when a filter editor looks active, e.g. its label is blueish
                args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
            };

            filters.push(orderDate);

            return filters;
        }
    }
}