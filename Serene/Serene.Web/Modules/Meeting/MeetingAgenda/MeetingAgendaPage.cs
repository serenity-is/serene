

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingAgenda", typeof(Serene.Meeting.Pages.MeetingAgendaController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingAgenda"), Route("{action=index}")]
    public class MeetingAgendaController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAgenda/MeetingAgendaIndex.cshtml");
        }
    }
}