
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using Fields = OrderRow.Fields;

    [ColumnsKey("Northwind.Order"), IdProperty("OrderID")]
    [DialogType(typeof(OrderDialog)), LocalTextPrefix("Northwind.Order"), Service("Northwind/Order")]
    public class OrderGrid : EntityGrid<OrderRow>
    {
        private EnumEditor shippingState;

        public OrderGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            CustomerFilter = AddEqualityFilter<CustomerEditor>(Fields.CustomerID);

            AddDateRangeFilter(Fields.OrderDate);

            shippingState = AddEqualityFilter<EnumEditor>(Fields.ShippingState,
                options: new EnumEditorOptions { EnumKey = "Northwind.OrderShippingState" });
                
            AddEqualityFilter<LookupEditor>(Fields.ShipVia,
                options: new LookupEditorOptions { LookupKey = ShipperRow.LookupKey });

            AddEqualityFilter<LookupEditor>(Fields.ShipCountry,
                options: new LookupEditorOptions { LookupKey = "Northwind.OrderShipCountry" });

            AddEqualityFilter<LookupEditor>(Fields.ShipCity, options: new LookupEditorOptions {
                LookupKey = "Northwind.OrderShipCity", CascadeFrom = Fields.ShipCountry });

            AddEqualityFilter<LookupEditor>(Fields.EmployeeID,
                options: new LookupEditorOptions { LookupKey = EmployeeRow.LookupKey });
        }

        public OrderShippingState? ShippingState
        {
            get { return (OrderShippingState?)shippingState.Value.ToInt32(); }
            set { shippingState.Value = value == null ? "" : ((int)value).ToString(); }
        }

        protected override List<ToolButton> GetButtons()
        {
            var buttons = base.GetButtons();

            buttons.Add(Common.ExcelExportHelper.CreateToolButton(this,
                OrderService.BaseUrl + "/ListExcel", this.OnViewSubmit));

            buttons.Add(Common.PdfExportHelper.CreateToolButton(this, this.OnViewSubmit));

            return buttons;
        }

        public CustomerEditor CustomerFilter { get; private set; }
    }
}