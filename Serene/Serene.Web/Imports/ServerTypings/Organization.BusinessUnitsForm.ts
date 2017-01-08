

namespace Serene.Organization {
    export class BusinessUnitsForm extends Serenity.PrefixedContext {
        static formKey = 'Organization.BusinessUnits';
    }

    export interface BusinessUnitsForm {
        Name: Serenity.StringEditor;
        ParentUnitId: Serenity.IntegerEditor;
    }

    [['Name', () => Serenity.StringEditor], ['ParentUnitId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(BusinessUnitsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}