
namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LanguageRow))]
    public class LanguageController : Controller
    {
        [Route("Administration/Language")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Language.LanguageIndex);
        }
    }
}