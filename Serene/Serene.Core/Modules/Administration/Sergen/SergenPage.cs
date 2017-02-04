
namespace Serene.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Security)]
    public class SergenController : Controller
    {
        [Route("Administration/Sergen")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Sergen.SergenIndex);
        }
    }
}
