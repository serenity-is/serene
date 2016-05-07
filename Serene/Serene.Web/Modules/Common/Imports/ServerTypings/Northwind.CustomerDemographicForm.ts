namespace Serene.Northwind {
    export class CustomerDemographicForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.CustomerDemographic';

    }

    export interface CustomerDemographicForm {
        CustomerTypeID: Serenity.StringEditor;
        CustomerDesc: Serenity.StringEditor;
    }

    [['CustomerTypeID', Serenity.StringEditor], ['CustomerDesc', Serenity.StringEditor]].forEach(x => Object.defineProperty(CustomerDemographicForm.prototype, <string>x[0], { get: function () { return this.w(x[0], x[1]); }, enumerable: true, configurable: true }));
}

