
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAgendaTypeDialog extends Serenity.EntityDialog<MeetingAgendaTypeRow, any> {
        protected getFormKey() { return MeetingAgendaTypeForm.formKey; }
        protected getIdProperty() { return MeetingAgendaTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAgendaTypeRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAgendaTypeRow.nameProperty; }
        protected getService() { return MeetingAgendaTypeService.baseUrl; }

        protected form = new MeetingAgendaTypeForm(this.idPrefix);

    }
}