
namespace Serene.Northwind
{
    using Common;
    using Serenity;
    using System;
    using System.Collections.Generic;

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

            if (IsNew && entity.OrderDate == null)
                form.OrderDate.ValueAsDate = JsDate.Today;
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            var buttons = base.GetToolbarButtons();

            buttons.Add(ReportHelper.CreateToolButton("Northwind.Order.OrderDetail"));

            return buttons;
        }
    }
}