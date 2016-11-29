namespace Serene.Meeting {
    export class MeetingDecisionForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingDecision';

    }

    export interface MeetingDecisionForm {
        MeetingId: Serenity.IntegerEditor;
        AgendaId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        DecisionNumber: Serenity.IntegerEditor;
        ResponsibleContactId: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        ResolutionStatus: Serenity.IntegerEditor;
        Images: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
    }

    [['MeetingId', () => Serenity.IntegerEditor], ['AgendaId', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['DecisionNumber', () => Serenity.IntegerEditor], ['ResponsibleContactId', () => Serenity.IntegerEditor], ['DueDate', () => Serenity.DateEditor], ['ResolutionStatus', () => Serenity.IntegerEditor], ['Images', () => Serenity.StringEditor], ['Attachments', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingDecisionForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

