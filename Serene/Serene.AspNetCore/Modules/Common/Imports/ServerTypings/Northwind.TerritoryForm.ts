namespace Serene.Northwind {
    export class TerritoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Territory';

    }

    export interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }

    [['TerritoryID', () => Serenity.StringEditor], ['TerritoryDescription', () => Serenity.StringEditor], ['RegionID', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(TerritoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

