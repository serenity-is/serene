declare var jsPDF;

namespace Serene.Common {
    export class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {

        private report: Serenity.Reporting.ReportRetrieveResponse;
        private propertyItems: Serenity.PropertyItem[];
        private propertyGrid: Serenity.PropertyGrid;

        constructor(options: ReportDialogOptions) {
            super(options);

            this.updateInterface();
            this.loadReport(this.options.reportKey);
        }

        protected getDialogButtons() {
            return null;
        }

        protected createPropertyGrid() {
            this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
            this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                idPrefix: this.idPrefix,
                useCategories: true,
                items: this.report.Properties
            }).init(null);
        }

        protected loadReport(reportKey: string) {
            Q.serviceCall({
                url: Q.resolveUrl('~/Report/Retrieve'),
                request: {
                    ReportKey: reportKey
                },
                onSuccess: response => {
                    this.report = response as Serenity.Reporting.ReportRetrieveResponse;
                    this.element.dialog().dialog('option', 'title', this.report.Title);
                    this.createPropertyGrid();
                    this.propertyGrid.load(this.report.InitialSettings || {});
                    this.updateInterface();
                    this.dialogOpen();
                }
            });
        }

        protected updateInterface() {
            this.toolbar.findButton('print-preview-button')
                .toggle(this.report && !this.report.IsDataOnlyReport);

            this.toolbar.findButton('export-pdf-button')
                .toggle(this.report && !this.report.IsDataOnlyReport);

            this.toolbar.findButton('export-xlsx-button')
                .toggle(this.report && this.report.IsDataOnlyReport);
        }

        executeReport(target: string, ext: string, download: boolean) {
            if (!this.validateForm()) {
                return;
            }

            var opt = {};
            this.propertyGrid.save(opt);
            ReportHelper.execute({
                download: download,
                reportKey: this.report.ReportKey,
                extension: ext as any,
                target: target,
                params: opt
            });
        }
    
        getToolbarButtons() {
            return [
                {
                    title: 'Preview',
                    cssClass: 'print-preview-button',
                    onClick: () => this.executeReport('_blank', null, false)
                },
                {
                    title: 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: () => this.executeReport('_blank', 'pdf', true)
                },
                {
                    title: 'Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: () => this.executeReport('_blank', 'xlsx', true)
                }
            ];
        }
    }

    export interface ReportDialogOptions {
        reportKey: string;
    }
}
