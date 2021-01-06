namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey() { return TerritoryForm.formKey; }
        protected getIdProperty() { return TerritoryRow.idProperty; }
        protected getLocalTextPrefix() { return TerritoryRow.localTextPrefix; }
        protected getNameProperty() { return TerritoryRow.nameProperty; }
        protected getService() { return TerritoryService.baseUrl; }

        protected form = new TerritoryForm(this.idPrefix);

        protected getLanguages() {
            return LanguageList.getValue();
        }
    }
}