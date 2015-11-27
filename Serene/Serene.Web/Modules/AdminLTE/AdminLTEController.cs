
namespace Serene.Common.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE"), Route("{action=index}")]
    public class AdminLTEController : Controller
    {
        public ActionResult DashboardV2()
        {
            return View("~/Modules/AdminLTE/DashboardV2.cshtml");
        }

        public ActionResult Widgets()
        {
            return View("~/Modules/AdminLTE/Widgets.cshtml");
        }
    }
}