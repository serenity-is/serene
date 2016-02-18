
namespace Serene.BasicSamples.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("BasicSamples"), Route("{action=index}")]
    public class BasicSamplesController : Controller
    {
        public ActionResult ChartInDialog()
        {
            return View(MVC.Views.BasicSamples.ChartInDialog);
        }
    }
}