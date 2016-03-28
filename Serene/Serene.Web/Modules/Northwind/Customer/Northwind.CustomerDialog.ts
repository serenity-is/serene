namespace Serene.NorthwindTS {
    import D = Serenity.Decorators;

    @D.formKey("Northwind.Customer") @D.idProperty("ID") @D.nameProperty("CustomerID")
    @D.service("Northwind/Customer") @D.flexify() @D.maximizable()
    export class CustomerDialog extends Serenity.EntityDialog<Northwind.CustomerRow> {
        test() {
            var s = Northwind.CustomerRow.Fields.Region;
        }
    }

    export class MyBoldFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            return "<b>" + Q.htmlEncode(ctx.value) + "</b>";
        }
    }

    namespace XYZ {
    }
}