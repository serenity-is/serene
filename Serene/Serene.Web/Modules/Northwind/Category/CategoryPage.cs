
namespace Serene.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Category"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Category.CategoryIndex);
        }
    }
}
