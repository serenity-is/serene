
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml");
        }
    }
}
