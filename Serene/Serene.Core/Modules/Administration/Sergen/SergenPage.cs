using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Net;

namespace Serene.Administration.Pages
{
    [PageAuthorize(PermissionKeys.Security)]
    public class SergenController : Controller
    {
        [Route("Administration/Sergen")]
        public ActionResult Index()
        {
            if (!IsLocal(Request))
                return View(MVC.Views.Administration.Sergen.SergenError);
                
            return View(MVC.Views.Administration.Sergen.SergenIndex);
        }

        private const string NullIpAddress = "::1";

        public static bool IsLocal(HttpRequest req)
        {
            var connection = req.HttpContext.Connection;
            if (IsSet(connection.RemoteIpAddress))
            {
                return IsSet(connection.LocalIpAddress) ? 
                    connection.RemoteIpAddress.Equals(connection.LocalIpAddress)
                    : IPAddress.IsLoopback(connection.RemoteIpAddress);
            }
            return true;
        }

        private static bool IsSet(IPAddress address)
        {
            return address != null && address.ToString() != NullIpAddress;
        }
    }
}
