namespace Serene
{
    using Serenity.Reporting;
    using System.Collections;
    using System.Collections.Generic;

    public class ReportRepository
    {
        public byte[] Render(IDataOnlyReport report)
        {
            var columns = report.GetColumnList();

            var data = new List<object>();
            var input = report.GetData();
            var list = (input as IEnumerable) ?? new List<object> { input };
            foreach (var item in list)
                data.Add(item);

            return ExcelReportGenerator.GeneratePackageBytes(columns, data);
        }
    }
}