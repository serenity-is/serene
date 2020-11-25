using Serene.Northwind.Entities;
using Serenity.ComponentModel;
using Serenity.Web;

namespace Serene.Northwind.Lookups
{
    [LookupScript]
    public class CustomerLookup : RowLookupScript<CustomerRow>
    {
        public CustomerLookup()
        {
            IdField = CustomerRow.Fields.CustomerID.PropertyName;
            TextField = CustomerRow.Fields.CompanyName.PropertyName;
        }
    }
}