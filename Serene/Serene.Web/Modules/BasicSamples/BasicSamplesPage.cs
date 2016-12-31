
namespace Serene.BasicSamples.Pages
{
    using Serenity.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [PageAuthorize, Route("BasicSamples/{action=index}")]
    public partial class BasicSamplesController : Controller
    {
    }
}
