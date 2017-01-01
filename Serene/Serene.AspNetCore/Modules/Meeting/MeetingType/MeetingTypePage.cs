
namespace Serene.Meeting.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Meeting/MeetingType/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.MeetingTypeRow))]
    public class MeetingTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml");
        }
    }
}
