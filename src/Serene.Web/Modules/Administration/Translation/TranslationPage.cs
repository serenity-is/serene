using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene.Administration.Pages
{
    [PageAuthorize(PermissionKeys.Translation)]
    public class TranslationController : Controller
    {
        [Route("Administration/Translation")]
        public ActionResult Index()
        {
            return this.GridPage("@/Administration/Translation/TranslationPage",
                Texts.Db.Administration.Translation.EntityPlural.Key);
        }
    }
}