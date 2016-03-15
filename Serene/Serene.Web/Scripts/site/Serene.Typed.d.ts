interface CustomerRow {
    ID: number;
    CustomerID: string;
}
declare namespace Serene.Northwind {
    class MyCustomerDialog extends Serenity.EntityDialog<CustomerRow> {
    }
    class MyBoldFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
