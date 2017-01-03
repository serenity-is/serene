
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Meeting/Meeting")]
    [PageAuthorize(typeof(Entities.MeetingRow))]
    public class MeetingController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meeting/MeetingIndex.cshtml");
        }
    }
}
