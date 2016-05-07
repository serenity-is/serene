namespace Serene.Northwind {
    export class EmployeeTerritoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.EmployeeTerritory';

    }

    export interface EmployeeTerritoryForm {
        TerritoryID: Serenity.StringEditor;
    }

    [['TerritoryID', Serenity.StringEditor]].forEach(x => Object.defineProperty(EmployeeTerritoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], x[1]); }, enumerable: true, configurable: true }));
}

