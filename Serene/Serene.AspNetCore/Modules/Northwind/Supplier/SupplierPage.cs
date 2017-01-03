
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Supplier")]
    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Supplier.SupplierIndex);
        }
    }
}
