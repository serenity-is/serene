namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey() { return CategoryForm.formKey; }
        protected getIdProperty() { return CategoryRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getNameProperty() { return CategoryRow.nameProperty; }
        protected getService() { return CategoryService.baseUrl; }

        protected form = new CategoryForm(this.idPrefix);

        protected getLanguages() {
            return LanguageList.getValue();
        }
    }
}