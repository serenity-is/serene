
namespace Serene.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/Forms"), Route("{action=index}")]
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