namespace Serene.Meeting {
    export class MeetingForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meeting';

    }

    export interface MeetingForm {
        MeetingName: Serenity.StringEditor;
        MeetingTypeId: Serenity.LookupEditor;
        MeetingNumber: Serenity.StringEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        LocationId: Serenity.LookupEditor;
        UnitId: Organization.BusinessUnitEditor;
        OrganizerContactId: Serenity.LookupEditor;
        ReporterContactId: Serenity.LookupEditor;
        AttendeeList: MeetingAttendeeEditor;
    }

    [['MeetingName', () => Serenity.StringEditor], ['MeetingTypeId', () => Serenity.LookupEditor], ['MeetingNumber', () => Serenity.StringEditor], ['StartDate', () => Serenity.DateTimeEditor], ['EndDate', () => Serenity.DateTimeEditor], ['LocationId', () => Serenity.LookupEditor], ['UnitId', () => Organization.BusinessUnitEditor], ['OrganizerContactId', () => Serenity.LookupEditor], ['ReporterContactId', () => Serenity.LookupEditor], ['AttendeeList', () => MeetingAttendeeEditor]].forEach(x => Object.defineProperty(MeetingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

