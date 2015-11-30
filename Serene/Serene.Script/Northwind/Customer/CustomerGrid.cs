
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

            AddEqualityFilter<LookupEditor>(Fields.City, options: new LookupEditorOptions {
                LookupKey = "Northwind.CustomerCity", CascadeFrom = Fields.Country });
        }

        protected override List<ToolButton> GetButtons()
        {
            var buttons = base.GetButtons();
            buttons.Add(Common.ExcelExportHelper.CreateToolButton(this, 
                CustomerService.BaseUrl + "/ListExcel", this.OnViewSubmit));
            return buttons;
        }
    }
}