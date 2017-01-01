
namespace Serene.Administration.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Administration/Translation/" + R.ActionIndex)]
    [PageAuthorize(PermissionKeys.Translation)]
    public class TranslationController : Controller
    {  
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Translation.TranslationIndex);
        }
    }
}
