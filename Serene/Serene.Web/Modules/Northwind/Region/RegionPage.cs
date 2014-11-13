
namespace Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Region"), Route("{action=index}")]
    public class RegionController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Region/RegionIndex.cshtml");
        }
    }
}