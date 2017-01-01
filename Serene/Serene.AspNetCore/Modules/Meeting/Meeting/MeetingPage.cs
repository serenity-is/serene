
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Meeting/Meeting/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.MeetingRow))]
    public class MeetingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meeting/MeetingIndex.cshtml");
        }
    }
}
