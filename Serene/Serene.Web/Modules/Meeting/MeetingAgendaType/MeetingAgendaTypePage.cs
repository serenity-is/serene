
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingAgendaType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MeetingAgendaRow))]
    public class MeetingAgendaTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAgendaType/MeetingAgendaTypeIndex.cshtml");
        }
    }
}