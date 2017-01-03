
namespace Serene.AdminLTE
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize, Route("AdminLTE/Mailbox")]
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
