
namespace Serene.AdminLTE
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize, Route("AdminLTE/Forms/[action]")]
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
