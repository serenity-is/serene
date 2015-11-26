
namespace Serene.Common.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE"), Route("{action=index}")]
    public class AdminLTEController : Controller
    {
        public ActionResult DashboardV2()
        {
            return View("~/Modules/Common/AdminLTE/Views/DashboardV2.cshtml");
        }

        public ActionResult Widgets()
        {
            return View("~/Modules/Common/AdminLTE/Views/Widgets.cshtml");
        }
    }
}