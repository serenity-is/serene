
namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Administration/User")]
    [PageAuthorize(typeof(Entities.UserRow))]
    public class UserController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.User.UserIndex);
        }
    }
}
