declare namespace Serene {
    class Authorization {
        static hasPermission(permissionKey: string): boolean;
    }

    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
    }

    class BulkServiceAction extends Serenity.ScriptContext {
        createProgressDialog(): void;
        getConfirmationFormat(): string;
        getConfirmationMessage(targetCount: number): string;
        confirm(targetCount: number, action: any): void;
        getNothingToProcessMessage(): string;
        nothingToProcess(): void;
        getParallelRequests(): number;
        getBatchSize(): number;
        startParallelExecution(): void;
        serviceCallCleanup(): void;
        executeForBatch(batch: any): void;
        executeNextBatch(): void;
        delayed(action: any): void;
        getAllHadErrorsFormat(): string;
        showAllHadErrors(): void;
        getSomeHadErrorsFormat(): string;
        showSomeHadErrors(): void;
        getAllSuccessFormat(): string;
        showAllSuccess(): void;
        showResults(): void;
        execute(keys: any): void;
    }

    namespace DialogUtils {
        function pendingChangesConfirmation(element: JQuery, hasPendingChanges: any): void;
    }

    class LanguageList {
    }

    namespace ScriptInitialization {
    }
}

declare namespace Serene.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
    }

    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        constructor(container: JQuery);
    }

    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        constructor(div: JQuery, opt: PermissionCheckEditorOptions);
    }

    class PermissionCheckEditorOptions {
    }

    class PermissionCheckItem {
    }

    class PermissionModuleEditor extends Serenity.Select2Editor<any, string> {
        constructor(hidden: JQuery);
    }

    class RoleCheckEditor extends Serenity.CheckTreeEditor<any, any> {
        constructor(div: JQuery);
    }

    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
    }

    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        constructor(container: JQuery);
    }

    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        constructor(opt: RolePermissionDialogOptions);
    }

    class RolePermissionDialogOptions {
    }

    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        constructor(container: JQuery);
        saveChanges(language: string): RSVP<any>;
    }

    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
    }

    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        constructor(container: JQuery);
    }

    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        constructor(opt: UserPermissionDialogOptions);
    }

    class UserPermissionDialogOptions {
    }

    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        constructor(opt: UserRoleDialogOptions);
    }

    class UserRoleDialogOptions {
    }
}

declare namespace Serene.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }

    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        static initializePage(): void;
    }

    class CloneableEntityDialog extends Northwind.ProductDialog {
    }

    class CloneableEntityGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }

    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }

    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        constructor(container: JQuery);
    }

    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
    }

    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }

    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
    }

    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }

    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }

    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
    }

    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
    }

    class MultiColumnDialog extends Northwind.OrderDialog {
    }

    class MultiColumnGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }

    class MultiColumnResponsiveDialog extends Northwind.OrderDialog {
    }

    class MultiColumnResponsiveGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }

    class OrderBulkAction extends BulkServiceAction {
    }

    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<any, any> {
        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions);
    }

    class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
    }

    class ResponsiveGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }

    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        constructor(container: JQuery);
    }
}

declare namespace Serene.Common {
    class ExcelExportHelper {
        static createToolButton(grid: Serenity.IDataGrid, service: string, onViewSubmit: any, title?: string): Serenity.ToolButton;
    }

    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> {
        constructor(container: JQuery);
        iD(entity: any): any;
        save(opt: Serenity.ServiceOptions<any>, callback: any): void;
        deleteEntity(id: number): boolean;
        validateEntity(row: any, id: any): boolean;
        setEntities(items: any): void;
        getNewEntity(): any;
        getEditValue(property: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }

    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
    }

    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }

    class ReportHelper {
        static createRenderButton(reportKey: string, title?: string, cssClass?: string, extension?: string, options?: any): Serenity.ToolButton;
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

    class CustomerOrdersGrid extends OrderGrid {
        constructor(container: JQuery);
    }

    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
    }

    class EmployeeFormatter {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
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
    }

    class NotesEditor extends Serenity.TemplatedWidget<any> {
        constructor(container: JQuery);
        getEditValue(property: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }

    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
    }

    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        constructor(container: JQuery);
    }

    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
    }

    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        constructor(container: JQuery);
    }

    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        formatValue(): void;
        getFormattedValue(): string;
    }

    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
    }

    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        constructor(container: JQuery);
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

