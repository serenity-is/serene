

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingAgendaRelevant", typeof(Serene.Meeting.Pages.MeetingAgendaRelevantController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingAgendaRelevant"), Route("{action=index}")]
    public class MeetingAgendaRelevantController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAgendaRelevant/MeetingAgendaRelevantIndex.cshtml");
        }
    }
}