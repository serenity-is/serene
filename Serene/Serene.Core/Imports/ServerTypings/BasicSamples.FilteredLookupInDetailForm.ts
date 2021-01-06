namespace Serene.BasicSamples {
    export interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }

    export class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.FilteredLookupInDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FilteredLookupInDetailForm.init)  {
                FilteredLookupInDetailForm.init = true;

                var s = Serenity;
                var w0 = Northwind.CustomerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = FilteredLookupDetailEditor;

                Q.initFormType(FilteredLookupInDetailForm, [
                    'CustomerID', w0,
                    'OrderDate', w1,
                    'CategoryID', w2,
                    'DetailList', w3
                ]);
            }
        }
    }
}
