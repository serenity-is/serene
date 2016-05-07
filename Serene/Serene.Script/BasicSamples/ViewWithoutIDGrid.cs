/* 
This class has been ported to TypeScript. See MultiColumnDialog.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene.BasicSamples
{
    using jQueryApi;
    using Serenity;
    using Northwind;
    using System.Collections.Generic;

    [IdProperty("__id")]
    [ColumnsKey("Northwind.SalesByCategory"), NameProperty(SalesByCategoryRow.NameProperty)]
    [LocalTextPrefix(SalesByCategoryRow.LocalTextPrefix), Service(SalesByCategoryService.BaseUrl)]
    public class ViewWithoutIDGrid : EntityGrid<SalesByCategoryRow>
    {
        // this is our autoincrementing counter
        private int nextId = 1; 

        public ViewWithoutIDGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override ListResponse<SalesByCategoryRow> OnViewProcessData(ListResponse<SalesByCategoryRow> response)
        {
            response = base.OnViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but this is javascript and we can set any property of an object
            foreach (var x in response.Entities)
                x.As<dynamic>().__id = nextId++;

            return response;
        }

        protected override List<ToolButton> GetButtons()
        {
            return new List<ToolButton>();
        }
    }
}
*/