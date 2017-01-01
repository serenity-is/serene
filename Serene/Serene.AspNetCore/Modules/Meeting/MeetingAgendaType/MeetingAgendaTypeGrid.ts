
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAgendaTypeGrid extends Serenity.EntityGrid<MeetingAgendaTypeRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingAgendaType'; }
        protected getDialogType() { return MeetingAgendaTypeDialog; }
        protected getIdProperty() { return MeetingAgendaTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAgendaTypeRow.localTextPrefix; }
        protected getService() { return MeetingAgendaTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}