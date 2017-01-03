

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/OrderDetail", url: "~/Northwind/OrderDetail", permission: "Northwind/" + R.ActionIndex)]

namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/OrderDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderDetailRow))]
    public class OrderDetailController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.OrderDetail.OrderDetailIndex);
        }
    }
}