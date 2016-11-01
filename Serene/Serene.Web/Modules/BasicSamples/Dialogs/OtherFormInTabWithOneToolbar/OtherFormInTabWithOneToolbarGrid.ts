/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabWithOneToolbar
     */
    @Serenity.Decorators.registerClass()
    export class OtherFormInTabWithOneToolbarGrid extends Northwind.OrderGrid {

        protected getDialogType() { return OtherFormInTabWithOneToolbarDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}