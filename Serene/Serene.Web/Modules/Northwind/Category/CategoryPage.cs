
namespace Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Category"), Route("{action=index}")]
    public class CategoryController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Category.CategoryIndex);
        }
    }
}