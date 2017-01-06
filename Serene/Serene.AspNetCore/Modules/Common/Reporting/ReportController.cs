using Newtonsoft.Json;
using Serenity;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Web.Hosting;
using System.Reflection;
#if !COREFX
using System.Net.Mime;
#endif
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace Serene
{
    [Route("Report/[action]")]
    public class ReportController : Controller
    {
        public ActionResult Render(string key, string opt, string ext, int? print = 0)
        {
            return Execute(key, opt, ext, download: false, printing: print != 0);
        }

        public ActionResult Download(string key, string opt, string ext)
        {
            return Execute(key, opt, ext, download: true, printing: true);
        }

        private ActionResult Execute(string key, string opt, string ext, bool download, bool printing)
        {
            if (key.IsEmptyOrNull())
                throw new ArgumentNullException("reportKey");

            var reportInfo = ReportRegistry.GetReport(key);
            if (reportInfo == null)
                throw new ArgumentOutOfRangeException("reportKey");

            if (reportInfo.Permission != null)
                Authorization.ValidatePermission(reportInfo.Permission);

            var report = (IReport)JsonConvert.DeserializeObject(opt.TrimToNull() ?? "{}",
                reportInfo.Type, JsonSettings.Tolerant);

            byte[] renderedBytes = null;

            if (report is IDataOnlyReport)
            {
                ext = "xlsx";
                renderedBytes = new ReportRepository().Render((IDataOnlyReport)report);
            }
            else
            {
                ext = (ext ?? "html").ToLowerInvariant();

                if (ext == "htm" || ext == "html")
                {
                    var result = RenderAsHtml(report, download, printing, ref renderedBytes);
                    if (!download)
                        return result;
                }
                else if (ext == "pdf")
                {
                    renderedBytes = RenderAsPdf(report, key, opt);
                }
                else
                    throw new ArgumentOutOfRangeException("ext");
            }

            return PrepareFileResult(report, ext, download, renderedBytes, reportInfo);
        }

        private ActionResult PrepareFileResult(IReport report, string ext, bool download,
            byte[] renderedBytes, ReportRegistry.Report reportInfo)
        {
            string fileDownloadName;
            var customFileName = report as ICustomFileName;
            if (customFileName != null)
                fileDownloadName = customFileName.GetFileName();
            else
                fileDownloadName = (reportInfo.Title ?? reportInfo.Key) + "_" +
                    DateTime.Now.ToString("yyyyMMdd_HHss");

            fileDownloadName += "." + ext;

            if (download)
            {
                return new FileContentResult(renderedBytes, "application/octet-stream")
                {
                    FileDownloadName = fileDownloadName
                };
            }

            Response.Headers["Content-Disposition"] = "inline;filename=" + System.Net.WebUtility.UrlEncode(fileDownloadName);
            return File(renderedBytes, UploadHelper.GetMimeType(fileDownloadName));
        }

        private byte[] RenderAsPdf(IReport report, string key, string opt)
        {
            var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                Request.GetBaseUri().ToString();

            var renderUrl = UriHelper.Combine(externalUrl, "Report/Render?" +
                "key=" + Uri.EscapeDataString(key));

            if (!string.IsNullOrEmpty(opt))
                renderUrl += "&opt=" + Uri.EscapeDataString(opt);

            renderUrl += "&print=1";

            var converter = new HtmlToPdfConverter();
            var wkhtmlPath = HostingEnvironment.MapPath("~/bin/wkhtmltopdf.exe");
            if (System.IO.File.Exists(wkhtmlPath))
                converter.UtilityExePath = wkhtmlPath;
            
            converter.Url = renderUrl;
            var formsCookieName = ".AspNetAuth";
            var formsCookie = Request.Cookies[formsCookieName];
            if (formsCookie != null)
                converter.Cookies[formsCookieName] = formsCookie;

            var icustomize = report as ICustomizeHtmlToPdf;
            if (icustomize != null)
                icustomize.Customize(converter);

            return converter.Execute();
        }

        private ActionResult RenderAsHtml(IReport report, bool download, bool printing,
            ref byte[] renderedBytes)
        {
            var designAttr = report.GetType().GetCustomAttribute<ReportDesignAttribute>();

            if (designAttr == null)
                throw new Exception(String.Format("Report design attribute for type '{0}' is not found!",
                    report.GetType().FullName));

            var data = report.GetData();
            var viewData = download ? new ViewDataDictionary(this.ViewData) { Model = data } : ViewData;

            var iadditional = report as IReportWithAdditionalData;
            if (iadditional == null)
                viewData["AdditionalData"] = new Dictionary<string, object>();
            else
                viewData["AdditionalData"] = iadditional.GetAdditionalData();

            viewData["Printing"] = printing;

            if (!download)
                return View(viewName: designAttr.Design, model: data);

            var html = TemplateHelper.RenderViewToString(HttpContext.RequestServices, designAttr.Design, viewData);
            renderedBytes = System.Text.Encoding.UTF8.GetBytes(html);
            return null;
        }

        [HttpPost, JsonFilter]
        public ActionResult Retrieve(ReportRetrieveRequest request)
        {
            return this.ExecuteMethod(() => new ReportRepository().Retrieve(request));
        }
    }
}