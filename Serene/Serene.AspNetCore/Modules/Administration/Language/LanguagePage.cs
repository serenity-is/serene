
namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Administration/Language")]
    [PageAuthorize(typeof(Entities.LanguageRow))]
    public class LanguageController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Language.LanguageIndex);
        }
    }
}
