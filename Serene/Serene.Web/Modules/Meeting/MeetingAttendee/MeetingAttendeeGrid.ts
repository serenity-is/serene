
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAttendeeGrid extends Serenity.EntityGrid<MeetingAttendeeRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingAttendee'; }
        protected getDialogType() { return MeetingAttendeeDialog; }
        protected getIdProperty() { return MeetingAttendeeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAttendeeRow.localTextPrefix; }
        protected getService() { return MeetingAttendeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}