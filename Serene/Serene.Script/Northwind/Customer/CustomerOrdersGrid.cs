
namespace Serene.Northwind
{
    using System.Collections.Generic;
    using System.Linq;
    using jQueryApi;
    using Serenity;

    [DialogType(typeof(CustomerOrderDialog))]
    public class CustomerOrdersGrid : OrderGrid
    {
        public CustomerOrdersGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override List<SlickColumn> GetColumns()
        {
            return base.GetColumns().Where(x => x.Field != OrderRow.Fields.CustomerCompanyName).ToList();
        }

        protected override void InitEntityDialog(string itemType, Widget dialog)
        {
            base.InitEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.Cascade((OrderDialog)dialog, this.Element.Closest(".ui-dialog"));
        }

        protected override void AddButtonClick()
        {
            EditItem(new OrderRow
            {
                CustomerID = CustomerID
            });
        }

        protected override string GetInitialTitle()
        {
            return null;
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            CustomerFilter.Element.Closest(".quick-filter-item").Remove();
        }

        protected override bool GetGridCanLoad()
        {
            return base.GetGridCanLoad() && !string.IsNullOrEmpty(customerID);
        }

        private string customerID;

        public string CustomerID
        {
            get { return customerID; }
            set
            {
                if (customerID != value)
                {
                    customerID = value;
                    SetEquality(OrderRow.Fields.CustomerID, CustomerID);
                    Refresh();
                }
            }
        }
    }
}