namespace Serene.Administration {
    export class LanguageForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Language';

    }

    export interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }

    [['LanguageId', Serenity.StringEditor], ['LanguageName', Serenity.StringEditor]].forEach(x => Object.defineProperty(LanguageForm.prototype, <string>x[0], { get: function () { return this.w(x[0], x[1]); }, enumerable: true, configurable: true }));
}

