using jQueryApi;
using Serene.Northwind;
using Serenity;

namespace Serene.BasicSamples
{
    /// <summary>
    /// Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
    /// </summary>
    [DialogType(typeof(FilteredLookupInDetailDialog))]
    public class FilteredLookupInDetailGrid : OrderGrid
    {
        public FilteredLookupInDetailGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    /// <summary>
    /// Basic order form with a category selection
    /// </summary>
    [IdProperty(OrderRow.IdProperty), NameProperty(OrderRow.Fields.OrderID)]
    [LocalTextPrefix("Northwind.Order"), Service("Northwind/Order")]
    [FormKey(FilteredLookupInDetailForm.FormKey), Responsive]
    public class FilteredLookupInDetailDialog : EntityDialog<OrderRow>
    {
        private FilteredLookupInDetailForm form;

        public FilteredLookupInDetailDialog()
        {
            form = new FilteredLookupInDetailForm(this.IdPrefix);

            form.CategoryID.Change(e =>
            {
                form.DetailList.CategoryID = form.CategoryID.Value.ToInt32();
            });
        }
    }

    /// <summary>
    /// Our subclass of Order Details editor with a CategoryID property
    /// </summary>
    [DialogType(typeof(FilteredLookupOrderDetailDialog))]
    public class FilteredLookupDetailEditor : OrderDetailsEditor
    {
        public FilteredLookupDetailEditor(jQueryObject container)
            : base(container)
        {
        }

        /// <summary>
        /// This method is called to initialize an edit dialog created by
        /// grid editor when Add button or an edit link is clicked
        /// We have an opportunity here to pass CategoryID to edit dialog
        /// </summary>
        protected override void InitEntityDialog(string itemType, Widget dialog)
        {
            base.InitEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            ((FilteredLookupOrderDetailDialog)dialog).CategoryID = this.CategoryID;
        }

        public int? CategoryID { get; set; }
    }

    /// <summary>
    /// Our subclass of order detail dialog with a CategoryID property 
    /// that will be used to set CascadeValue of product editor
    /// </summary>
    public class FilteredLookupOrderDetailDialog : OrderDetailDialog
    {
        public FilteredLookupOrderDetailDialog()
        {
            // we can set cascade field in constructor
            // we could also use FilterField but in this case, when CategoryID is null
            // lookup editor would show all products in any category
            form.ProductID.CascadeField = ProductRow.Fields.CategoryID;

            // but CategoryID value is not yet available here as detail editor will set it 
            // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
        }

        /// <summary>
        /// This method is called just before an entity is loaded to dialog
        /// This is also called for new record mode with an empty entity
        /// </summary>
        protected override void BeforeLoadEntity(OrderDetailRow entity)
        {
            base.BeforeLoadEntity(entity);

            // setting cascade value here
            // make sure you have [LookupInclude] on CategoryID property of ProductRow
            // otherwise this field won't be available in lookup script (will always be null),
            // so can't be filtered and you'll end up with an empty product list.
            form.ProductID.CascadeValue = CategoryID;
        }

        public int? CategoryID { get; set; }
    }
}