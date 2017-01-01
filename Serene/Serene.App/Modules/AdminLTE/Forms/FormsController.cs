
namespace Serene.AdminLTE
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [PageAuthorize, Route("AdminLTE/Forms/" + R.ActionIndex)]
    public class FormsController : Controller
    {
        public ActionResult GeneralElements()
        {
            return View(MVC.Views.AdminLTE.Forms.GeneralElements);
        }

        public ActionResult AdvancedElements()
        {
            return View(MVC.Views.AdminLTE.Forms.AdvancedElements);
        }

        public ActionResult TextEditors()
        {
            return View(MVC.Views.AdminLTE.Forms.TextEditors);
        }
    }
}
