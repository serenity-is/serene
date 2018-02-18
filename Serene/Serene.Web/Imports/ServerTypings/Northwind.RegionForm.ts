namespace Serene.Northwind {
    export interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }

    export class RegionForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Region';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegionForm.init)  {
                RegionForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(RegionForm, [
                    'RegionID', w0,
                    'RegionDescription', w1
                ]);
            }
        }
    }
}

