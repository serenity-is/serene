
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/OrderDetail")]
    [PageAuthorize(typeof(Entities.OrderDetailRow))]
    public class OrderDetailController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.OrderDetail.OrderDetailIndex);
        }
    }
}
