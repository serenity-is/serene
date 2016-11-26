
namespace Serene.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAttendeeDialog extends Serenity.EntityDialog<MeetingAttendeeRow, any> {
        protected getFormKey() { return MeetingAttendeeForm.formKey; }
        protected getIdProperty() { return MeetingAttendeeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAttendeeRow.localTextPrefix; }
        protected getService() { return MeetingAttendeeService.baseUrl; }

        protected form = new MeetingAttendeeForm(this.idPrefix);

    }
}