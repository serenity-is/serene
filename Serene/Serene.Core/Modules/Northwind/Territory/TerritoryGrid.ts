namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey() { return "Northwind.Territory"; }
        protected getDialogType() { return <any>TerritoryDialog; }
        protected getIdProperty() { return TerritoryRow.idProperty; }
        protected getLocalTextPrefix() { return TerritoryRow.localTextPrefix; }
        protected getService() { return TerritoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}