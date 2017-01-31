
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeetingLocationRow))]
    public class MeetingLocationController : Controller
    {
        [Route("Meeting/MeetingLocation")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml");
        }
    }
}
