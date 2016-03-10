
namespace Serene.Northwind
{
    using Common;
    using Serenity;

    [FormKey("Northwind.OrderDetail"), LocalTextPrefix("Northwind.OrderDetail")]
    public class OrderDetailDialog : GridEditorDialog<OrderDetailRow>
    {
        protected OrderDetailForm form;

        public OrderDetailDialog()
        {
            form = new OrderDetailForm(this.IdPrefix);

            form.ProductID.ChangeSelect2(e => {
                var productID = form.ProductID.Value.ToInt32();
                if (productID != null)
                    form.UnitPrice.Value = (double?)ProductRow.Lookup.ItemById[productID.Value].UnitPrice;
            });

            form.Discount.AddValidationRule(this.uniqueName, e => {
                if (form.UnitPrice.Value != null &&
                    form.Quantity.Value != null &&
                    form.Discount.Value != null &&
                    form.Discount.Value.Value > 0 &&
                    form.Discount.Value.Value > form.UnitPrice.Value.Value * form.Quantity.Value.Value)
                {
                    return "Discount can't be higher than total price!";
                }

                return null;
            });
        }
    }
}