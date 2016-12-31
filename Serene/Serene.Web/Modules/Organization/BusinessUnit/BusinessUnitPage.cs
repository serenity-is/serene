
namespace Serene.Organization.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Organization/BusinessUnit/{action=index}")]
    [PageAuthorize(typeof(Entities.BusinessUnitRow))]
    public class BusinessUnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Organization/BusinessUnit/BusinessUnitIndex.cshtml");
        }
    }
}
