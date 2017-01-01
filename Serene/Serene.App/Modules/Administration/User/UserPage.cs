
namespace Serene.Administration.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Administration/User/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.UserRow))]
    public class UserController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.User.UserIndex);
        }
    }
}
