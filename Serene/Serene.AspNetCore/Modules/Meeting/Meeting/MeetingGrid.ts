
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingGrid extends Serenity.EntityGrid<MeetingRow, any> {
        protected getColumnsKey() { return 'Meeting.Meeting'; }
        protected getDialogType() { return MeetingDialog; }
        protected getIdProperty() { return MeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingRow.localTextPrefix; }
        protected getService() { return MeetingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}