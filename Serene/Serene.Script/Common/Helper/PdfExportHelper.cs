
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported]
    public static class PdfExportHelper
    {
        public static ToolButton CreateToolButton(IDataGrid grid, Func<bool> onViewSubmit, 
            string buttonTitle = null, PdfExportOptions options = null)
        {
            return null;
        }

        public static void ExportToPdf(IDataGrid grid, Func<bool> onViewSubmit, 
            PdfExportOptions options = null)
        {
        }
    }

    [Imported, Serializable]
    public class PdfExportOptions
    {
        public string Title { get; set; }
        public double? TitleTop { get; set; }
        public double? TitleFontSize { get; set; }
        public double? FileName { get; set; }
        public bool? PageNumbers { get; set; }
        public JsDictionary<string, string> ColumnTitles { get; set; }
        public AutoTableOptions TableOptions { get; set; }
    }
}