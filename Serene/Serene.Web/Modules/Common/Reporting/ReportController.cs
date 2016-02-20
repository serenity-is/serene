using Newtonsoft.Json;
using Serenity;
using Serenity.Reporting;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Net.Mime;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Serene
{
    [RoutePrefix("Report"), Route("{action=index}")]
    public class ReportController : Controller
    {
        public ActionResult Render(string key, string opt, string ext, int? print = 0)
        {
            return Execute(key, opt, ext, download: false, printing: print != 0);
        }

        public ActionResult Download(string key, string opt, string ext)
        {
            return Execute(key, opt, ext, download: true, printing: false);
        }

        private ActionResult Execute(string key, string opt, string ext, bool download, bool printing)
        {
            if (key.IsEmptyOrNull())
                throw new ArgumentNullException("reportKey");

            var reportInfo = ReportRegistry.GetReport(key);
            if (reportInfo == null)
                throw new ArgumentOutOfRangeException("reportKey");

            if (reportInfo.Permission != null)
            {
                if (reportInfo.Permission == "")
                    Authorization.ValidateLoggedIn();
                else
                    Authorization.ValidatePermission(reportInfo.Permission);
            }

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

            var cd = new ContentDisposition
            {
                Inline = true,
                FileName = fileDownloadName
            };

            Response.AddHeader("Content-Disposition", cd.ToString());
            return File(renderedBytes, UploadHelper.GetMimeType(fileDownloadName));
        }

        private byte[] RenderAsPdf(IReport report, string key, string opt)
        {
            var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");

            var renderUrl = UriHelper.Combine(externalUrl, "Report/Render?" +
                "key=" + Uri.EscapeDataString(key));

            if (!string.IsNullOrEmpty(opt))
                renderUrl += "&opt=" + Uri.EscapeDataString(opt);

            renderUrl += "&print=1";

            var converter = new HtmlToPdfConverter();
            converter.Url = renderUrl;
            var formsCookie = Request.Cookies[FormsAuthentication.FormsCookieName];
            if (formsCookie != null)
                converter.Cookies[FormsAuthentication.FormsCookieName] = formsCookie.Value;

            var icustomize = report as ICustomizeHtmlToPdf;
            if (icustomize != null)
                icustomize.Customize(converter);

            return converter.Execute();
        }

        private ActionResult RenderAsHtml(IReport report, bool download, bool printing,
            ref byte[] renderedBytes)
        {
            var designAttr = report.GetType().GetAttribute<ReportDesignAttribute>();

            if (designAttr == null)
                throw new Exception(String.Format("Report design attribute for type '{0}' is not found!",
                    report.GetType().FullName));

            var data = report.GetData();
            var viewData = download ? new ViewDataDictionary(data) : ViewData;

            var iadditional = report as IReportWithAdditionalData;
            if (iadditional == null)
                viewData["AdditionalData"] = new Dictionary<string, object>();
            else
                viewData["AdditionalData"] = iadditional.GetAdditionalData();

            viewData["Printing"] = printing;

            if (!download)
                return View(viewName: designAttr.Design, model: data);

            var html = TemplateHelper.RenderViewToString(designAttr.Design, viewData);
            renderedBytes = Encoding.UTF8.GetBytes(html);
            return null;
        }
    }
}