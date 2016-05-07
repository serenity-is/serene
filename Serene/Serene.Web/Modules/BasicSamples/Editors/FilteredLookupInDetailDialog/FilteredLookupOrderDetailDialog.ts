namespace Serene.BasicSamples {

    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    @Serenity.Decorators.registerClass()
    export class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {

        constructor() {
            super();

            this.form = new Northwind.OrderDetailForm(this.idPrefix);

            // we can set cascade field in constructor
            // we could also use FilterField but in this case, when CategoryID is null
            // lookup editor would show all products in any category
            this.form.ProductID.cascadeField = Northwind.ProductRow.Fields.CategoryID;

            // but CategoryID value is not yet available here as detail editor will set it 
            // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
        }

        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity) {
            super.beforeLoadEntity(entity);

            // setting cascade value here
            // make sure you have [LookupInclude] on CategoryID property of ProductRow
            // otherwise this field won't be available in lookup script (will always be null),
            // so can't be filtered and you'll end up with an empty product list.
            this.form.ProductID.set_cascadeValue(this.categoryID);
        }

        public categoryID: number;
    }
}