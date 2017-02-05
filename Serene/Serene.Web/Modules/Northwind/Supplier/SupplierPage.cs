
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Supplier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Supplier.SupplierIndex);
        }
    }
}
