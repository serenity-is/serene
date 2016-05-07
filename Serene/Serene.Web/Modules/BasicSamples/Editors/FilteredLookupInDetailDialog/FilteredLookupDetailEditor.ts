namespace Serene.BasicSamples {

    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    @Serenity.Decorators.registerEditor()
    export class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {

        protected getDialogType() { return FilteredLookupOrderDetailDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        public categoryID: number;

        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            (dialog as FilteredLookupOrderDetailDialog).categoryID = this.categoryID;
        }
    }
}