namespace Serene.BasicSamples {

    declare var Morris: any;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class ChartInDialog extends Serenity.TemplatedDialog<any> {

        private areaChart: any;

        static initializePage() {
            $(function () {
                $('#LaunchDialogButton').click(function (e) {
                    (new ChartInDialog()).dialogOpen();
                });
            });
        }

        protected onDialogOpen() {
            super.onDialogOpen();
            BasicSamplesService.OrdersByShipper({}, response => {
                this.areaChart = new Morris.Area({
                    element: this.idPrefix + 'Chart',
                    resize: true, parseTime: false,
                    data: response.Values,
                    xkey: 'Month',
                    ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                });
            });

            this.element.closest('.ui-dialog').bind('resize', () => this.arrange());
        }

        protected arrange() {
            super.arrange();

            this.areaChart && this.areaChart.redraw();
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='~_Chart'></div>";
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Orders by Shipper';
            return opt;
        }
    }
}