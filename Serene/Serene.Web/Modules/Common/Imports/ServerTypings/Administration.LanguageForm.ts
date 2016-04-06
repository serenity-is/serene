namespace Serene.Administration {
    export class LanguageForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Language';

    }

    export interface LanguageForm {
        LanguageId(): Serenity.StringEditor;
        LanguageName(): Serenity.StringEditor;
    }

    [['LanguageId', Serenity.StringEditor], ['LanguageName', Serenity.StringEditor]].forEach(x => LanguageForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

