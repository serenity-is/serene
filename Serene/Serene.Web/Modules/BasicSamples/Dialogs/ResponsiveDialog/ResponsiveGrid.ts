/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    /**
     * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
     */
    @Serenity.Decorators.registerClass()
    export class ResponsiveGrid extends Northwind.OrderGrid {

        protected getDialogType() { return ResponsiveDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}