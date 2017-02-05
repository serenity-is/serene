
namespace Serene.Organization.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Organization/Contact"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContactRow))]
    public class ContactController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Contact/ContactIndex.cshtml");
        }
    }
}
