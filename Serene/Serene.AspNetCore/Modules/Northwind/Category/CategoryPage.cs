
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Category")]
    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Category.CategoryIndex);
        }
    }
}
