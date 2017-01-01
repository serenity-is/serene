
namespace Serene.Organization.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Organization/Contact/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.ContactRow))]
    public class ContactController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Contact/ContactIndex.cshtml");
        }
    }
}
