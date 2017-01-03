
namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Translation"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.Translation)]
    public class TranslationController : Controller
    {  
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Translation.TranslationIndex);
        }
    }
}