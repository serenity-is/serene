
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Northwind/Territory/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.TerritoryRow))]
    public class TerritoryController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Territory.TerritoryIndex);
        }
    }
}
