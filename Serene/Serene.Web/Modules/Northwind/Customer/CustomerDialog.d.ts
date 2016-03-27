declare namespace Serene.NorthwindTS {
    class CustomerDialog extends Serenity.EntityDialog<Northwind.CustomerRow> {
        test(): void;
    }
    class MyBoldFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
