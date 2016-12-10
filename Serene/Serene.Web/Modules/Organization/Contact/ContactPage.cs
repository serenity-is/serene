
namespace Serene.Organization.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Organization/Contact"), Route("{action=index}")]
    public class ContactController : Controller
    {
        [PageAuthorize(PermissionKeys.Contacts.Management)]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Contact/ContactIndex.cshtml");
        }
    }
}