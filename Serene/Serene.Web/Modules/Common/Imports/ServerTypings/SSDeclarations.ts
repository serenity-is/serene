declare namespace Serene {
    class Authorization {
        constructor();
    }

    class BasicProgressDialog {
        constructor();
    }

    class BulkServiceAction {
        constructor();
    }

    class DialogUtils {
    }

    class LanguageList {
        constructor();
    }

    class ScriptInitialization {
    }
}

declare namespace Serene.Administration {
    class LanguageDialog {
        constructor();
    }

    class LanguageGrid {
        constructor(container: JQuery);
    }

    class LanguageService {
        constructor();
    }

    class PermissionCheckEditor {
        constructor(div: JQuery, opt: PermissionCheckEditorOptions);
    }

    class PermissionCheckEditorOptions {
        constructor();
    }

    class PermissionCheckItem {
        constructor();
    }

    class PermissionModuleEditor {
        constructor(hidden: JQuery);
    }

    class RoleCheckEditor {
        constructor(div: JQuery);
    }

    class RoleDialog {
        constructor();
    }

    class RoleGrid {
        constructor(container: JQuery);
    }

    class RolePermissionDialog {
        constructor(opt: RolePermissionDialogOptions);
    }

    class RolePermissionDialogOptions {
        constructor();
    }

    class RolePermissionService {
        constructor();
    }

    class RoleService {
        constructor();
    }

    class TranslationGrid {
        constructor(container: JQuery);
    }

    class TranslationService {
        constructor();
    }

    class UserDialog {
        constructor();
    }

    class UserGrid {
        constructor(container: JQuery);
    }

    class UserPermissionDialog {
        constructor(opt: UserPermissionDialogOptions);
    }

    class UserPermissionDialogOptions {
        constructor();
    }

    class UserPermissionService {
        constructor();
    }

    class UserRoleDialog {
        constructor(opt: UserRoleDialogOptions);
    }

    class UserRoleDialogOptions {
        constructor();
    }

    class UserRoleService {
        constructor();
    }

    class UserService {
        constructor();
    }
}

declare namespace Serene.BasicSamples {
    class BasicSamplesService {
        constructor();
    }

    class CancellableBulkActionGrid {
        constructor(container: JQuery);
    }

    class ChartInDialog {
        constructor();
    }

    class CloneableEntityDialog {
        constructor();
    }

    class CloneableEntityGrid {
        constructor(container: JQuery);
    }

    class DefaultValuesInNewGrid {
        constructor(container: JQuery);
    }

    class FilteredLookupDetailEditor {
        constructor(container: JQuery);
    }

    class FilteredLookupInDetailDialog {
        constructor();
    }

    class FilteredLookupInDetailGrid {
        constructor(container: JQuery);
    }

    class FilteredLookupOrderDetailDialog {
        constructor();
    }

    class GridFilteredByCriteria {
        constructor(container: JQuery);
    }

    class GroupingAndSummariesInGrid {
        constructor(container: JQuery);
    }

    class LookupFilterByMultipleDialog {
        constructor();
    }

    class LookupFilterByMultipleGrid {
        constructor(container: JQuery);
    }

    class MultiColumnDialog {
        constructor();
    }

    class MultiColumnGrid {
        constructor(container: JQuery);
    }

    class MultiColumnResponsiveDialog {
        constructor();
    }

    class MultiColumnResponsiveGrid {
        constructor(container: JQuery);
    }

    class OrderBulkAction {
        constructor();
    }

    class ProduceSeafoodCategoryEditor {
        constructor(hidden: JQuery, opt: Serenity.LookupEditorOptions);
    }

    class ResponsiveDialog {
        constructor();
    }

    class ResponsiveGrid {
        constructor(container: JQuery);
    }

    class ViewWithoutIDGrid {
        constructor(container: JQuery);
    }
}

declare namespace Serene.Common {
    class ExcelExportHelper {
        constructor();
    }

    class LanguageSelection {
        constructor(select: JQuery, currentLanguage: string);
    }

    class ReportHelper {
        constructor();
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
        constructor();
    }

    class CategoryGrid {
        constructor(container: JQuery);
    }

    class CategoryLangService {
        constructor();
    }

    class CategoryService {
        constructor();
    }

    class CustomerCustomerDemoDialog {
        constructor();
    }

    class CustomerCustomerDemoGrid {
        constructor(container: JQuery);
    }

    class CustomerCustomerDemoService {
        constructor();
    }

    class CustomerDemographicDialog {
        constructor();
    }

    class CustomerDemographicGrid {
        constructor(container: JQuery);
    }

    class CustomerDemographicService {
        constructor();
    }

    class CustomerDialog {
        constructor();
    }

    class CustomerEditor {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
    }

    class CustomerGrid {
        constructor(container: JQuery);
    }

    class CustomerOrderDialog {
        constructor();
    }

    class CustomerOrdersGrid {
        constructor(container: JQuery);
    }

    class CustomerService {
        constructor();
    }

    class EmployeeDialog {
        constructor();
    }

    class EmployeeFormatter {
        constructor();
    }

    class EmployeeGrid {
        constructor(container: JQuery);
    }

    class EmployeeService {
        constructor();
    }

    class EmployeeTerritoryDialog {
        constructor();
    }

    class EmployeeTerritoryGrid {
        constructor(container: JQuery);
    }

    class EmployeeTerritoryService {
        constructor();
    }

    class FreightFormatter {
        constructor();
    }

    class NoteDialog {
        constructor();
    }

    class NotesEditor {
        constructor(container: JQuery);
    }

    class OrderDetailDialog {
        constructor();
    }

    class OrderDetailsEditor {
        constructor(container: JQuery);
    }

    class OrderDetailService {
        constructor();
    }

    class OrderDialog {
        constructor();
    }

    class OrderGrid {
        constructor(container: JQuery);
    }

    class OrderService {
        constructor();
    }

    class PhoneEditor {
        constructor(input: JQuery);
    }

    class ProductDialog {
        constructor();
    }

    class ProductGrid {
        constructor(container: JQuery);
    }

    class ProductLangService {
        constructor();
    }

    class ProductService {
        constructor();
    }

    class RegionDialog {
        constructor();
    }

    class RegionGrid {
        constructor(container: JQuery);
    }

    class RegionService {
        constructor();
    }

    class SalesByCategoryService {
        constructor();
    }

    class ShipperDialog {
        constructor();
    }

    class ShipperFormatter {
        constructor();
    }

    class ShipperGrid {
        constructor(container: JQuery);
    }

    class ShipperService {
        constructor();
    }

    class SupplierDialog {
        constructor();
    }

    class SupplierGrid {
        constructor(container: JQuery);
    }

    class SupplierService {
        constructor();
    }

    class TerritoryDialog {
        constructor();
    }

    class TerritoryGrid {
        constructor(container: JQuery);
    }

    class TerritoryService {
        constructor();
    }
}

declare namespace Serenity {
    class HtmlBasicContentEditor {
        constructor(textArea: JQuery, opt: HtmlContentEditorOptions);
    }
}

