
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Collections.Generic;

    public abstract class ReportHelper
    {
        public static ToolButton CreateRenderButton(string reportKey, string title = "Report", 
            string cssClass = "print-button",
            string extension = "pdf", Func<object> options = null)
        {
            return new ToolButton
            {
                Title = title,
                CssClass = cssClass,
                OnClick = delegate
                {
                    Q.Externals.PostToUrl(new PostToUrlOptions
                    {
                        Url = "~/Report/Render",
                        Params = new
                        {
                            key = reportKey,
                            ext = extension,
                            opt = options == null ? "" : Q.ToJson(options())
                        },
                        Target = "_blank"
                    });
                }
            };
        }
    }
}