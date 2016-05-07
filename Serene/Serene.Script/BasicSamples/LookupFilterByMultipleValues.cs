using jQueryApi;
using Serene.Northwind;
using Serenity;
using System.Runtime.CompilerServices;

namespace Serene.BasicSamples
{
    [Imported]
    public class ProduceSeafoodCategoryEditor : LookupEditorBase<CategoryRow>
    {
        public ProduceSeafoodCategoryEditor(jQueryObject hidden, LookupEditorOptions opt)
            : base(hidden, opt)
        {
        }
    }
}

/* 
This sample has been ported to TypeScript. See ProduceSeafoodCategoryEditor.ts
Code below is only a reference for those who want to use Saltaralle

using jQueryApi;
using Serene.Northwind;
using Serenity;
using Serenity.Data;
using System.Linq;
using System.Collections.Generic;

namespace Serene.BasicSamples
{
    /// <summary>
    /// This is our category editor that will show only categories of Produce and
    /// Seafood. We are subclassing LookupEditorBase which also LookupEditor 
    /// derives from.
    /// After compiling and transforming templates, this editor type will be 
    /// available in server side to use in our LookupEditorByMultipleForm,
    /// which is a version of ProductForm that uses our custom editor.
    /// </summary>
    public class ProduceSeafoodCategoryEditor : LookupEditorBase<CategoryRow>
    {
        public ProduceSeafoodCategoryEditor(jQueryObject hidden, LookupEditorOptions opt)
            : base(hidden, opt)
        {
        }

        /// <summary>
        /// Normally LookupEditor requires a lookup key to determine which set of 
        /// lookup data to show in editor. As our editor will only show category
        /// data, we lock it to category lookup key.
        /// </summary>
        protected override string GetLookupKey()
        {
            return CategoryRow.LookupKey;
        }

        /// <summary>
        /// Here we are filtering by category name but you could filter by any field.
        /// Just make sure the fields you filter on has [LookupInclude] attribute on them,
        /// otherwise their value will be null in client side as they are not sent back
        /// from server in lookup script.
        /// </summary>
        protected override IEnumerable<CategoryRow> GetItems(Lookup<CategoryRow> lookup)
        {
            return base.GetItems(lookup).Where(x =>
                x.CategoryName == "Produce" ||
                x.CategoryName == "Seafood");
        }
    }

    /// <summary>
    /// This is our custom product dialog that uses a different product form 
    /// (LookupFilterByMultipleForm) with our special category editor.
    /// </summary>
    [Responsive, Maximizable]
    [FormKey(LookupFilterByMultipleForm.FormKey)]
    public class LookupFilterByMultipleDialog : ProductDialog
    {
    }

    [DialogType(typeof(LookupFilterByMultipleDialog))]
    public class LookupFilterByMultipleGrid : ProductGrid
    {
        public LookupFilterByMultipleGrid(jQueryObject container)
            : base(container)
        {
        }

        /// <summary>
        /// This method is called just before List request is sent to service.
        /// You have an opportunity here to cancel request or modify it.
        /// Here we'll add a custom criteria to list request.
        /// </summary>
        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            // this has no relation to our lookup editor but as we'll allow picking only 
            // categories of Produce and Seafood in product dialog, it's better to show
            // only products from these categories in grid too

            ((ListRequest)View.Params).Criteria &=
                new Criteria(ProductRow.Fields.CategoryName).In("Produce", "Seafood");

            return true;
        }
    }
}
*/