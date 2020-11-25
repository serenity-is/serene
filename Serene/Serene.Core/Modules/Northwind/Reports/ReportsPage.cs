using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene.Northwind.Pages
{
    [PageAuthorize(PermissionKeys.General)]
    public class ReportsController : Controller
    {
        [Route("Northwind/Reports")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage, 
                new ReportRepository().GetReportTree("Northwind"));
        }
    }
}
