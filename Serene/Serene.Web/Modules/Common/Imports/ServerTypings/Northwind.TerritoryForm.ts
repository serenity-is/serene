namespace Serene.Northwind {
    export class TerritoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Territory';

    }

    export interface TerritoryForm extends Serenity.PrefixedContext {
        TerritoryID(): Serenity.StringEditor;
        TerritoryDescription(): Serenity.StringEditor;
        RegionID(): Serenity.LookupEditor;
    }

    [['TerritoryID', Serenity.StringEditor], ['TerritoryDescription', Serenity.StringEditor], ['RegionID', Serenity.LookupEditor]].forEach(x => TerritoryForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

