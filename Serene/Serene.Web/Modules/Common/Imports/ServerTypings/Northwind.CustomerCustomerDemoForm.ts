namespace Serene.Northwind {
    export class CustomerCustomerDemoForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.CustomerCustomerDemo';

    }

    export interface CustomerCustomerDemoForm extends Serenity.PrefixedContext {
        CustomerID();
        CustomerTypeID();
    }

    [['CustomerID', Serenity.StringEditor], ['CustomerTypeID', Serenity.StringEditor]].forEach(x => CustomerCustomerDemoForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

