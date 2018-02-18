namespace Serene.Northwind {
    export interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = NotesEditor;
                var w3 = s.DateEditor;
                var w4 = s.EmailEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerID', w0,
                    'CompanyName', w0,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'Representatives', w1,
                    'Address', w0,
                    'Country', w1,
                    'City', w1,
                    'Region', w0,
                    'PostalCode', w0,
                    'Phone', w0,
                    'Fax', w0,
                    'NoteList', w2,
                    'LastContactDate', w3,
                    'LastContactedBy', w1,
                    'Email', w4,
                    'SendBulletin', w5
                ]);
            }
        }
    }
}

