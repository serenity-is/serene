namespace Serene.BasicSamples {
    export interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }

    export class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.StaticTextBlock';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StaticTextBlockForm.init)  {
                StaticTextBlockForm.init = true;

                var s = Serenity;
                var w0 = StaticTextBlock;
                var w1 = s.StringEditor;

                Q.initFormType(StaticTextBlockForm, [
                    'StaticText', w0,
                    'SomeInput', w1,
                    'HtmlList', w0,
                    'FromLocalText', w0,
                    'DisplayFieldValue', w0
                ]);
            }
        }
    }
}

