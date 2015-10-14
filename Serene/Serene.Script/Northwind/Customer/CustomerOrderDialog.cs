
namespace Serene.Northwind
{
    using Serenity;

    public class CustomerOrderDialog : OrderDialog
    {
        protected override void UpdateInterface()
        {
            base.UpdateInterface();

            PropertyGrid.SetReadOnly(form.CustomerID, true);
        }
    }
}