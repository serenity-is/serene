namespace Serene
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Reporting;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Net.Mime;
    using System.Web.Mvc;

    [RoutePrefix("Report"), Route("{action=index}")]
    public class ReportController : Controller
    {
        private static Dictionary<ReportExportType, string> ExportExtensions = new Dictionary<ReportExportType, string>
        {
            { ReportExportType.Doc, "docx" },
            { ReportExportType.Docx, "docx" },
            { ReportExportType.Pdf, "pdf" },
            { ReportExportType.Xls, "xls" },
            { ReportExportType.Xlsx, "xlsx" }
        };

        public ActionResult CachedHtml(string g)
        {
            var content = LocalCache.TryGet<string>(g);

            if (content == null)
                return new HttpNotFoundResult();

            return new ContentResult { Content = content, ContentType = "text/html" };
        }

        [Authorize, JsonFilter]
        public ActionResult Execute(ReportExecuteRequest request)
        {
            request.CheckNotNull();

            if (request.ReportKey.IsEmptyOrNull())
                throw new ArgumentNullException("reportKey");

            var reportInfo = ReportRegistry.GetReport(request.ReportKey);
            if (reportInfo == null)
                throw new ArgumentOutOfRangeException("reportKey");

            var report = (IReport)JsonConvert.DeserializeObject((request.Parameters ?? new object()).ToJson(), 
                reportInfo.Type, JsonSettings.Tolerant);

            var exportType = request.ExportType ?? ReportExportType.Pdf;
            byte[] rendered = new ReportRepository().Render(report, exportType);

            string fileDownloadName;
            var customFileName = report as ICustomFileName;
            if (customFileName != null)
                fileDownloadName = customFileName.GetFileName();
            else
                fileDownloadName = (reportInfo.Title ?? reportInfo.Key) + "_" +
                    DateTime.Now.ToString("yyyyMMdd_HHss");

            fileDownloadName += "." + ExportExtensions[exportType];

            if (request.ExportType == null)
            {
                var cd = new ContentDisposition
                {
                    Inline = true,
                    FileName = fileDownloadName
                };

                Response.AddHeader("Content-Disposition", cd.ToString());
                return File(rendered, "application/pdf");
            }
            else
            {
                return new FileContentResult(rendered, "application/octet-stream")
                {
                    FileDownloadName = fileDownloadName
                };
            }
        }
    }
}