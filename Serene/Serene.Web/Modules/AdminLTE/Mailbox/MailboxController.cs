
namespace Serene.AdminLTE
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [PageAuthorize, Route("AdminLTE/Mailbox/" + R.ActionIndex)]
    public class MailboxController : Controller
    {
        public ActionResult Inbox()
        {
            return View(MVC.Views.AdminLTE.Mailbox.Inbox);
        }

        public ActionResult Compose()
        {
            return View(MVC.Views.AdminLTE.Mailbox.Compose);
        }

        public ActionResult Read()
        {
            return View(MVC.Views.AdminLTE.Mailbox.Read);
        }
    }
}
