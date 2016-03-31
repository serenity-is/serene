declare namespace Serene {
    class Authorization {
        static hasPermission(permissionKey: string): boolean;
    }

    class BasicProgressDialog {
        getDialogOptions(): any;
        initDialog(): void;
        getTemplate(): string;
    }

    class BulkServiceAction {
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
    class LanguageDialog {
    }

    class LanguageGrid {
        constructor(container: JQuery);
    }

    class PermissionCheckEditor {
        constructor(div: JQuery, opt: PermissionCheckEditorOptions);
        getColumns(): any;
        onViewSubmit(): boolean;
        onViewFilter(item: PermissionCheckItem): boolean;
        onClick(e: any, row: number, cell: number): void;
        getButtons(): any;
        createToolbarExtensions(): void;
    }

    class PermissionCheckEditorOptions {
    }

    class PermissionCheckItem {
    }

    class PermissionModuleEditor {
        constructor(hidden: JQuery);
    }

    class RoleCheckEditor {
        constructor(div: JQuery);
        getButtons(): any;
        createToolbarExtensions(): void;
        onViewFilter(item: Serenity.CheckTreeItem): boolean;
        getItems(): any;
    }

    class RoleDialog {
        getToolbarButtons(): any;
        updateInterface(): void;
    }

    class RoleGrid {
        constructor(container: JQuery);
        getDefaultSortBy(): any;
    }

    class RolePermissionDialog {
        constructor(opt: RolePermissionDialogOptions);
        getDialogOptions(): any;
        getTemplate(): string;
    }

    class RolePermissionDialogOptions {
    }

    class TranslationGrid {
        constructor(container: JQuery);
        onClick(e: any, row: number, cell: number): void;
        getColumnsAsync(): any;
        createToolbarExtensions(): void;
        saveChanges(language: string): any;
        onViewSubmit(): boolean;
        getButtons(): any;
        createQuickSearchInput(): void;
        onViewFilter(item: TranslationItem): boolean;
        usePager(): boolean;
    }

    class UserDialog {
        getToolbarButtons(): any;
        updateInterface(): void;
    }

    class UserGrid {
        constructor(container: JQuery);
        getColumns(): any;
        getDefaultSortBy(): any;
    }

    class UserPermissionDialog {
        constructor(opt: UserPermissionDialogOptions);
        getDialogOptions(): any;
        getTemplate(): string;
    }

    class UserPermissionDialogOptions {
    }

    class UserRoleDialog {
        constructor(opt: UserRoleDialogOptions);
        getDialogOptions(): any;
        getTemplate(): string;
    }

    class UserRoleDialogOptions {
    }
}

declare namespace Serene.BasicSamples {
    class CancellableBulkActionGrid {
        constructor(container: JQuery);
        createToolbarExtensions(): void;
        getButtons(): any;
        getColumns(): any;
        getViewOptions(): any;
    }

    class ChartInDialog {
        onDialogOpen(): void;
        arrange(): void;
        getTemplate(): string;
        getDialogOptions(): any;
        static initializePage(): void;
    }

    class CloneableEntityDialog {
        updateInterface(): void;
        getCloningEntity(): Northwind.ProductRow;
    }

    class CloneableEntityGrid {
        constructor(container: JQuery);
    }

    class DefaultValuesInNewGrid {
        constructor(container: JQuery);
        addButtonClick(): void;
        getButtons(): any;
    }

    class FilteredLookupDetailEditor {
        constructor(container: JQuery);
        initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }

    class FilteredLookupInDetailDialog {
    }

    class FilteredLookupInDetailGrid {
        constructor(container: JQuery);
    }

    class FilteredLookupOrderDetailDialog {
        beforeLoadEntity(entity: Northwind.OrderDetailRow): void;
    }

    class GridFilteredByCriteria {
        constructor(container: JQuery);
        onViewSubmit(): boolean;
    }

    class GroupingAndSummariesInGrid {
        constructor(container: JQuery);
        createSlickGrid(): any;
        getColumns(): any;
        getSlickOptions(): any;
        usePager(): boolean;
        getButtons(): any;
    }

    class LookupFilterByMultipleDialog {
    }

    class LookupFilterByMultipleGrid {
        constructor(container: JQuery);
        onViewSubmit(): boolean;
    }

    class MultiColumnDialog {
    }

    class MultiColumnGrid {
        constructor(container: JQuery);
    }

    class MultiColumnResponsiveDialog {
    }

    class MultiColumnResponsiveGrid {
        constructor(container: JQuery);
    }

    class OrderBulkAction {
        getParallelRequests(): number;
        getBatchSize(): number;
        executeForBatch(batch: any): void;
    }

    class ProduceSeafoodCategoryEditor {
        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions);
        getLookupKey(): string;
        getItems(lookup: any): any;
    }

    class ResponsiveDialog {
    }

    class ResponsiveGrid {
        constructor(container: JQuery);
    }

    class ViewWithoutIDGrid {
        constructor(container: JQuery);
        onViewProcessData(response: any): any;
        getButtons(): any;
    }
}

declare namespace Serene.Common {
    class ExcelExportHelper {
        static createToolButton(grid: Serenity.IDataGrid, service: string, onViewSubmit: any, title?: string): Serenity.ToolButton;
    }

    class LanguageSelection {
        constructor(select: JQuery, currentLanguage: string);
    }

    class ReportHelper {
        static createRenderButton(reportKey: string, title?: string, cssClass?: string, extension?: string, options?: any): Serenity.ToolButton;
    }

    class SidebarSearch {
        constructor(input: JQuery, menuUL: JQuery);
    }

    class ThemeSelection {
        constructor(select: JQuery);
    }
}

declare namespace Serene.Membership {
    class ChangePasswordPanel {
        constructor(container: JQuery);
    }

    class ForgotPasswordPanel {
        constructor(container: JQuery);
    }

    class LoginPanel {
        constructor(container: JQuery);
    }

    class ResetPasswordPanel {
        constructor(container: JQuery);
    }

    class SignUpPanel {
        constructor(container: JQuery);
    }
}

declare namespace Serene.Northwind {
    class CategoryDialog {
        getLanguages(): any;
    }

    class CategoryGrid {
        constructor(container: JQuery);
    }

    class CustomerCustomerDemoDialog {
    }

    class CustomerCustomerDemoGrid {
        constructor(container: JQuery);
        getColumns(): any;
    }

    class CustomerDemographicDialog {
    }

    class CustomerDemographicGrid {
        constructor(container: JQuery);
        getColumns(): any;
    }

    class CustomerDialog {
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }

    class CustomerEditor {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        getLookupKey(): string;
        getItemText(item: CustomerRow, lookup: any): string;
    }

    class CustomerGrid {
        constructor(container: JQuery);
        createToolbarExtensions(): void;
        getButtons(): any;
    }

    class CustomerOrderDialog {
        updateInterface(): void;
    }

    class CustomerOrdersGrid {
        constructor(container: JQuery);
        getColumns(): any;
        initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        addButtonClick(): void;
        getInitialTitle(): string;
        createToolbarExtensions(): void;
        getGridCanLoad(): boolean;
    }

    class EmployeeDialog {
    }

    class EmployeeFormatter {
        format(ctx: any): string;
        initializeColumn(column: any): void;
    }

    class EmployeeGrid {
        constructor(container: JQuery);
        getColumns(): any;
    }

    class EmployeeTerritoryDialog {
    }

    class EmployeeTerritoryGrid {
        constructor(container: JQuery);
        getColumns(): any;
    }

    class FreightFormatter {
        format(ctx: any): string;
    }

    class NoteDialog {
        getTemplate(): string;
        getDialogOptions(): any;
    }

    class NotesEditor {
        constructor(container: JQuery);
        getTemplate(): string;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }

    class OrderDetailDialog {
    }

    class OrderDetailsEditor {
        constructor(container: JQuery);
        validateEntity(row: OrderDetailRow, id: any): boolean;
    }

    class OrderDialog {
        loadEntity(entity: OrderRow): void;
        getToolbarButtons(): any;
    }

    class OrderGrid {
        constructor(container: JQuery);
        createToolbarExtensions(): void;
        getButtons(): any;
    }

    class PhoneEditor {
        constructor(input: JQuery);
        formatValue(): void;
        getFormattedValue(): string;
    }

    class ProductDialog {
        getLanguages(): any;
    }

    class ProductGrid {
        constructor(container: JQuery);
        createToolbarExtensions(): void;
        getButtons(): any;
        onViewProcessData(response: any): any;
        getColumns(): any;
    }

    class RegionDialog {
    }

    class RegionGrid {
        constructor(container: JQuery);
    }

    class ShipperDialog {
    }

    class ShipperFormatter {
        format(ctx: any): string;
    }

    class ShipperGrid {
        constructor(container: JQuery);
    }

    class SupplierDialog {
    }

    class SupplierGrid {
        constructor(container: JQuery);
        createToolbarExtensions(): void;
        onViewSubmit(): boolean;
    }

    class TerritoryDialog {
    }

    class TerritoryGrid {
        constructor(container: JQuery);
        createToolbarExtensions(): void;
        onViewSubmit(): boolean;
    }
}

declare namespace Serenity {
    class HtmlBasicContentEditor {
        constructor(textArea: JQuery, opt: HtmlContentEditorOptions);
        getConfig(): any;
    }
}

