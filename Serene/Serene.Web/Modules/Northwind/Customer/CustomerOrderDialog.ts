namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerOrderDialog extends OrderDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
        }
    }
}