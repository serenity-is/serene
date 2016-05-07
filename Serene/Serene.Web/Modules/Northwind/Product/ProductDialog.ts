namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return ProductForm.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }

        protected form = new ProductForm(this.idPrefix);

        protected getLanguages(): string[][] {
            return LanguageList.get_value();
        }
    }
}