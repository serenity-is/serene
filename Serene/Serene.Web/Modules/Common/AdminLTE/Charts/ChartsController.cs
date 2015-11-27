
namespace Serene.Common.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/Charts"), Route("{action=index}")]
    public class ChartsController : Controller
    {
        [Route("ChartJS")]
        public ActionResult ChartJS()
        {
            return View("~/Modules/Common/AdminLTE/Charts/ChartJS.cshtml");
        }

        [Route("Flot")]
        public ActionResult Flot()
        {
            return View("~/Modules/Common/AdminLTE/Charts/Flot.cshtml");
        }

        [Route("InlineCharts")]
        public ActionResult InlineCharts()
        {
            return View("~/Modules/Common/AdminLTE/Charts/InlineCharts.cshtml");
        }

        [Route("Morris")]
        public ActionResult Morris()
        {
            return View("~/Modules/Common/AdminLTE/Charts/Morris.cshtml");
        }
    }
}