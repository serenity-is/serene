
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Collections.Generic;

    public abstract class ExcelExportHelper
    {
        public static ToolButton CreateToolButton(IDataGrid grid, string service, Func<bool> onViewSubmit,
            string title = null)
        {
            return new ToolButton
            {
                Title = title ?? "Excel",
                CssClass = "export-xlsx-button",
                OnClick = delegate
                {
                    if (!onViewSubmit())
                        return;

                    var request = Q.DeepClone(((ListRequest)grid.GetView().Params));
                    request.Take = 0;
                    request.Skip = 0;

                    var sortBy = grid.GetView().SortBy;
                    if (sortBy != null)
                        request.Sort = sortBy;

                    request.IncludeColumns = new List<string>();
                    foreach (var column in grid.GetGrid().GetColumns())
                        request.IncludeColumns.Add(column.Identifier ?? column.Field);

                    Q.Externals.PostToService(new PostToServiceOptions
                    {
                        Service = service,
                        Request = request,
                        Target = "_blank"
                    });
                }
            };
        }
    }
}