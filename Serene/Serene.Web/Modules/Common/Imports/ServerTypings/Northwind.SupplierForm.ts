namespace Serene.Northwind {
    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Supplier';

    }

    export interface SupplierForm extends Serenity.PrefixedContext {
        CompanyName(): Serenity.StringEditor;
        ContactName(): Serenity.StringEditor;
        ContactTitle(): Serenity.StringEditor;
        Address(): Serenity.StringEditor;
        City(): Serenity.StringEditor;
        Region(): Serenity.StringEditor;
        PostalCode(): Serenity.StringEditor;
        Country(): Serenity.StringEditor;
        Phone(): Serenity.StringEditor;
        Fax(): Serenity.StringEditor;
        HomePage(): Serenity.StringEditor;
    }

    [['CompanyName', Serenity.StringEditor], ['ContactName', Serenity.StringEditor], ['ContactTitle', Serenity.StringEditor], ['Address', Serenity.StringEditor], ['City', Serenity.StringEditor], ['Region', Serenity.StringEditor], ['PostalCode', Serenity.StringEditor], ['Country', Serenity.StringEditor], ['Phone', Serenity.StringEditor], ['Fax', Serenity.StringEditor], ['HomePage', Serenity.StringEditor]].forEach(x => SupplierForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

