namespace Serene.Northwind {

    @Serenity.Decorators.registerFormatter()
    export class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>'
        }
    }
}