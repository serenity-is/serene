
namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingDecisionGrid extends Serenity.EntityGrid<MeetingDecisionRow, any> {
        protected getColumnsKey() { return 'Meeting.MeetingDecision'; }
        protected getDialogType() { return MeetingDecisionDialog; }
        protected getIdProperty() { return MeetingDecisionRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingDecisionRow.localTextPrefix; }
        protected getService() { return MeetingDecisionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}