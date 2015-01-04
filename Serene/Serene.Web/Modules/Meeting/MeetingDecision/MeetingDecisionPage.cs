

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingDecision", typeof(Serene.Meeting.Pages.MeetingDecisionController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingDecision"), Route("{action=index}")]
    public class MeetingDecisionController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingDecision/MeetingDecisionIndex.cshtml");
        }
    }
}