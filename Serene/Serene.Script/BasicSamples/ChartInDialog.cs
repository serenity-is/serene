/* 
This class has been ported to TypeScript. See CancellableBulkActionGrid.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene.BasicSamples
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;
    using jQueryApi.UI.Widgets;
    using System.Runtime.CompilerServices;
    using System.Html;

    [Resizable, Maximizable]
    public class ChartInDialog : TemplatedDialog
    {
        private object areaChart;

        protected override void OnDialogOpen()
        {
            base.OnDialogOpen();

            BasicSamplesService.OrdersByShipper(new OrdersByShipperRequest(), response =>
            {
                areaChart = CreateAreaChart(new
                {
                    element = this.IdPrefix + "Chart",
                    resize = true,
                    parseTime = false,
                    data = response.Values,
                    xkey = "Month",
                    ykeys = response.ShipperKeys,
                    labels = response.ShipperLabels,
                    hideHover = "auto"
                });
            });

            this.element.Closest(".ui-dialog").Bind("resize", delegate { Arrange(); });
        }

        protected override void Arrange()
        {
            base.Arrange();

            if (areaChart != null)
                areaChart.As<dynamic>().redraw();
        }

        [InlineCode("new Morris.Area({options})")]
        private static object CreateAreaChart(object options)
        {
            return null;
        }

        protected override string GetTemplate()
        {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='~_Chart'></div>";
        }

        protected override DialogOptions GetDialogOptions()
        {
            var opt = base.GetDialogOptions();
            opt.Title = "Orders by Shipper";
            return opt;
        }

        /// <summary>
        /// Putting initialization code here in a static method to avoid writing much javascript
        /// code in CSHTML directly, as it is prone to syntax and runtime errors.
        /// In javascript this method will have name "initializePage" instead of "InitializePage" 
        /// as Saltarelle by default camel cases function names.
        /// </summary>
        public static void InitializePage()
        {
            jQuery.OnDocumentReady(delegate
            {
                J("#LaunchDialogButton").Click(e =>
                {
                    new ChartInDialog().DialogOpen();
                });
            });
        }
    }
}
*/