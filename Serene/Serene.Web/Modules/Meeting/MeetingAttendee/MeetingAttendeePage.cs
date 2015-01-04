

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingAttendee", typeof(Serene.Meeting.Pages.MeetingAttendeeController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingAttendee"), Route("{action=index}")]
    public class MeetingAttendeeController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAttendee/MeetingAttendeeIndex.cshtml");
        }
    }
}