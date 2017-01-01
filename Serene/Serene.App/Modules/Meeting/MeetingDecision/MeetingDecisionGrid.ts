
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

        protected addButtonClick() {
            this.editItem({ MeetingId: this.meetingId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.meetingId;
        }

        private _meetingId: string;

        get meetingId() {
            return this._meetingId;
        }

        set meetingId(value: string) {
            if (this._meetingId !== value) {
                this._meetingId = value;
                this.setEquality('MeetingId', value);
                this.refresh();
            }
        }
    }
}