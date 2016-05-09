namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey() { return RegionForm.formKey; }
        protected getIdProperty() { return RegionRow.idProperty; }
        protected getLocalTextPrefix() { return RegionRow.localTextPrefix; }
        protected getNameProperty() { return RegionRow.nameProperty; }
        protected getService() { return RegionService.baseUrl; }

        protected form = new RegionForm(this.idPrefix);

        protected getLanguages() {
            return LanguageList.getValue();
        }
    }
}