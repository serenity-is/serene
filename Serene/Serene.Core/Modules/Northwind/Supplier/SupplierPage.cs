using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene.Northwind.Pages
{
    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        [Route("Northwind/Supplier")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Supplier.SupplierIndex);
        }
    }
}
