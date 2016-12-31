

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/OrderDetail", url: "~/Northwind/OrderDetail", permission: "Northwind")]

namespace Serene.Northwind.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Northwind/OrderDetail/{action=index}")]
    [PageAuthorize(typeof(Entities.OrderDetailRow))]
    public class OrderDetailController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.OrderDetail.OrderDetailIndex);
        }
    }
}
