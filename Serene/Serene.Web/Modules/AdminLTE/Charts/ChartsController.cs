
namespace Serene.Common.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/Charts"), Route("{action=index}")]
    public class ChartsController : Controller
    {
        public ActionResult ChartJS()
        {
            return View("~/Modules/AdminLTE/Charts/ChartJS.cshtml");
        }

        public ActionResult Flot()
        {
            return View("~/Modules/AdminLTE/Charts/Flot.cshtml");
        }

        public ActionResult InlineCharts()
        {
            return View("~/Modules/AdminLTE/Charts/InlineCharts.cshtml");
        }

        public ActionResult Morris()
        {
            return View("~/Modules/AdminLTE/Charts/Morris.cshtml");
        }
    }
}