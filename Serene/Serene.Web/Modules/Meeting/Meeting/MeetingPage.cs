
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/Meeting"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MeetingRow))]
    public class MeetingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meeting/MeetingIndex.cshtml");
        }
    }
}
