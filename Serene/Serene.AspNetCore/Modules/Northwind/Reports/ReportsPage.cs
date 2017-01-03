
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Reports")]
    [PageAuthorize(PermissionKeys.General)]
    public class ReportsController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage, 
                new ReportRepository().GetReportTree("Northwind"));
        }
    }
}
