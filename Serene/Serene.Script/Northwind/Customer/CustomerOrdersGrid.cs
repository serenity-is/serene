
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

            CustomerFilter.Element.Parent().Hide();
        }

        protected override bool GetGridCanLoad()
        {
            return base.GetGridCanLoad() && CustomerID != null;
        }

        public string CustomerID
        {
            get { return CustomerFilter.Value; }
            set { CustomerFilter.Value = value; Refresh(); }
        }
    }
}