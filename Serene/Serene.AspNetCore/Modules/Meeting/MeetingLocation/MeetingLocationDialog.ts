
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingLocationDialog extends Serenity.EntityDialog<MeetingLocationRow, any> {
        protected getFormKey() { return MeetingLocationForm.formKey; }
        protected getIdProperty() { return MeetingLocationRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingLocationRow.localTextPrefix; }
        protected getNameProperty() { return MeetingLocationRow.nameProperty; }
        protected getService() { return MeetingLocationService.baseUrl; }

        protected form = new MeetingLocationForm(this.idPrefix);

    }
}