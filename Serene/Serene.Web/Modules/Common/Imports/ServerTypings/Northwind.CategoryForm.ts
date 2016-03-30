namespace Serene.Northwind {
    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Category';

    }

    export interface CategoryForm extends Serenity.PrefixedContext {
        CategoryName();
        Description();
    }

    [['CategoryName', Serenity.StringEditor], ['Description', Serenity.StringEditor]].forEach(x => CategoryForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

