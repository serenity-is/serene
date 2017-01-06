
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAgendaRelevantDialog extends Serenity.EntityDialog<MeetingAgendaRelevantRow, any> {
        protected getFormKey() { return MeetingAgendaRelevantForm.formKey; }
        protected getIdProperty() { return MeetingAgendaRelevantRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAgendaRelevantRow.localTextPrefix; }
        protected getService() { return MeetingAgendaRelevantService.baseUrl; }

        protected form = new MeetingAgendaRelevantForm(this.idPrefix);

    }
}