namespace Serene.Northwind {
    export class ShipperForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Shipper';

    }

    export interface ShipperForm extends Serenity.PrefixedContext {
        CompanyName(): Serenity.StringEditor;
        Phone(): PhoneEditor;
    }

    [['CompanyName', Serenity.StringEditor], ['Phone', PhoneEditor]].forEach(x => ShipperForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

