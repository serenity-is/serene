namespace Serene.BasicSamples {
    export interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }

    export class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.HarcodedValues';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HardcodedValuesForm.init)  {
                HardcodedValuesForm.init = true;

                var s = Serenity;
                var w0 = HardcodedValuesEditor;

                Q.initFormType(HardcodedValuesForm, [
                    'SomeValue', w0
                ]);
            }
        }
    }
}
