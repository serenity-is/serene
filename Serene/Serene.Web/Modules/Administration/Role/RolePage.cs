namespace Serene.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Role"), Route("{action=index}")]
    public class RoleController : Controller
    {
        [PageAuthorize(Administration.PermissionKeys.Security)]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Role/RoleIndex.cshtml");
        }
    }
}