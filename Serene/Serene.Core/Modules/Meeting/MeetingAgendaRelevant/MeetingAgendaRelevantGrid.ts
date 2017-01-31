
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAgendaRelevantGrid extends Serenity.EntityGrid<MeetingAgendaRelevantRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingAgendaRelevant'; }
        protected getDialogType() { return MeetingAgendaRelevantDialog; }
        protected getIdProperty() { return MeetingAgendaRelevantRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAgendaRelevantRow.localTextPrefix; }
        protected getService() { return MeetingAgendaRelevantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}