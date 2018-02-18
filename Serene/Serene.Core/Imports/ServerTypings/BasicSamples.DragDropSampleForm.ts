namespace Serene.BasicSamples {
    export interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }

    export class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.DragDropSample';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DragDropSampleForm.init)  {
                DragDropSampleForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DragDropSampleForm, [
                    'Title', w0
                ]);
            }
        }
    }
}
