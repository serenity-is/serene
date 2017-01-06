
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingTypeDialog extends Serenity.EntityDialog<MeetingTypeRow, any> {
        protected getFormKey() { return MeetingTypeForm.formKey; }
        protected getIdProperty() { return MeetingTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingTypeRow.localTextPrefix; }
        protected getNameProperty() { return MeetingTypeRow.nameProperty; }
        protected getService() { return MeetingTypeService.baseUrl; }

        protected form = new MeetingTypeForm(this.idPrefix);

    }
}