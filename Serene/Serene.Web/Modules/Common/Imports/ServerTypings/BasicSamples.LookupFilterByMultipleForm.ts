namespace Serene.BasicSamples {
    export class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.LookupFilterByMultiple';

    }

    export interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }

    [['ProductName', () => Serenity.StringEditor], ['ProductImage', () => Serenity.ImageUploadEditor], ['Discontinued', () => Serenity.BooleanEditor], ['SupplierID', () => Serenity.LookupEditor], ['CategoryID', () => ProduceSeafoodCategoryEditor], ['QuantityPerUnit', () => Serenity.StringEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['UnitsInStock', () => Serenity.IntegerEditor], ['UnitsOnOrder', () => Serenity.IntegerEditor], ['ReorderLevel', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(LookupFilterByMultipleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

