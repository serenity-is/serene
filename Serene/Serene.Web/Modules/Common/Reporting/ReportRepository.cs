namespace Serene
{
    using Serenity;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.IO;
    using System.Web.Hosting;
    using System.Web.Mvc;

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

        private string LocateReportDesign(IReport report)
        {
            var reportKey = ReportRegistry.GetReportKey(report.GetType());
            var reportFile = reportKey.Replace('.', '/') + ".Report.cshtml";
            var reportUrl = "~/Modules/" + reportFile;
            var reportPath = HostingEnvironment.MapPath(reportUrl);
            if (!File.Exists(reportPath))
                throw new FileNotFoundException(String.Format("Report design for type '{0}' is not found at location '{1}'!",
                    report.GetType().FullName, reportUrl));

            return reportUrl;
        }

        private IDictionary<string, object> GetAdditionalData(IReport report)
        {
            var iadditional = report as IReportWithAdditionalData;
            if (iadditional == null)
                return new Dictionary<string, object>();

            return iadditional.GetAdditionalData();
        }

        public byte[] Render(IReport report, ReportExportType exportType)
        {
            if (report is IDataOnlyReport)
            {
                if (exportType != ReportExportType.Xlsx)
                    throw new ArgumentOutOfRangeException("exportType");

                return Render((IDataOnlyReport)report);
            }

            var designPath = LocateReportDesign(report);
            var data = report.GetData();
            var viewData = new ViewDataDictionary(data);
            var html = TemplateHelper.RenderViewToString(designPath, viewData);
            var guid = Guid.NewGuid().ToString("N");
            LocalCache.Add(guid, html, TimeSpan.FromMinutes(10));

            var converter = new HtmlToPdfConverter();
            converter.Url = "~/Report/CachedHtml?g=" + guid;
            return converter.Execute();
        }
    }
}