
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Northwind/Region/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.RegionRow))]
    public class RegionController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Region.RegionIndex);
        }
    }
}
