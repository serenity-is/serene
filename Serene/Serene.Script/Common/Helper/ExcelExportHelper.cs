
namespace Serene.Common
{
    using Serenity;
    using System;
    using System.Runtime.CompilerServices;

    [Imported]
    public static class ExcelExportHelper
    {
        public static ToolButton CreateToolButton(ExcelExportOptions options)
        {
            return null;
        }
    }

    [Imported, Serializable]
    public class ExcelExportOptions
    {
        public Serenity.IDataGrid Grid { get; set; }
        public string Service { get; set; }
        public Func<bool> OnViewSubmit { get; set; }
        public string Title { get; set; }
    }

}