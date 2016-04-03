namespace Serene.Northwind {
    export class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.OrderDetail';

    }

    export interface OrderDetailForm extends Serenity.PrefixedContext {
        ProductID(): Serenity.LookupEditor;
        UnitPrice(): Serenity.DecimalEditor;
        Quantity(): Serenity.IntegerEditor;
        Discount(): Serenity.DecimalEditor;
    }

    [['ProductID', Serenity.LookupEditor], ['UnitPrice', Serenity.DecimalEditor], ['Quantity', Serenity.IntegerEditor], ['Discount', Serenity.DecimalEditor]].forEach(x => OrderDetailForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

