namespace Serene.BasicSamples {
    export class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.FilteredLookupInDetail';

    }

    export interface FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        CustomerID();
        OrderDate();
        CategoryID();
        DetailList();
    }

    [['CustomerID', Northwind.CustomerEditor], ['OrderDate', Serenity.DateEditor], ['CategoryID', Serenity.LookupEditor], ['DetailList', FilteredLookupDetailEditor]].forEach(x => FilteredLookupInDetailForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

