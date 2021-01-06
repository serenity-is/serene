/// <reference path="../../../Northwind/Product/ProductGrid.ts" />

namespace Serene.BasicSamples {

    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    @Serenity.Decorators.registerClass()
    export class LookupFilterByMultipleGrid extends Northwind.ProductGrid {

        protected getDialogType() { return LookupFilterByMultipleDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }

            // this has no relation to our lookup editor but as we'll allow picking only 
            // categories of Produce and Seafood in product dialog, it's better to show
            // only products from these categories in grid too
            let request = this.view.params as Serenity.ListRequest;
            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['CategoryName'], 'in', [['Produce', 'Seafood']]]);

            // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]

            return true;
        }
    }
}