namespace Serene.Common {
    export interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: { [key: string]: string };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
    }

    export namespace PdfExportHelper {

        function toAutoTableColumns(srcColumns: Slick.Column[], columnStyles: { [dataKey: string]: jsPDF.AutoTableStyles; },
                columnTitles: { [key: string]: string }) {
            return srcColumns.map(src => {
                let col: jsPDF.AutoTableColumn = {
                    dataKey: src.id || src.field,
                    title: src.name || ''
                };

                if (columnTitles && columnTitles[col.dataKey] != null)
                    col.title = columnTitles[col.dataKey];

                let style: jsPDF.AutoTableStyles = {};
                if ((src.cssClass || '').indexOf("align-right") >= 0)
                    style.halign = 'right';
                else if ((src.cssClass || '').indexOf("align-center") >= 0)
                    style.halign = 'center';

                columnStyles[col.dataKey] = style;

                return col;
            });
        }

        function toAutoTableData(entities: any[], keys: string[], srcColumns: Slick.Column[] ) {
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
                        if (el.children.length == 1 &&
                            $(el.children[0]).is(":input")) {
                            dst[key] = $(el.children[0]).val();
                        }
                        else if (el.children.length == 1 &&
                            $(el.children).is('.check-box')) {
                            dst[key] = $(el.children).hasClass("checked") ? "X" : ""
                        }
                        else
                            dst[key] = el.textContent || '';
                    }
                }
                row++;
                return dst;
            });
        }

        export function exportToPdf(options: PdfExportOptions): void {

            var g = options.grid;

            if (!options.onViewSubmit())
                return;

            includeAutoTable();

            var request = Q.deepClone(g.view.params) as Serenity.ListRequest;
            request.Take = 0;
            request.Skip = 0;

            var sortBy = g.view.sortBy;
            if (sortBy != null)
                request.Sort = sortBy;

            var gridColumns = g.slickGrid.getColumns();
            gridColumns = gridColumns.filter(x => x.id !== "__select__");

            request.IncludeColumns = [];
            for (var column of gridColumns)
                request.IncludeColumns.push(column.id || column.field);

            Q.serviceCall({
                url: g.view.url,
                request: request,
                onSuccess: response => {
                    let doc = new jsPDF('l', 'pt');
                    let srcColumns = gridColumns;
                    let columnStyles: { [dataKey: string]: jsPDF.AutoTableStyles; } = {};
                    let columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                    var keys = columns.map(x => x.dataKey);
                    let entities = (<Serenity.ListResponse<any>>response).Entities || [];
                    let data = toAutoTableData(entities, keys, srcColumns);

                    doc.setFontSize(options.titleFontSize || 10);
                    doc.setFontStyle('bold');
                    let reportTitle = options.reportTitle || g.getTitle() || "Report";

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
                    }, options.tableOptions);

                    if (pageNumbers) {
                        var footer = function (data) {
                            var str = data.pageCount;
                            // Total page number plugin only available in jspdf v1.0+
                            if (typeof doc.putTotalPages === 'function') {
                                str = str + " / " + totalPagesExp;
                            }
                            doc.autoTableText(str, doc.internal.pageSize.width / 2,
                                doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                        };
                        autoOptions.afterPageContent = footer;
                    }

                    doc.autoTable(columns, data, autoOptions);

                    if (typeof doc.putTotalPages === 'function') {
                        doc.putTotalPages(totalPagesExp);
                    }

                    var fileName = options.reportTitle || "{0}_{1}.pdf";
                    fileName = Q.format(fileName, g.getTitle() || "report",
                        Q.formatDate(new Date(), "yyyyMMdd_HHmm"));

                    if (options.output === undefined || options.output == "file")
                        doc.save(fileName);

                    if (options.output == "window-print" || options.output == "newwindow-print")
                        doc.autoPrint();
                    if (options.output == "newwindow" || options.output == "newwindow-print")
                        doc.output('dataurlnewwindow');
                    if (options.output == "window" || options.output == "window-print")
                        doc.output('dataurl');
                }
            }); 
        }

        export function createToolButton(options: PdfExportOptions) {

            return <Serenity.ToolButton>{
                title: options.title || '',
                hint: options.hint || 'PDF',
                cssClass: 'export-pdf-button',
                onClick: () => exportToPdf(options),
                separator: options.separator
            };
        }

        function includeJsPDF() {
            if (typeof jsPDF !== "undefined")
                return;

            var script = $("jsPDFScript");
            if (script.length > 0)
                return;

            $("<script/>")
                .attr("type", "text/javascript")
                .attr("id", "jsPDFScript")
                .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                .appendTo(document.head);
        }

        function includeAutoTable() {
            includeJsPDF();

            if (typeof jsPDF === "undefined" ||
                typeof (jsPDF as any).API == "undefined" ||
                typeof (jsPDF as any).API.autoTable !== "undefined")
                return;

            var script = $("jsPDFAutoTableScript");
            if (script.length > 0)
                return;

            $("<script/>")
                .attr("type", "text/javascript")
                .attr("id", "jsPDFAutoTableScript")
                .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                .appendTo(document.head);
        }
    }
}
