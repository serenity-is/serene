
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingLocationGrid extends Serenity.EntityGrid<MeetingLocationRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingLocation'; }
        protected getDialogType() { return MeetingLocationDialog; }
        protected getIdProperty() { return MeetingLocationRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingLocationRow.localTextPrefix; }
        protected getService() { return MeetingLocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}