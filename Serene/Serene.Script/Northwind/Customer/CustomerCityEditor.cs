
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using Serenity.ComponentModel;
    using System.Collections.Generic;
    using System.Linq;

    public class CustomerCityEditor : LookupEditorBase<CustomerRow>
    {
        private CascadedWidgetLink<LookupEditor> countryLink;

        public CustomerCityEditor(jQueryObject container)
            : base(container)
        {
            countryLink = new CascadedWidgetLink<LookupEditor>(this, p => this.Country = p.Value);
        }

        protected override string GetLookupKey()
        {
            return "Northwind.CustomerCity";
        }

        protected override IEnumerable<CustomerRow> GetItems(Lookup<CustomerRow> lookup)
        {
            return base.GetItems(lookup).Where(x => x.Country == Country);
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