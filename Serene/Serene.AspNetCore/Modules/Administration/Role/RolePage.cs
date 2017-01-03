namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Administration/Role")]
    [PageAuthorize(typeof(Entities.RoleRow))]
    public class RoleController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Role.RoleIndex);
        }
    }
}