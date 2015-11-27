
namespace Serene.Common.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/UI"), Route("{action=index}")]
    public class UIController : Controller
    {
        public ActionResult Buttons()
        {
            return View("~/Modules/Common/AdminLTE/UI/Buttons.cshtml");
        }

        public ActionResult General()
        {
            return View("~/Modules/Common/AdminLTE/UI/General.cshtml");
        }

        public ActionResult Icons()
        {
            return View("~/Modules/Common/AdminLTE/UI/Icons.cshtml");
        }

    }
}