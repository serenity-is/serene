/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    /**
     * Subclass of OrderGrid to override dialog type to MultiColumnDialog
     */
    @Serenity.Decorators.registerClass()
    export class MultiColumnGrid extends Northwind.OrderGrid {

        protected getDialogType() { return MultiColumnDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}