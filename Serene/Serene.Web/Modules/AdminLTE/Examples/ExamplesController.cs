
namespace Serene.AdminLTE
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("AdminLTE/Examples"), Route("{action=index}")]
    public class ExamplesController : Controller
    {
        public ActionResult Buttons()
        {
            return View(MVC.Views.AdminLTE.UIElements.Buttons);
        }

        public ActionResult General()
        {
            return View(MVC.Views.AdminLTE.UIElements.General);
        }

        public ActionResult Icons()
        {
            return View(MVC.Views.AdminLTE.UIElements.Icons);
        }

        public ActionResult Modals()
        {
            return View(MVC.Views.AdminLTE.UIElements.Modals);
        }

        public ActionResult Sliders()
        {
            return View(MVC.Views.AdminLTE.UIElements.Sliders);
        }

        public ActionResult Timeline()
        {
            return View(MVC.Views.AdminLTE.UIElements.Timeline);
        }
    }
}