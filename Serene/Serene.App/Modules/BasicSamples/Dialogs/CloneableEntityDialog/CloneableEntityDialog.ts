/// <reference path="../../../Northwind/Product/ProductDialog.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            this.cloneButton.toggle(this.isEditMode());
        }

        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity() {
            var clone = super.getCloningEntity();

            // add (Clone) suffix if it's not already added
            var suffix = ' (Clone)';
            if (!Q.endsWith(clone.ProductName || '', suffix)) {
                clone.ProductName = (clone.ProductName || '') + suffix;
            }

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
}