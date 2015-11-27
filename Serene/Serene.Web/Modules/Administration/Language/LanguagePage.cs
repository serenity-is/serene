
namespace Serene.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Language"), Route("{action=index}")]
    public class LanguageController : Controller
    {
        [PageAuthorize(Administration.PermissionKeys.Translation)]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Language.LanguageIndex);
        }
    }
}