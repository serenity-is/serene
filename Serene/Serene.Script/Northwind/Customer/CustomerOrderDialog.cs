
namespace Serene.Northwind
{
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class CustomerOrderDialog : OrderDialog
    {
        protected override void UpdateInterface()
        {
            base.UpdateInterface();

            EditorUtils.SetReadOnly(form.CustomerID, true);
        }
    }
}