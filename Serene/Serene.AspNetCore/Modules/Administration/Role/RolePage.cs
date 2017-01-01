namespace Serene.Administration.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Administration/Role/" + R.ActionIndex)]
    [PageAuthorize(typeof(Entities.RoleRow))]
    public class RoleController : Controller
    {       
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Role.RoleIndex);
        }
    }
}