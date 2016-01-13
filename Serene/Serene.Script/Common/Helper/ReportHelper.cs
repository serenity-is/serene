
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Collections.Generic;

    public abstract class ReportHelper
    {
        public static ToolButton CreateToolButton(string reportKey, string title = "Report", string exportType = "pdf")
        {
            return new ToolButton
            {
                Title = title,
                CssClass = "print-button",
                OnClick = delegate
                {
                    Q.Externals.PostToService(new PostToServiceOptions
                    {
                        Url = "~/Report/Execute",
                        Request = new
                        {
                            ReportKey = reportKey,
                            ExportType = "pdf"
                        },
                        Target = "_blank"
                    });
                }
            };
        }
    }
}