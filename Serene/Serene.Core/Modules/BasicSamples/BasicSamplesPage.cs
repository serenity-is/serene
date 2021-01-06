using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene.BasicSamples.Pages
{
    [PageAuthorize, Route("BasicSamples/[action]")]
    public partial class BasicSamplesController : Controller
    {
    }
}
