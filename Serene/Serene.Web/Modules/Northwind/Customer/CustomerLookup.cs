
namespace Serene.Northwind.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

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