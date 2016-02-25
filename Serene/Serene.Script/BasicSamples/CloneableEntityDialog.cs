using jQueryApi;
using Serene.Northwind;
using Serenity;

namespace Serene.BasicSamples
{
    [Responsive, Maximizable]
    public class CloneableEntityDialog : ProductDialog
    {
        protected override void UpdateInterface()
        {
            // by default cloneButton is hidden in base UpdateInterface method
            base.UpdateInterface();

            // here we show it if it is edit mode (not new)
            cloneButton.Toggle(IsEditMode);
        }

        /// <summary>
        /// Overriding this method is optional to customize cloned entity
        /// </summary>
        protected override ProductRow GetCloningEntity()
        {
            var clone = base.GetCloningEntity();

            // add (Clone) suffix if it's not already added
            const string suffix = " (Clone)";
            if (!(clone.ProductName ?? "").EndsWith(suffix))
                clone.ProductName = (clone.ProductName ?? "") + suffix;

            // it's better to clear image for this sample
            // otherwise we would have to create a temporary copy of it
            // and upload
            clone.ProductImage = null;

            // let's clear fields not logical to be cloned
            clone.UnitsInStock = 0;
            clone.UnitsOnOrder = 0;

            return clone;
        }
    }

    [DialogType(typeof(CloneableEntityDialog))]
    public class CloneableEntityGrid : ProductGrid
    {
        public CloneableEntityGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}