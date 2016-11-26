namespace Serene.Meeting {
    export class MeetingForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.Meeting';

    }

    export interface MeetingForm {
        MeetingName: Serenity.StringEditor;
        MeetingNumber: Serenity.StringEditor;
        MeetingGuid: Serenity.StringEditor;
        MeetingTypeId: Serenity.IntegerEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        LocationId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
        OrganizerContactId: Serenity.IntegerEditor;
        ReporterContactId: Serenity.IntegerEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
    }

    [['MeetingName', () => Serenity.StringEditor], ['MeetingNumber', () => Serenity.StringEditor], ['MeetingGuid', () => Serenity.StringEditor], ['MeetingTypeId', () => Serenity.IntegerEditor], ['StartDate', () => Serenity.DateEditor], ['EndDate', () => Serenity.DateEditor], ['LocationId', () => Serenity.IntegerEditor], ['UnitId', () => Serenity.IntegerEditor], ['OrganizerContactId', () => Serenity.IntegerEditor], ['ReporterContactId', () => Serenity.IntegerEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(MeetingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

