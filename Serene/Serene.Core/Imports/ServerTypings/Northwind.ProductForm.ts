namespace Serene.Northwind {
    export interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(ProductForm, [
                    'ProductName', w0,
                    'ProductImage', w1,
                    'Discontinued', w2,
                    'SupplierID', w3,
                    'CategoryID', w3,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w4,
                    'UnitsInStock', w5,
                    'UnitsOnOrder', w5,
                    'ReorderLevel', w5
                ]);
            }
        }
    }
}
