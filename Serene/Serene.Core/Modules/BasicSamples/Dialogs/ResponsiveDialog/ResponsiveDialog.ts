namespace Serene.BasicSamples {

    /**
     * Adding Responsive attribute makes this dialog use full screen in mobile devices.
     */
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey() { return Northwind.OrderForm.formKey; }
        protected getIdProperty() { return Northwind.OrderRow.idProperty; }
        protected getLocalTextPrefix() { return Northwind.OrderRow.localTextPrefix; }
        protected getNameProperty() { return Northwind.OrderRow.nameProperty; }
        protected getService() { return Northwind.OrderService.baseUrl; }

        constructor() {
            super();
        }
    }
}