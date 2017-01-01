/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />

namespace Serene.BasicSamples {

    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    @Serenity.Decorators.registerClass()
    export class ReadOnlyGrid extends Northwind.SupplierGrid {

        protected getDialogType() { return ReadOnlyDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            return buttons;
        }
    }
}