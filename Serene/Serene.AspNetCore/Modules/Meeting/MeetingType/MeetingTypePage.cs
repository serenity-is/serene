
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Meeting/MeetingType")]
    [PageAuthorize(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml");
        }
    }
}
