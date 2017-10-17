/// <reference path="../../../Northwind/Order/OrderDialog.ts" />

namespace Serene.BasicSamples {

    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    @Serenity.Decorators.panel()
    export class EntityDialogAsPanel extends Northwind.OrderDialog {

        constructor() {
            super();
        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
        }
    }
}