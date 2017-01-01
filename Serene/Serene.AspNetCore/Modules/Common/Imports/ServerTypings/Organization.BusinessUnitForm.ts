namespace Serene.Organization {
    export class BusinessUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Organization.BusinessUnit';

    }

    export interface BusinessUnitForm {
        Name: Serenity.StringEditor;
        ParentUnitId: BusinessUnitEditor;
    }

    [['Name', () => Serenity.StringEditor], ['ParentUnitId', () => BusinessUnitEditor]].forEach(x => Object.defineProperty(BusinessUnitForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

