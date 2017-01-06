namespace Serene.BasicSamples {
    export class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.ChangingLookupText';

    }

    export interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }

    [['ProductID', () => ChangingLookupTextEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Quantity', () => Serenity.IntegerEditor], ['Discount', () => Serenity.DecimalEditor]].forEach(x => Object.defineProperty(ChangingLookupTextForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

