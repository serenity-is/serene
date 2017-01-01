
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Northwind/Category/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Category.CategoryIndex);
        }
    }
}
