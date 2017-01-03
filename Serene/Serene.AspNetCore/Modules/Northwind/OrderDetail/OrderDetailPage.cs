
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrderDetailRow))]
    public class OrderDetailController : Controller
    {
        [Route("Northwind/OrderDetail")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.OrderDetail.OrderDetailIndex);
        }
    }
}
