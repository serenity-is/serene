

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingDecisionRelevant", typeof(Serene.Meeting.Pages.MeetingDecisionRelevantController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingDecisionRelevant"), Route("{action=index}")]
    public class MeetingDecisionRelevantController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingDecisionRelevant/MeetingDecisionRelevantIndex.cshtml");
        }
    }
}