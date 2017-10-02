namespace Serene.Northwind {
    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Customer';

    }

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

    [['CustomerID', () => Serenity.StringEditor], ['CompanyName', () => Serenity.StringEditor], ['ContactName', () => Serenity.StringEditor], ['ContactTitle', () => Serenity.StringEditor], ['Representatives', () => Serenity.LookupEditor], ['Address', () => Serenity.StringEditor], ['Country', () => Serenity.LookupEditor], ['City', () => Serenity.LookupEditor], ['Region', () => Serenity.StringEditor], ['PostalCode', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Fax', () => Serenity.StringEditor], ['NoteList', () => NotesEditor], ['LastContactDate', () => Serenity.DateEditor], ['LastContactedBy', () => Serenity.LookupEditor], ['Email', () => Serenity.EmailEditor], ['SendBulletin', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(CustomerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

