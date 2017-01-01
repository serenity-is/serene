/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    @Serenity.Decorators.registerClass()
    export class FilteredLookupInDetailGrid extends Northwind.OrderGrid {

        protected getDialogType() { return FilteredLookupInDetailDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}