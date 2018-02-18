namespace Serene.Administration {
    export interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }

    export class LanguageForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Language';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LanguageForm.init)  {
                LanguageForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(LanguageForm, [
                    'LanguageId', w0,
                    'LanguageName', w0
                ]);
            }
        }
    }
}

