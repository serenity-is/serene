namespace Serene.Northwind {
    export class RegionForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Region';

    }

    export interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }

    [['RegionID', () => Serenity.IntegerEditor], ['RegionDescription', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RegionForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

