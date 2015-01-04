

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/Meeting", typeof(Serene.Meeting.Pages.MeetingController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/Meeting"), Route("{action=index}")]
    public class MeetingController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meeting/MeetingIndex.cshtml");
        }
    }
}