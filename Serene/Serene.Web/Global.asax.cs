
namespace Serene
{
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Threading;
    using System.Web.Mvc;
    using System.Web.Routing;

    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ValueProviderFactories.Factories.Remove(
                ValueProviderFactories.Factories.OfType<JsonValueProviderFactory>().First());

            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new RazorViewEngine());

            SiteInitialization.ApplicationStart();
        }

        protected void Application_End(object sender, EventArgs e)
        {
            SiteInitialization.ApplicationEnd();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            var cookie = Request.Cookies["LanguagePreference"];
            if (cookie != null && !string.IsNullOrEmpty(cookie.Value))
            {
                try
                {
                    var culture = CultureInfo.GetCultureInfo(cookie.Value);
                    Thread.CurrentThread.CurrentUICulture = culture;
                }
                catch (CultureNotFoundException)
                {
                    // ignore
                }
            }
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
            // If windows authentication is used, HttpContext.Current.User will be
            // of type WindowsPrincipal
            var windowsUser = Context.User as System.Security.Principal.WindowsPrincipal;

            if (windowsUser != null && windowsUser.Identity != null && windowsUser.Identity.IsAuthenticated)
            {                
                string userName = windowsUser.Identity.Name;
                // the pw passed to Authenticate will not be used with windows authentication enabled
                // so just simply pass a dummy pw
                Serenity.WebSecurityHelper.Authenticate(ref userName, "DummyPW_NotUsed", true);
            }
        }

        protected void Application_Error(object sender, EventArgs e)
        {
        }
    }
}
