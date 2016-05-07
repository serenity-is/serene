namespace Serene.Northwind {
    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Product';

    }

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

    [['ProductName', Serenity.StringEditor], ['ProductImage', Serenity.ImageUploadEditor], ['Discontinued', Serenity.BooleanEditor], ['SupplierID', Serenity.LookupEditor], ['CategoryID', Serenity.LookupEditor], ['QuantityPerUnit', Serenity.StringEditor], ['UnitPrice', Serenity.DecimalEditor], ['UnitsInStock', Serenity.IntegerEditor], ['UnitsOnOrder', Serenity.IntegerEditor], ['ReorderLevel', Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], { get: function () { return this.w(x[0], x[1]); }, enumerable: true, configurable: true }));
}

