
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Northwind/Reports/" + R.ActionIndex)]
    [PageAuthorize(PermissionKeys.General)]
    public class ReportsController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage, 
                new ReportRepository().GetReportTree("Northwind"));
        }
    }
}
