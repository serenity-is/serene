namespace Serene.Meeting {
    export class MeetingAgendaTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Meeting.MeetingAgendaType';

    }

    export interface MeetingAgendaTypeForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAgendaTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

