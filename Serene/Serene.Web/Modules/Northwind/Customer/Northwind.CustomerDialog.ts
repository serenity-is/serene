namespace Serene.Northwind {
    import D = Serenity.Decorators;

    @D.formKey("Northwind.Customer") @D.idProperty("ID") @D.nameProperty("CustomerID")
    @D.service("Northwind/Customer") @D.flexify() @D.maximizable()
    export class MyCustomerDialog extends Serenity.EntityDialog<Northwind.CustomerRow> {
        test() {
            var s = CustomerRow.Fields.Region;
            var t = CustomerRow.Fields.ContactName;
            var u = CustomerRow.Fields.ContactTitle;
            console.log(s, t, u);
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