
namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/Meeting"), Route("{action=index}")]
    public class MeetingController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meeting/MeetingIndex.cshtml");
        }
    }
}