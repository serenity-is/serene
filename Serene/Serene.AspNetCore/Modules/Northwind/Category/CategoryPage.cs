
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        [Route("Northwind/Category")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Category.CategoryIndex);
        }
    }
}
