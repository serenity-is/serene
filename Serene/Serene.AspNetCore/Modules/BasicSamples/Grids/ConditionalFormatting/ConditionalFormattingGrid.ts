namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {

        protected getColumnsKey() { return "Northwind.Product"; }
        protected getDialogType() { return <any>Northwind.ProductDialog; }
        protected getIdProperty() { return Northwind.ProductRow.idProperty; }
        protected getLocalTextPrefix() { return Northwind.ProductRow.localTextPrefix; }
        protected getService() { return Northwind.ProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            var fld = Northwind.ProductRow.Fields;

            // adding a specific css class to UnitPrice column, 
            // to be able to format cell with a different background
            Q.first(columns, x => x.field == fld.UnitPrice).cssClass += " col-unit-price";

            return columns;
        }


        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string {
            let klass: string = "";

            if (item.Discontinued == true)
                klass += " discontinued";
            else if (item.UnitsInStock <= 0)
                klass += " out-of-stock";
            else if (item.UnitsInStock < 20)
                klass += " critical-stock";
            else if (item.UnitsInStock > 50)
                klass += " needs-reorder";

            if (item.UnitPrice >= 50)
                klass += " high-price";
            else if (item.UnitPrice >= 20)
                klass += " medium-price";
            else
                klass += " low-price";

            return Q.trimToNull(klass);
        }
    }
}