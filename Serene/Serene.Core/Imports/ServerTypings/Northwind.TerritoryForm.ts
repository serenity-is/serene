namespace Serene.Northwind {
    export interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }

    export class TerritoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Territory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TerritoryForm.init)  {
                TerritoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TerritoryForm, [
                    'TerritoryID', w0,
                    'TerritoryDescription', w0,
                    'RegionID', w1
                ]);
            }
        }
    }
}
