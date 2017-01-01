using System.Web.Mvc;
using System.Web.Routing;

namespace Serene
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("Content/{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();
        }
    }

    public static class R
    {
        public const string Action = "{action}";
        public const string ActionIndex = "{action=index}";
    }
}