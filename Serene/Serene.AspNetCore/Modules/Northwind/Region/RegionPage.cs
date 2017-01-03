
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Region")]
    [PageAuthorize(typeof(Entities.RegionRow))]
    public class RegionController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Region.RegionIndex);
        }
    }
}
