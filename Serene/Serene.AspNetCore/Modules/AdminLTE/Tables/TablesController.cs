
namespace Serene.AdminLTE
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize, Route("AdminLTE/Tables")]
    public class TablesController : Controller
    {
        public ActionResult SimpleTables()
        {
            return View(MVC.Views.AdminLTE.Tables.SimpleTables);
        }
    }
}
