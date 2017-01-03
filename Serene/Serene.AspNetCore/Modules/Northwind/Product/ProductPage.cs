
namespace Serene.Northwind.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Northwind/Product")]
    [PageAuthorize(typeof(Entities.ProductRow))]
    public class ProductController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Product.ProductIndex);
        }
    }
}
