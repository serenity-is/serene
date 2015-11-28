
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;

    public class CustomerEditor : LookupEditorBase<CustomerRow>
    {
        public CustomerEditor(jQueryObject container, LookupEditorOptions options)
            : base(container, options)
        {
        }

        protected override string GetLookupKey()
        {
            return CustomerRow.LookupKey;
        }

        protected override string GetItemText(CustomerRow item, Lookup<CustomerRow> lookup)
        {
            return base.GetItemText(item, lookup) + " [" + item.CustomerID + "]";
        }
    }
}