

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/CustomerCustomerDemo", url: "~/Northwind/CustomerCustomerDemo", permission: "Northwind")]

namespace Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/CustomerCustomerDemo"), Route("{action=index}")]
    public class CustomerCustomerDemoController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.CustomerCustomerDemo.CustomerCustomerDemoIndex);
        }
    }
}