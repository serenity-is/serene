
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

        [Route("Charts/ChartJS")]
        public ActionResult ChartsChartJS()
        {
            return View("~/Modules/Common/AdminLTE/Views/ChartsChartJS.cshtml");
        }

        [Route("Charts/Flot")]
        public ActionResult ChartsFlot()
        {
            return View("~/Modules/Common/AdminLTE/Views/ChartsFlot.cshtml");
        }

        [Route("Charts/InlineCharts")]
        public ActionResult ChartsInlineCharts()
        {
            return View("~/Modules/Common/AdminLTE/Views/ChartsInlineCharts.cshtml");
        }

        [Route("Charts/Morris")]
        public ActionResult ChartsMorris()
        {
            return View("~/Modules/Common/AdminLTE/Views/ChartsMorris.cshtml");
        }
    }
}