using System.IO;
using System.Web;
using System.Web.Mvc;

namespace Serene
{
    public static class BasicSamplesHelper
    {
        public static IHtmlString SereneSource(this HtmlHelper helper, string file)
        {
            var location = ((RazorView)helper.ViewContext.View).ViewPath;
            var path = Path.GetDirectoryName(location.Replace("/", "\\"));
            path = System.IO.Path.Combine(path, file);

            return new MvcHtmlString("<a target=\"blank\" style=\"font-weight: bold; color: #ffc\" href=\"" +
                helper.Encode(path.Replace("\\", "/").Replace("~/",
                    "https://github.com/volkanceylan/Serene/blob/master/Serene/Serene.Web/")) +
                "\">" + 
                helper.Encode(file) +
                "</a>");
        }
    }
}