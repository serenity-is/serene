
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    public class CustomerEditor : LookupEditorBase<CustomerRow>
    {
        public CustomerEditor(jQueryObject container)
            : base(container)
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