

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingType", typeof(Serene.Meeting.Pages.MeetingTypeController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingType"), Route("{action=index}")]
    public class MeetingTypeController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml");
        }
    }
}