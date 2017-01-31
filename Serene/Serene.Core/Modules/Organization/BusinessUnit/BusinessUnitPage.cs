
namespace Serene.Organization.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BusinessUnitRow))]
    public class BusinessUnitController : Controller
    {
        [Route("Organization/BusinessUnit")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/BusinessUnit/BusinessUnitIndex.cshtml");
        }
    }
}
