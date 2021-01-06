using System;
using System.IO;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Razor;
using HtmlHelper = Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper;

namespace Serene
{
    public static class BasicSamplesHelper
    {
        public static HtmlString AppSourceFile(this HtmlHelper helper, string file)
        {
            var viewLocation = ((RazorView)helper.ViewContext.View).Path;
            var absolutePath = Path.GetDirectoryName(viewLocation).Replace('\\', '/') + '/';
            var relative = file.Replace('\\', '/');
            var question = relative.IndexOf('?');
            if (question >= 0)
            {
                relative = new Uri("x:" + absolutePath + relative.Substring(0, question))
                    .AbsolutePath.Substring(2) + relative.Substring(question);
            }
            else
                relative = new Uri("x:" + absolutePath + relative).AbsolutePath.Substring(2);

            return new HtmlString("<a target=\"blank\" style=\"font-weight: bold; color: #ffc\" href=\"" +
                helper.Encode("https://github.com/volkanceylan/S" +
                    "erene/blob/master/S" + "erene/S" + "erene." + "Core" + relative) +
                "\">" + helper.Encode(Path.GetFileName(file)) + "</a>");
        }
    }
}