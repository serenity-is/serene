
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey() { return MeetingForm.formKey; }
        protected getIdProperty() { return MeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingRow.localTextPrefix; }
        protected getNameProperty() { return MeetingRow.nameProperty; }
        protected getService() { return MeetingService.baseUrl; }

        protected form = new MeetingForm(this.idPrefix);

    }
}