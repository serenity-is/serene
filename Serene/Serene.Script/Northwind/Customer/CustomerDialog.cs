
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("ID"), NameProperty("CustomerID"), Flexify, Maximizable]
    [FormKey("Northwind.Customer"), LocalTextPrefix("Northwind.Customer"), Service("Northwind/Customer")]
    public class CustomerDialog : EntityDialog<CustomerRow>
    {
        private string loadedState;
        private CustomerOrdersGrid ordersGrid;

        public CustomerDialog()
        {
            ordersGrid = new CustomerOrdersGrid(this.ById("OrdersGrid"));
            ordersGrid.Element.FlexHeightOnly();

            this.ById("NoteList").Closest(".field").Hide().End().AppendTo(this.ById("TabNotes"));

            DialogUtils.PendingChangesConfirmation(this.element, () => GetSaveState() != loadedState);

            tabs.OnActivate += (e, i) => this.Arrange();
        }

        private string GetSaveState()
        {
            try { return Q.ToJSON(GetSaveEntity()); } catch { return null; }
        }

        public override void LoadResponse(RetrieveResponse<CustomerRow> data)
        {
            base.LoadResponse(data);
            loadedState = GetSaveState();
        }

        protected override void LoadEntity(CustomerRow entity)
        {
            base.LoadEntity(entity);

            tabs.SetDisabled("Orders", this.IsNewOrDeleted);

            ordersGrid.CustomerID = entity.CustomerID;
        }

        protected override void OnSaveSuccess(ServiceResponse response)
        {
            base.OnSaveSuccess(response);

            Q.ReloadLookup(CustomerRow.LookupKey);
        }
    }
}