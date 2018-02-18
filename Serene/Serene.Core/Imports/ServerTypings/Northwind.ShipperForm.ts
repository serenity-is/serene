namespace Serene.Northwind {
    export interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }

    export class ShipperForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Shipper';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ShipperForm.init)  {
                ShipperForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = PhoneEditor;

                Q.initFormType(ShipperForm, [
                    'CompanyName', w0,
                    'Phone', w1
                ]);
            }
        }
    }
}
