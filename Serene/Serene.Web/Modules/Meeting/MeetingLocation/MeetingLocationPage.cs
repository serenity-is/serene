

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingLocation", typeof(Serene.Meeting.Pages.MeetingLocationController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingLocation"), Route("{action=index}")]
    public class MeetingLocationController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml");
        }
    }
}