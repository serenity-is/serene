/// <reference path="../../../Northwind/Product/ProductGrid.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class GridFilteredByCriteria extends Northwind.ProductGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['UnitsInStock'], '>', 10],
                [['CategoryName'], '!=', 'Condiments'],
                [['Discontinued'], '=', 0]);

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
        }
    }
}