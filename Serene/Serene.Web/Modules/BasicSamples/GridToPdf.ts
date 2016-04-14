namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class GridToPdf extends Northwind.OrderGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons()
        {
            let buttons = super.getButtons();

            buttons.push(Serene.Common.PdfExportHelper.createToolButton(this, () => this.onViewSubmit(), {
            }));

            return buttons;
        }
    }
}

namespace Serene.Common {
    export interface PdfExportOptions {
        buttonTitle?: string;
        title?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        autoTableOptions?: jsPDF.AutoTableOptions
    }

    export namespace PdfExportHelper {

        function toAutoTableColumns(srcColumns: Slick.Column[], columnStyles: { [dataKey: string]: jsPDF.AutoTableStyles; }) {
            return srcColumns.map(src => {
                let col: jsPDF.AutoTableColumn = {
                    dataKey: src.identifier || src.field,
                    title: src.name || ''
                };

                let style: jsPDF.AutoTableStyles = {};
                if ((src.cssClass || '').indexOf("align-right") >= 0)
                    style.halign = 'right';
                else if ((src.cssClass || '').indexOf("align-center") >= 0)
                    style.halign = 'center';

                columnStyles[col.dataKey] = style;

                return col;
            });
        }

        function toAutoTableData(entities: any[], keys: string[], srcColumns: Slick.Column[]) {
            let el = document.createElement('span');
            let row = 0;
            return entities.map(item => {
                let dst = {};
                for (let cell = 0; cell < srcColumns.length; cell++) {
                    let src = srcColumns[cell];
                    let fld = src.field || '';
                    let key = keys[cell];
                    let txt;
                    let html: string;
                    if (src.formatter) {
                        html = src.formatter(row, cell, item[fld], src, item);
                    }
                    else if (src.format) {
                        html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                    }
                    else {
                        dst[key] = item[fld];
                        continue;
                    }

                    if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                        dst[key] = html;
                    else {
                        el.innerHTML = html;
                        dst[key] = el.textContent || '';
                    }
                }
                row++;
                return dst;
            });
        }

        function exportToPdf<TItem>(grid: Serenity.DataGrid<TItem, any>, onSubmit: () => boolean, options: PdfExportOptions) {

            if (!onSubmit())
                return;

            var request = Q.deepClone(grid.getView().params) as Serenity.ListRequest;
            request.Take = 0;
            request.Skip = 0;

            var sortBy = grid.getView().sortBy;
            if (sortBy != null)
                request.Sort = sortBy;

            request.IncludeColumns = [];
            for (var column of grid.getGrid().getColumns())
                request.IncludeColumns.push(column.identifier || column.field);

            options = options || {};

            Q.serviceCall({
                url: grid.getView().url,
                request: request,
                onSuccess: response => {
                    let doc = new jsPDF('l', 'pt');
                    let srcColumns = grid.getGrid().getColumns();
                    let columnStyles: { [dataKey: string]: jsPDF.AutoTableStyles; } = {};
                    let columns = toAutoTableColumns(srcColumns, columnStyles);
                    var keys = columns.map(x => x.dataKey);
                    let entities = (<Serenity.ListResponse<any>>response).Entities || [];
                    let data = toAutoTableData(entities, keys, srcColumns);

                    doc.setFontSize(options.titleFontSize || 10);
                    doc.setFontStyle('bold');
                    let reportTitle = options.title || grid.get_title() || "Report";

                    doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2,
                        options.titleTop || 25, { halign: 'center' });

                    var totalPagesExp = "{{T}}";

                    let pageNumbers = options.pageNumbers == null || options.pageNumbers;
                    var autoOptions = $.extend({
                        margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                        startY: 60,
                        styles: {
                            fontSize: 8,
                            overflow: 'linebreak',
                            cellPadding: 2,
                            valign: 'middle'
                        },
                        columnStyles: columnStyles
                    }, options.autoTableOptions);

                    if (pageNumbers) {
                        var footer = function (data) {
                            var str = data.pageCount;
                            // Total page number plugin only available in jspdf v1.0+
                            if (typeof doc.putTotalPages === 'function') {
                                str = str + " / " + totalPagesExp;
                            }
                            doc.autoTableText(str, doc.internal.pageSize.width / 2,
                                doc.internal.pageSize.height - autoOptions.margin.bottom - 5, {
                                    halign: 'center'
                                });
                        };
                        autoOptions.afterPageContent = footer;
                    }

                    doc.autoTable(columns, data, autoOptions);

                    if (typeof doc.putTotalPages === 'function') {
                        doc.putTotalPages(totalPagesExp);
                    }

                    var fileName = options.title || "{0}_{1}.pdf";
                    fileName = ss.formatString(fileName,
                        grid.get_title() || "report",
                        Q.formatDate(new Date(), "yyyyMMdd_hhmm"));

                    doc.save(fileName);

                }
            }); 
        }


        export function createToolButton<TItem>(grid: Serenity.DataGrid<TItem, any>,
            onSubmit: () => boolean, options: PdfExportOptions) {

            options = options || {};

            return <Serenity.ToolButton>{
                title: options.buttonTitle || 'PDF',
                cssClass: 'export-pdf-button',
                onClick: () => exportToPdf(grid, onSubmit, options)
            };
        }
    }
}