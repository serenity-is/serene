namespace Serene.Meeting {
    export class MeetingAttendeeForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingAttendee';

    }

    export interface MeetingAttendeeForm {
        MeetingId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
        AttendeeType: Serenity.IntegerEditor;
        AttendanceStatus: Serenity.IntegerEditor;
    }

    [['MeetingId', () => Serenity.IntegerEditor], ['ContactId', () => Serenity.IntegerEditor], ['AttendeeType', () => Serenity.IntegerEditor], ['AttendanceStatus', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MeetingAttendeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

