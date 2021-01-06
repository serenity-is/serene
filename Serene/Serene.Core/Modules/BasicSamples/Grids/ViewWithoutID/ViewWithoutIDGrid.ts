namespace Serene.BasicSamples {
    @Serenity.Decorators.registerClass()
    export class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey() { return "Northwind.SalesByCategory"; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return Northwind.SalesByCategoryRow.nameProperty; }
        protected getLocalTextPrefix() { return Northwind.SalesByCategoryRow.localTextPrefix; }
        protected getService() { return Northwind.SalesByCategoryService.baseUrl; }

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
            return [];
        }
    }
}