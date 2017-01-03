



namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Shipper")]
    [PageAuthorize(typeof(Entities.ShipperRow))]
    public class ShipperController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Shipper.ShipperIndex);
        }
    }
}
