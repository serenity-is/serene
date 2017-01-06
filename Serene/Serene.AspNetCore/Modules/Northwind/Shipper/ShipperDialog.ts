namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey() { return ShipperForm.formKey; }
        protected getIdProperty() { return ShipperRow.idProperty; }
        protected getLocalTextPrefix() { return ShipperRow.localTextPrefix; }
        protected getNameProperty() { return ShipperRow.nameProperty; }
        protected getService() { return ShipperService.baseUrl; }

        protected form = new ShipperForm(this.idPrefix);

        protected getLanguages() {
            return LanguageList.getValue();
        }
    }
}