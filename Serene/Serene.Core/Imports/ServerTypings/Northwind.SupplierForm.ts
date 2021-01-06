namespace Serene.Northwind {
    export interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }

    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Supplier';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierForm.init)  {
                SupplierForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SupplierForm, [
                    'CompanyName', w0,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'Address', w0,
                    'Region', w0,
                    'PostalCode', w0,
                    'Country', w0,
                    'City', w0,
                    'Phone', w0,
                    'Fax', w0,
                    'HomePage', w0
                ]);
            }
        }
    }
}
