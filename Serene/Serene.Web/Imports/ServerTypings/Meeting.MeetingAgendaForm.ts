namespace Serene.Meeting {
    export class MeetingAgendaForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingAgenda';

    }

    export interface MeetingAgendaForm {
        MeetingId: Serenity.IntegerEditor;
        AgendaNumber: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        AgendaTypeId: Serenity.IntegerEditor;
        RequestedByContactId: Serenity.IntegerEditor;
        Images: Serenity.MultipleImageUploadEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    [['MeetingId', () => Serenity.IntegerEditor], ['AgendaNumber', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['AgendaTypeId', () => Serenity.IntegerEditor], ['RequestedByContactId', () => Serenity.IntegerEditor], ['Images', () => Serenity.MultipleImageUploadEditor], ['Attachments', () => Serenity.MultipleImageUploadEditor]].forEach(x => Object.defineProperty(MeetingAgendaForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

