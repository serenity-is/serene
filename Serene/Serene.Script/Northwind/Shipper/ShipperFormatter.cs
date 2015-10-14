
namespace Serene.Northwind
{
    using Serenity;

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