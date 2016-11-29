
namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingLocation"), Route("{action=index}")]
    public class MeetingLocationController : Controller
    {
        [PageAuthorize(PermissionKeys.Management)]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml");
        }
    }
}