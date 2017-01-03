namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Role"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RoleRow))]
    public class RoleController : Controller
    {       
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Role.RoleIndex);
        }
    }
}