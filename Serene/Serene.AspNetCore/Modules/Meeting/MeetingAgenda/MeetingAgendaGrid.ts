
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