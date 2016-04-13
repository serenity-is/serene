namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class GridToPdf extends Northwind.OrderGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons()
        {
            let buttons = super.getButtons();

            buttons.push({
                title: 'PDF',
                cssClass: 'export-pdf-button',
                onClick: () =>
                {
                    var doc = new jsPDF('l', 'pt');
                    var srcColumns = this.getColumns();
                    var columnStyles: { [dataKey: string]: jsPDF.AutoTableStyles; } = {};
                    var columns = srcColumns.map(src => {
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

                    var keys = columns.map(x => x.dataKey);
                    let el = document.createElement('span');

                    let row = 0;
                    let data = this.get_view().getItems().map(item => {
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

                    doc.setFontSize(10);
                    doc.setFontStyle('bold');
                    doc.autoTableText('Some long title for our grid', doc.internal.pageSize.width / 2, 25, { halign: 'center' });

                    doc.autoTable(columns, data, {
                        margin: 25,
                        startY: 60,
                        styles: {
                            fontSize: 8,
                            overflow: 'linebreak',
                            cellPadding: 2,
                            valign: 'middle'
                        },
                        columnStyles: columnStyles
                    });

                    doc.save("test.pdf");
                }
            });

            return buttons;
        }
    }
}