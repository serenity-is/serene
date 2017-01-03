
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Customer")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Customer.CustomerIndex);
        }
    }
}
