
namespace Serene.Meeting {

    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey() { return MeetingForm.formKey; }
        protected getIdProperty() { return MeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingRow.localTextPrefix; }
        protected getNameProperty() { return MeetingRow.nameProperty; }
        protected getService() { return MeetingService.baseUrl; }

        protected form = new MeetingForm(this.idPrefix);

        private agendaGrid = new MeetingAgendaGrid(this.byId('AgendaGrid'));
        private decisionGrid = new MeetingDecisionGrid(this.byId('DecisionGrid'));

        constructor() {
            super();

            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-maximize').click();

            this.form.EndDate.addValidationRule(this.uniqueName, e => {
                if (this.form.EndDate.valueAsDate != null &&
                    this.form.StartDate.valueAsDate != null &&
                    this.form.StartDate.valueAsDate > this.form.EndDate.valueAsDate) {
                    return "End Date can't be earlier than Start Date";
                }

                return null;
            });
        }

        protected arrange() {
            super.arrange();
            var attendeeGrid = this.form.AttendeeList.element.find('.grid-container');
            attendeeGrid.css('height', Math.max(150, this.element.height() - attendeeGrid.position().top - 10) + 'px')
                .triggerHandler('layout');
        }

        loadEntity(entity: MeetingRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Agenda', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Decision', this.isNewOrDeleted());

            //this.agendaGrid.customerID = entity.CustomerID;
        }

    }
}