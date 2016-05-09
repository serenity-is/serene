
namespace Serene.Northwind
{
    using Common;
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    [ColumnsKey("Northwind.Customer"), Filterable, IdProperty("ID"), NameProperty("CustomerID")]
    [DialogType(typeof(CustomerDialog)), LocalTextPrefix("Northwind.Customer"), Service("Northwind/Customer")]
    public class CustomerGrid : EntityGrid<CustomerRow>
    {
        public CustomerGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override List<ToolButton> GetButtons()
        {
            var buttons = base.GetButtons();

            buttons.Add(ExcelExportHelper.CreateToolButton(new Common.ExcelExportOptions
            {
                Grid = this,
                OnViewSubmit = this.OnViewSubmit,
                Service = CustomerService.BaseUrl + "/ListExcel"
            }));

            buttons.Add(PdfExportHelper.CreateToolButton(new PdfExportOptions
            {
                Grid = this,
                OnViewSubmit = this.OnViewSubmit
            }));

            return buttons;
        }
    }
}