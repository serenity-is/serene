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
            this.editItem({ CustomerID: this.customerID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected createQuickFilters() {
            super.createQuickFilters();
            this.customerFilter.element.closest('.quick-filter-item').remove();
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.customerID;
        }

        private _customerID: string;

        get customerID() {
            return this._customerID;
        }

        set customerID(value: string) {
            if (this.customerID !== value) {
                this.customerID = value;
                this.setEquality('CustomerID', value);
                this.refresh();
            }
        }
    }
}