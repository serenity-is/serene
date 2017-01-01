
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingDecisionDialog extends Serenity.EntityDialog<MeetingDecisionRow, any> {
        protected getFormKey() { return MeetingDecisionForm.formKey; }
        protected getIdProperty() { return MeetingDecisionRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingDecisionRow.localTextPrefix; }
        protected getNameProperty() { return MeetingDecisionRow.nameProperty; }
        protected getService() { return MeetingDecisionService.baseUrl; }

        protected form = new MeetingDecisionForm(this.idPrefix);

    }
}