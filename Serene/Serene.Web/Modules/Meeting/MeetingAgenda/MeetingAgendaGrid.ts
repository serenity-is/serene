
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAgendaGrid extends Serenity.EntityGrid<MeetingAgendaRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingAgenda'; }
        protected getDialogType() { return MeetingAgendaDialog; }
        protected getIdProperty() { return MeetingAgendaRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAgendaRow.localTextPrefix; }
        protected getService() { return MeetingAgendaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}