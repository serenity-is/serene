
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Territory")]
    [PageAuthorize(typeof(Entities.TerritoryRow))]
    public class TerritoryController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Territory.TerritoryIndex);
        }
    }
}
