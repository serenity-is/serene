
namespace Serene.AdminLTE
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize, Route("AdminLTE/UIElements/[action]")]
    public class UIElementsController : Controller
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