

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingAttendeeType", typeof(Serene.Meeting.Pages.MeetingAttendeeTypeController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingAttendeeType"), Route("{action=index}")]
    public class MeetingAttendeeTypeController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAttendeeType/MeetingAttendeeTypeIndex.cshtml");
        }
    }
}