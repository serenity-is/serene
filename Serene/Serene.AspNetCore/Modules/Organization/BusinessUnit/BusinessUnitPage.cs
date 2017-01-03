
namespace Serene.Organization.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Organization/BusinessUnit")]
    [PageAuthorize(typeof(Entities.BusinessUnitRow))]
    public class BusinessUnitController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/BusinessUnit/BusinessUnitIndex.cshtml");
        }
    }
}
