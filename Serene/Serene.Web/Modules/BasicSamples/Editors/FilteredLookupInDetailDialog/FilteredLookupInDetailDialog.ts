namespace Serene.BasicSamples {

    /**
     * Basic order dialog with a category selection
     */
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {

        protected getFormKey() { return FilteredLookupInDetailForm.formKey; }
        protected getIdProperty() { return Northwind.OrderRow.idProperty; }
        protected getLocalTextPrefix() { return Northwind.OrderRow.localTextPrefix; }
        protected getNameProperty() { return Northwind.OrderRow.nameProperty; }
        protected getService() { return Northwind.OrderService.baseUrl; }

        private form: FilteredLookupInDetailForm;

        constructor() {
            super();

            this.form = new FilteredLookupInDetailForm(this.idPrefix);
            this.form.CategoryID.change(e => {
                this.form.DetailList.categoryID = Q.toId(this.form.CategoryID.value);
            });
        }
    }
}