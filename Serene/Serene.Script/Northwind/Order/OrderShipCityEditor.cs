
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using Serenity.ComponentModel;
    using System.Collections.Generic;
    using System.Linq;

    public class OrderShipCityEditor : LookupEditorBase<OrderRow>
    {
        private Common.CascadedWidgetLink<LookupEditor> countryLink;

        public OrderShipCityEditor(jQueryObject container)
            : base(container)
        {
            countryLink = new Common.CascadedWidgetLink<LookupEditor>(this, p => this.Country = p.Value);
        }

        protected override string GetLookupKey()
        {
            return "Northwind.OrderShipCity";
        }

        protected override IEnumerable<OrderRow> GetItems(Lookup<OrderRow> lookup)
        {
            return base.GetItems(lookup).Where(x => x.ShipCountry == Country);
        }

        [Option]
        public string CountryEditorID
        {
            get { return countryLink.ParentID; }
            set { countryLink.ParentID = value; }
        }

        private string country;

        [Option]
        public string Country
        {
            get 
            {
                return country; 
            }
            set 
            {
                if (country != value)
                {
                    country = value;
                    Value = null;
                    UpdateItems();
                }
            }
        }
    }
}