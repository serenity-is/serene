
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAgendaDialog extends Serenity.EntityDialog<MeetingAgendaRow, any> {
        protected getFormKey() { return MeetingAgendaForm.formKey; }
        protected getIdProperty() { return MeetingAgendaRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAgendaRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAgendaRow.nameProperty; }
        protected getService() { return MeetingAgendaService.baseUrl; }

        protected form = new MeetingAgendaForm(this.idPrefix);

    }
}