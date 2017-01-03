
namespace Serene.Organization.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Organization/Contact")]
    [PageAuthorize(typeof(Entities.ContactRow))]
    public class ContactController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Contact/ContactIndex.cshtml");
        }
    }
}
