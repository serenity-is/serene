
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Meeting/MeetingAgendaType")]
    [PageAuthorize(typeof(Entities.MeetingAgendaRow))]
    public class MeetingAgendaTypeController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAgendaType/MeetingAgendaTypeIndex.cshtml");
        }
    }
}
