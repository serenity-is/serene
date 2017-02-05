
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Region"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegionRow))]
    public class RegionController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Region.RegionIndex);
        }
    }
}
