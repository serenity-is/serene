namespace Serene.Common {

    export interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
    }

    export namespace ExcelExportHelper {

        export function createToolButton(options: ExcelExportOptions): Serenity.ToolButton {

            return {
                title: Q.coalesce(options.title, 'Excel'),
                cssClass: 'export-xlsx-button',
                onClick: function () {
                    if (!options.onViewSubmit()) {
                        return;
                    }

                    let grid = options.grid;

                    var request = Q.deepClone(grid.getView().params) as Serenity.ListRequest;
                    request.Take = 0;
                    request.Skip = 0;
                    var sortBy = grid.getView().sortBy;
                    if (sortBy) {
                        request.Sort = sortBy;
                    }

                    request.IncludeColumns = [];
                    let columns = grid.getGrid().getColumns();
                    for (let column of columns) {
                        request.IncludeColumns.push(column.id || column.field);
                    }
                    Q.postToService({ service: options.service, request: request, target: '_blank' });
                }
            };
        }
    }
}