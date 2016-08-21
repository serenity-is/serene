namespace SereneSample.BasicSamples {
    @Serenity.Decorators.registerClass()
    export class StoredProcedureGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey() { return "Northwind.CustomerGrossSales"; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return Northwind.CustomerGrossSalesRow.nameProperty; }
        protected getLocalTextPrefix() { return Northwind.CustomerGrossSalesRow.localTextPrefix; }
        protected getService() { return Northwind.CustomerGrossSalesService.baseUrl; }

        // this is our autoincrementing counter
        private nextId = 1;

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
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
                service: Northwind.CustomerGrossSalesService.baseUrl + '/ListExcel',
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
    }
}