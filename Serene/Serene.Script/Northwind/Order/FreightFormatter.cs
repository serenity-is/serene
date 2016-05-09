
namespace Serene.Northwind
{
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class FreightFormatter : ISlickFormatter
    {
        public string Format(SlickFormatterContext ctx)
        {
            return "<span class='freight-symbol'>" + 
                Q.HtmlEncode(ctx.Value) +
                "</span>";
        }
    }
}