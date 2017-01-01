
namespace Serene.AdminLTE
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [PageAuthorize, Route("AdminLTE/Examples/" + R.ActionIndex)]
    public class ExamplesController : Controller
    {
        public ActionResult BlankPage()
        {
            return View(MVC.Views.AdminLTE.Examples.BlankPage);
        }

        public ActionResult Error404()
        {
            return View(MVC.Views.AdminLTE.Examples.Error404);
        }

        public ActionResult Error500()
        {
            return View(MVC.Views.AdminLTE.Examples.Error500);
        }

        public ActionResult Invoice()
        {
            return View(MVC.Views.AdminLTE.Examples.Invoice);
        }

        public ActionResult InvoicePrint()
        {
            return View(MVC.Views.AdminLTE.Examples.InvoicePrint);
        }

        public ActionResult Lockscreen()
        {
            return View(MVC.Views.AdminLTE.Examples.Lockscreen);
        }

        public ActionResult Login()
        {
            return View(MVC.Views.AdminLTE.Examples.Login);
        }

        public ActionResult PacePage()
        {
            return View(MVC.Views.AdminLTE.Examples.PacePage);
        }

#if ASPNETCORE
        public ActionResult Profile()
#else
        public new ActionResult Profile()
#endif
        {
            return View(MVC.Views.AdminLTE.Examples.Profile);
        }

        public ActionResult Register()
        {
            return View(MVC.Views.AdminLTE.Examples.Register);
        }
    }
}
