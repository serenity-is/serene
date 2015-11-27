
namespace Serene.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/Charts"), Route("{action=index}")]
    public class ChartsController : Controller
    {
        public ActionResult ChartJS()
        {
            return View(MVC.Views.AdminLTE.Charts.ChartJS);
        }

        public ActionResult Flot()
        {
            return View(MVC.Views.AdminLTE.Charts.Flot);
        }

        public ActionResult InlineCharts()
        {
            return View(MVC.Views.AdminLTE.Charts.InlineCharts);
        }

        public ActionResult Morris()
        {
            return View(MVC.Views.AdminLTE.Charts.Morris);
        }
    }
}