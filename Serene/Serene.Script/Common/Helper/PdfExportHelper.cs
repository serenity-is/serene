
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    public static class PdfExportHelper
    {
        public static ToolButton CreateToolButton(PdfExportOptions options)
        {
            return null;
        }

        public static void ExportToPdf(PdfExportOptions options)
        {
        }
    }

    [Imported, Serializable]
    public class PdfExportOptions
    {
        public IDataGrid Grid { get; set; }
        public Func<bool> OnViewSubmit { get; set; }
        public string ButtonTitle { get; set; }
        public string Title { get; set; }
        public double? TitleTop { get; set; }
        public double? TitleFontSize { get; set; }
        public string FileName { get; set; }
        public bool? PageNumbers { get; set; }
        public JsDictionary<string, string> ColumnTitles { get; set; }
        public AutoTableOptions TableOptions { get; set; }
    }
}
