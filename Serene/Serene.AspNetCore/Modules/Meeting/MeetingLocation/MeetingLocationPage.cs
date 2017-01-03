
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Meeting/MeetingLocation")]
    [PageAuthorize(typeof(Entities.MeetingLocationRow))]
    public class MeetingLocationController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml");
        }
    }
}
