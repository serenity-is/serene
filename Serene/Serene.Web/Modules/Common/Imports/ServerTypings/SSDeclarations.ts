declare namespace Serene {
    class Authorization {
        static hasPermission(permissionKey: string): boolean;
        static get_userDefinition(): ScriptUserDefinition;
    }

    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        get_cancelled(): boolean;
        set_cancelled(value: boolean): void;
        get_max(): number;
        set_max(value: number): void;
        get_value(): number;
        set_value(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_cancelTitle(): string;
        set_cancelTitle(value: string): void;
    }

    namespace DialogUtils {
        function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
    }

    class LanguageList {
        static get_value(): any[];
    }

    namespace ScriptInitialization {
    }
}

declare namespace Serene.Administration {
    class PermissionCheckEditorOptions {
        showRevoke: boolean;
    }

    class PermissionCheckItem {
        ParentKey: string;
        Key: string;
        Title: string;
        IsGroup: boolean;
        GrantRevoke: any;
    }
}

declare namespace Serene.BasicSamples {

    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }

    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
    }

    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }

    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<any, any> {
        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions);
    }

    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        constructor(container: JQuery);
    }
}

declare namespace Serene.Common {
    class ExcelExportHelper {
        static createToolButton(grid: Serenity.IDataGrid, service: string, onViewSubmit: () => boolean, title?: string): Serenity.ToolButton;
    }

    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> {
        constructor(container: JQuery);
        id(entity: any): any;
        save(opt: Serenity.ServiceOptions<any>, callback: (p1: Serenity.ServiceResponse) => void): void;
        deleteEntity(id: number): boolean;
        validateEntity(row: any, id: any): boolean;
        setEntities(items: any[]): void;
        getNewEntity(): any;
        getEditValue(property: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        get_value(): any[];
        set_value(value: any[]): void;
    }

    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        get_onSave(): (p1: Serenity.ServiceOptions<any>, p2: (p1: Serenity.ServiceResponse) => void) => void;
        set_onSave(value: (p1: Serenity.ServiceOptions<any>, p2: (p1: Serenity.ServiceResponse) => void) => void): void;
        get_onDelete(): (p1: Serenity.ServiceOptions<Serenity.DeleteResponse>, p2: (p1: Serenity.DeleteResponse) => void) => void;
        set_onDelete(value: (p1: Serenity.ServiceOptions<Serenity.DeleteResponse>, p2: (p1: Serenity.DeleteResponse) => void) => void): void;
    }

    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }

    class ReportHelper {
        static createRenderButton(reportKey: string, title?: string, cssClass?: string, extension?: string, options?: () => any): Serenity.ToolButton;
    }

    class SidebarSearch extends Serenity.Widget<any> {
        constructor(input: JQuery, menuUL: JQuery);
    }

    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
    }
}

declare namespace Serene.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        constructor(container: JQuery);
    }

    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        constructor(container: JQuery);
    }

    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        constructor(container: JQuery);
    }

    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        constructor(container: JQuery);
    }

    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
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

    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        form: OrderDetailForm;
    }

    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        constructor(container: JQuery);
    }

    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        form: OrderForm;
    }

    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        formatValue(): void;
        getFormattedValue(): string;
        get_multiple(): boolean;
        set_multiple(value: boolean): void;
        get_value(): string;
        set_value(value: string): void;
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

