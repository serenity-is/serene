namespace Serene.Northwind {
    export class RegionForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Region';

    }

    export interface RegionForm extends Serenity.PrefixedContext {
        RegionID();
        RegionDescription();
    }

    [['RegionID', Serenity.IntegerEditor], ['RegionDescription', Serenity.StringEditor]].forEach(x => RegionForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

