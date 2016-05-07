
namespace Serene.Common
{
    using Serenity;
    using System;

    public abstract class ReportHelper
    {
        public static ToolButton CreateToolButton(ReportButtonOptions options)
        {
            return new ToolButton
            {
                Title = options.Title ?? "Report",
                CssClass = options.CssClass ?? "print-button",
                Icon = options.Icon,
                OnClick = delegate
                {
                    Q.Externals.PostToUrl(new PostToUrlOptions
                    {
                        Url = "~/Report/" + (options.Download ? "Download" : "Render"),
                        Params = new
                        {
                            key = options.ReportKey,
                            ext = options.Extension ?? "pdf",
                            opt = options.GetParams == null ? "" : Q.ToJson(options.GetParams())
                        },
                        Target = options.Target ?? "_blank"
                    });
                }
            };
        }
    }

    public class ReportButtonOptions
    {
        public bool Download { get; set; }
        public string Title { get; set; }
        public string CssClass { get; set; }
        public string Icon { get; set; }
        public string ReportKey { get; set; }
        public string Extension { get; set; }
        public Func<object> GetParams { get; set; }
        public string Target { get; set; }
    }
}