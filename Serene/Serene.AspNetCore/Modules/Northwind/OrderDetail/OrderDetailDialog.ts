/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey() { return OrderDetailForm.formKey; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }

        protected form: OrderDetailForm;

        constructor() {
            super();

            this.form = new OrderDetailForm(this.idPrefix);

            this.form.ProductID.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductID.value);
                if (productID != null) {
                    this.form.UnitPrice.value = ProductRow.getLookup().itemById[productID].UnitPrice;
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
    }
}