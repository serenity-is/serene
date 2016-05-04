/// <reference path="../Order/OrderGrid.ts" />

namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType() { return CustomerOrderDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let fld = OrderRow.Fields;
            return super.getColumns().filter(x => x.field !== fld.CustomerCompanyName);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ CustomerID: this.get_customerID() });
        }

        protected getInitialTitle() {
            return null;
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.customerFilter.element.closest('.quick-filter-item').remove();
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.customerID;
        }

        private customerID: string;

        get_customerID() {
            return this.customerID;
        }

        set_customerID(value) {
            if (this.customerID !== value) {
                this.customerID = value;
                this.setEquality('CustomerID', value);
                this.refresh();
            }
        }
    }
}