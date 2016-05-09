
namespace Serene.Northwind
{
    using Common;
    using Serenity;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
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

            buttons.Add(ReportHelper.CreateToolButton(new ReportButtonOptions
            {
                Title = "Invoice",
                CssClass = "export-pdf-button",
                ReportKey = "Northwind.OrderDetail",
                GetParams = () => new
                {
                    OrderID = this.EntityId
                }
            }));

            return buttons;
        }
    }
}