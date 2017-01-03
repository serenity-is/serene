

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/Order", url: "~/Northwind/Order", permission: "Northwind")]

namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Order")]
    [PageAuthorize(typeof(Entities.OrderRow))]
    public class OrderController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Order.OrderIndex);
        }
    }
}
