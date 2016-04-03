namespace Serene.Northwind {
    export class OrderForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Order';

    }

    export interface OrderForm extends Serenity.PrefixedContext {
        CustomerID(): CustomerEditor;
        OrderDate(): Serenity.DateEditor;
        RequiredDate(): Serenity.DateEditor;
        EmployeeID(): Serenity.LookupEditor;
        DetailList(): OrderDetailsEditor;
        ShippedDate(): Serenity.DateEditor;
        ShipVia(): Serenity.LookupEditor;
        Freight(): Serenity.DecimalEditor;
        ShipName(): Serenity.StringEditor;
        ShipAddress(): Serenity.StringEditor;
        ShipCity(): Serenity.StringEditor;
        ShipRegion(): Serenity.StringEditor;
        ShipPostalCode(): Serenity.StringEditor;
        ShipCountry(): Serenity.StringEditor;
    }

    [['CustomerID', CustomerEditor], ['OrderDate', Serenity.DateEditor], ['RequiredDate', Serenity.DateEditor], ['EmployeeID', Serenity.LookupEditor], ['DetailList', OrderDetailsEditor], ['ShippedDate', Serenity.DateEditor], ['ShipVia', Serenity.LookupEditor], ['Freight', Serenity.DecimalEditor], ['ShipName', Serenity.StringEditor], ['ShipAddress', Serenity.StringEditor], ['ShipCity', Serenity.StringEditor], ['ShipRegion', Serenity.StringEditor], ['ShipPostalCode', Serenity.StringEditor], ['ShipCountry', Serenity.StringEditor]].forEach(x => OrderForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

