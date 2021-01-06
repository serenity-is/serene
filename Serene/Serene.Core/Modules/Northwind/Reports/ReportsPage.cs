using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using Serenity.Reporting;
using Serenity.Services;
using Serenity;
using System;

namespace Serene.Northwind.Pages
{
    [PageAuthorize(PermissionKeys.General)]
    public class ReportsController : Controller
    {        protected IReportRegistry ReportRegistry { get; }
        protected IRequestContext Context { get; }
        protected ITextLocalizer Localizer { get; }

        public ReportsController(IReportRegistry reportRegistry, IRequestContext context, ITextLocalizer localizer)
        {
            ReportRegistry = reportRegistry ?? throw new ArgumentNullException(nameof(reportRegistry));
            Context = context ?? throw new ArgumentNullException(nameof(context));
            Localizer = localizer ?? throw new ArgumentNullException(nameof(localizer));
        }

        [Route("Northwind/Reports")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage, 
                new ReportRepository(Context, ReportRegistry).GetReportTree("Northwind"));
        }
    }
}
