namespace Serene.Northwind {
    export interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }

    export class OrderForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Order';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderForm.init)  {
                OrderForm.init = true;

                var s = Serenity;
                var w0 = CustomerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = OrderDetailsEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.StringEditor;

                Q.initFormType(OrderForm, [
                    'CustomerID', w0,
                    'OrderDate', w1,
                    'RequiredDate', w1,
                    'EmployeeID', w2,
                    'DetailList', w3,
                    'ShippedDate', w1,
                    'ShipVia', w2,
                    'Freight', w4,
                    'ShipName', w5,
                    'ShipAddress', w5,
                    'ShipCity', w5,
                    'ShipRegion', w5,
                    'ShipPostalCode', w5,
                    'ShipCountry', w5
                ]);
            }
        }
    }
}
