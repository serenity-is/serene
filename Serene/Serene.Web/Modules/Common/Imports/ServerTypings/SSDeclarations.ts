declare namespace Serene.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        constructor(container: JQuery);
    }
}

declare namespace Serene.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
    }

    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        constructor(container: JQuery);
    }

    class CustomerCustomerDemoDialog extends Serenity.EntityDialog<CustomerCustomerDemoRow, any> {
    }

    class CustomerCustomerDemoGrid extends Serenity.EntityGrid<CustomerCustomerDemoRow, any> {
        constructor(container: JQuery);
    }

    class CustomerDemographicDialog extends Serenity.EntityDialog<CustomerDemographicRow, any> {
    }

    class CustomerDemographicGrid extends Serenity.EntityGrid<CustomerDemographicRow, any> {
        constructor(container: JQuery);
    }

    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
    }

    class CustomerEditor extends Serenity.LookupEditorBase<any, any> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
    }

    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        constructor(container: JQuery);
    }

    class CustomerOrderDialog extends OrderDialog {
    }

    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
    }

    class EmployeeFormatter {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        get_genderProperty(): string;
        set_genderProperty(value: string): void;
    }

    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        constructor(container: JQuery);
    }

    class EmployeeTerritoryDialog extends Serenity.EntityDialog<EmployeeTerritoryRow, any> {
    }

    class EmployeeTerritoryGrid extends Serenity.EntityGrid<EmployeeTerritoryRow, any> {
        constructor(container: JQuery);
    }

    class FreightFormatter {
        format(ctx: Slick.FormatterContext): string;
    }

    class NoteDialog extends Serenity.TemplatedDialog<any> {
        okClick: () => void;
        get_text(): string;
        set_text(value: string): void;
    }

    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        form: OrderForm;
    }

    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
    }

    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        constructor(container: JQuery);
    }

    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
    }

    class ShipperFormatter {
        format(ctx: Slick.FormatterContext): string;
    }

    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        constructor(container: JQuery);
    }

    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
    }

    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        constructor(container: JQuery);
    }

    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
    }

    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        constructor(container: JQuery);
    }
}

declare namespace Serenity {
    class HtmlBasicContentEditor extends HtmlContentEditor {
        constructor(textArea: JQuery, opt: HtmlContentEditorOptions);
    }
}

