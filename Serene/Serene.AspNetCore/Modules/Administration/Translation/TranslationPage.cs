
namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Administration/Translation")]
    [PageAuthorize(PermissionKeys.Translation)]
    public class TranslationController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Translation.TranslationIndex);
        }
    }
}
