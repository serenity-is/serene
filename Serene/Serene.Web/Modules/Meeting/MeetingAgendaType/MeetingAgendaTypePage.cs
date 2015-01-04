

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingAgendaType", typeof(Serene.Meeting.Pages.MeetingAgendaTypeController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingAgendaType"), Route("{action=index}")]
    public class MeetingAgendaTypeController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAgendaType/MeetingAgendaTypeIndex.cshtml");
        }
    }
}