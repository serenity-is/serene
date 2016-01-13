
namespace Serene.Northwind
{
    using Common;
    using Serenity;
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
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            var buttons = base.GetToolbarButtons();

            buttons.Add(ReportHelper.CreateRenderButton(
                title: "Invoice",
                cssClass: "export-pdf-button",
                reportKey: "Northwind.OrderDetail",
                options: () => new
                {
                    OrderID = this.EntityId
                }
            ));

            return buttons;
        }
    }
}