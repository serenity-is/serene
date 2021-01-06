namespace Serene.BasicSamples {

    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    @Serenity.Decorators.registerEditor()
    export class ProduceSeafoodCategoryEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {

        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }

        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey() {
            return Northwind.CategoryRow.lookupKey;
        }

        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>) {
            return super.getItems(lookup).filter(x =>
                x.CategoryName === 'Produce' || x.CategoryName === 'Seafood');
        }
    }
}