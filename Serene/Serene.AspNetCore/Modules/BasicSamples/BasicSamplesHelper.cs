using System.IO;
using System.Web;
#if ASPNETCORE
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc.Razor;
using HtmlHelper = Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper;
#else
using System.Web.Mvc;
#endif

namespace Serene
{
    public static class BasicSamplesHelper
    {
        public static HtmlString AppSourceFile(this HtmlHelper helper, string file)
        {
#if ASPNETCORE
            var location = ((RazorView)helper.ViewContext.View).Path;
#else
            var location = ((RazorView)helper.ViewContext.View).ViewPath;
#endif
            var path = Path.GetDirectoryName(location.Replace("/", "\\"));
            path = System.IO.Path.Combine(path, file);

            return new HtmlString("<a target=\"blank\" style=\"font-weight: bold; color: #ffc\" href=\"" +
                helper.Encode(path.Replace("\\", "/").Replace("~/",
                    // using syntax below to prevent replace of S E R E N E in URL
                    "https://github.com/volkanceylan/S" + "erene/blob/master/S" + "erene/S" + "erene.Web/")) +
                "\">" + 
                helper.Encode(file) +
                "</a>");
        }
    }
}