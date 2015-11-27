
namespace Serene.Common.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/UI"), Route("{action=index}")]
    public class UIController : Controller
    {
        public ActionResult Buttons()
        {
            return View();
        }

        public ActionResult General()
        {
            return View();
        }

        public ActionResult Icons()
        {
            return View();
        }

    }
}