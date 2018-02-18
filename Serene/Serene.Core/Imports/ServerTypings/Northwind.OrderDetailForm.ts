namespace Serene.Northwind {
    export interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.OrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailForm.init)  {
                OrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(OrderDetailForm, [
                    'ProductID', w0,
                    'UnitPrice', w1,
                    'Quantity', w2,
                    'Discount', w1
                ]);
            }
        }
    }
}
