
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Meeting/MeetingLocation/{action=index}")]
    [PageAuthorize(typeof(Entities.MeetingLocationRow))]
    public class MeetingLocationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml");
        }
    }
}
