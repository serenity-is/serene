namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey() { return SupplierForm.formKey; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getNameProperty() { return SupplierRow.nameProperty; }
        protected getService() { return SupplierService.baseUrl; }

        protected form = new SupplierForm(this.idPrefix);

        protected getLanguages() {
            return LanguageList.getValue();
        }
    }
}