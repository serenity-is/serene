
namespace Serene.Northwind
{
    using Serenity;
    using System;

    [IdProperty(OrderRow.IdProperty), NameProperty(OrderRow.Fields.OrderID), Flexify, Maximizable]
    [FormKey("Northwind.Order"), LocalTextPrefix("Northwind.Order"), Service("Northwind/Order")]
    public class OrderDialog : EntityDialog<OrderRow>
    {
        protected OrderForm form;

        public OrderDialog()
        {
            form = new OrderForm(this.IdPrefix);
        }

        protected override void LoadEntity(OrderRow entity)
        {
            base.LoadEntity(entity);
        }
    }
}