
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using Fields = CustomerRow.Fields;

    [ColumnsKey("Northwind.Customer"), Filterable, IdProperty("ID"), NameProperty("CustomerID")]
    [DialogType(typeof(CustomerDialog)), LocalTextPrefix("Northwind.Customer"), Service("Northwind/Customer")]
    public class CustomerGrid : EntityGrid<CustomerRow>, IAsyncInit
    {
        public CustomerGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            AddEqualityFilter<LookupEditor>(Fields.Country,
                options: new LookupEditorOptions { LookupKey = "Northwind.CustomerCountry" });

            AddEqualityFilter<OrderShipCityEditor>(Fields.City, init: w => w.CountryEditorID = Fields.Country);
        }
    }
}