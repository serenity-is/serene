
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Runtime.CompilerServices;

    [Imported]
    public static class ReportHelper
    {
        public static ToolButton CreateToolButton(ReportButtonOptions options)
        {
            return null;
        }
    }

    [Imported, Serializable]
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