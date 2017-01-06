namespace Serene.Northwind {
    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Supplier';

    }

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

    [['CompanyName', () => Serenity.StringEditor], ['ContactName', () => Serenity.StringEditor], ['ContactTitle', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor], ['Region', () => Serenity.StringEditor], ['PostalCode', () => Serenity.StringEditor], ['Country', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Fax', () => Serenity.StringEditor], ['HomePage', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SupplierForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

