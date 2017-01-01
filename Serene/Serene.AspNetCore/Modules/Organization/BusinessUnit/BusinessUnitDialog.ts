
namespace Serene.Organization {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class BusinessUnitDialog extends Serenity.EntityDialog<BusinessUnitRow, any> {
        protected getFormKey() { return BusinessUnitForm.formKey; }
        protected getIdProperty() { return BusinessUnitRow.idProperty; }
        protected getLocalTextPrefix() { return BusinessUnitRow.localTextPrefix; }
        protected getNameProperty() { return BusinessUnitRow.nameProperty; }
        protected getService() { return BusinessUnitService.baseUrl; }

        protected form = new BusinessUnitForm(this.idPrefix);

    }
}