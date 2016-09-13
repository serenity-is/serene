/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey() { return ChangingLookupTextForm.formKey; }
        protected getLocalTextPrefix() { return Northwind.OrderDetailRow.localTextPrefix; }

        protected form: ChangingLookupTextForm;

        constructor() {
            super();

            this.form = new ChangingLookupTextForm(this.idPrefix);

            this.form.ProductID.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductID.value);
                if (productID != null) {
                    this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                }
            });

            this.form.Discount.addValidationRule(this.uniqueName, e => {
                var price = this.form.UnitPrice.value;
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                if (price != null && quantity != null && discount != null &&
                    discount > 0 && discount >= price * quantity) {
                    return "Discount can't be higher than total price!";
                }
            });
        }

        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('apply-changes-button').hide();
            this.toolbar.findButton('save-and-close-button').hide();
        }
    }
}