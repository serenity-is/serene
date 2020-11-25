using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene.Northwind.Pages
{
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
