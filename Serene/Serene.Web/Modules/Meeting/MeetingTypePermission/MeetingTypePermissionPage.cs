

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingTypePermission", typeof(Serene.Meeting.Pages.MeetingTypePermissionController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingTypePermission"), Route("{action=index}")]
    public class MeetingTypePermissionController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingTypePermission/MeetingTypePermissionIndex.cshtml");
        }
    }
}