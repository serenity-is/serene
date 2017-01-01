
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Meeting/MeetingAgendaType/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.MeetingAgendaRow))]
    public class MeetingAgendaTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingAgendaType/MeetingAgendaTypeIndex.cshtml");
        }
    }
}
