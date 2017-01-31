namespace Serene.Meeting {
    export class MeetingAgendaRelevantForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingAgendaRelevant';

    }

    export interface MeetingAgendaRelevantForm {
        AgendaId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }

    [['AgendaId', () => Serenity.IntegerEditor], ['ContactId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MeetingAgendaRelevantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

