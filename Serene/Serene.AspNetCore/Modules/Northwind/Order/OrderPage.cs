

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/Order", url: "~/Northwind/Order", permission: "Northwind/" + R.ActionIndex)]

namespace Serene.Northwind.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Northwind/Order/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.OrderRow))]
    public class OrderController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Order.OrderIndex);
        }
    }
}
