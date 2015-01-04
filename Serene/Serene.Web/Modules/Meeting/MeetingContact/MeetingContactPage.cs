

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Meeting/MeetingContact", typeof(Serene.Meeting.Pages.MeetingContactController))]

namespace Serene.Meeting.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Meeting/MeetingContact"), Route("{action=index}")]
    public class MeetingContactController : Controller
    {
        [PageAuthorize("Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/MeetingContact/MeetingContactIndex.cshtml");
        }
    }
}