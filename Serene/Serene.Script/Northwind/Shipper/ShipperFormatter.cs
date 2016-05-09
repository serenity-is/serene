
namespace Serene.Northwind
{
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class ShipperFormatter : ISlickFormatter
    {
        public string Format(SlickFormatterContext ctx)
        {
            return "<span class='shipper-symbol shipper-" + 
                ((ctx.Value as string) ?? "").Replace(" ", "") + 
                "'>" + Q.HtmlEncode(ctx.Value) +
                "</span>";
        }
    }
}