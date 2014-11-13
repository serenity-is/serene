
namespace Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Territory"), Route("{action=index}")]
    public class TerritoryController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Territory/TerritoryIndex.cshtml");
        }
    }
}