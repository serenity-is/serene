namespace Serene.Northwind {
    export class EmployeeTerritoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.EmployeeTerritory';

    }

    export interface EmployeeTerritoryForm extends Serenity.PrefixedContext {
        TerritoryID();
    }

    [['TerritoryID', Serenity.StringEditor]].forEach(x => EmployeeTerritoryForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

