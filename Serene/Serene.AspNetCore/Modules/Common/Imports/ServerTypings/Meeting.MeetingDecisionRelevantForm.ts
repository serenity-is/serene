namespace Serene.Meeting {
    export class MeetingDecisionRelevantForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingDecisionRelevant';

    }

    export interface MeetingDecisionRelevantForm {
        DecisionId: Serenity.IntegerEditor;
        ContactId: Serenity.IntegerEditor;
    }

    [['DecisionId', () => Serenity.IntegerEditor], ['ContactId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MeetingDecisionRelevantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

