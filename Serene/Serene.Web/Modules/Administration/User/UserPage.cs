using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Serene.Administration.Pages
{
    [PageAuthorize(typeof(UserRow))]
    public class UserController : Controller
    {
        [Route("Administration/User")]
        public ActionResult Index()
        {
            return this.GridPage("@/Administration/User/UserPage",
                UserRow.Fields.PageTitle());
        }
    }
}