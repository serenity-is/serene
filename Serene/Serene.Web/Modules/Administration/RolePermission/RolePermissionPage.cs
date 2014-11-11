
namespace Serene.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/RolePermission"), Route("{action=index}")]
    public class RolePermissionController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/RolePermission/RolePermissionIndex.cshtml");
        }
    }
}