
namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingType"), Route("{action=index}")]
    public class MeetingTypeController : Controller
    {
        [PageAuthorize(PermissionKeys.Management)]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml");
        }
    }
}