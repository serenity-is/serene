namespace Serene.Northwind {

    @Serenity.Decorators.registerFormatter()
    export class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span class='shipper-symbol shipper-" +
                Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                "'>" + Q.htmlEncode(ctx.value) + '</span>';
        }
    }
}