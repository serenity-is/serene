
namespace Serene.Organization.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ContactRow))]
    public class ContactController : Controller
    {
        [Route("Organization/Contact")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Contact/ContactIndex.cshtml");
        }
    }
}
