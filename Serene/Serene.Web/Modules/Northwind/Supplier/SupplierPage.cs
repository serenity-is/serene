
namespace Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Supplier"), Route("{action=index}")]
    public class SupplierController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Supplier/SupplierIndex.cshtml");
        }
    }
}