namespace Serene
{
    using Serenity.Reporting;
    using System.Collections.Generic;

    public class ReportRepository
    {
        public byte[] Render(IDataOnlyReport report)
        {
            var columns = report.GetColumnList();

            var data = new List<object>();
            foreach (var item in report.GetData())
                data.Add(item);

            return ExcelReportGenerator.GeneratePackageBytes(columns, data);
        }
    }
}