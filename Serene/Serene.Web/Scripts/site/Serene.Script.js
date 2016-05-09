(function() {
	'use strict';
	var $asm = {};
	global.Serene = global.Serene || {};
	global.Serene.Administration = global.Serene.Administration || {};
	global.Serene.BasicSamples = global.Serene.BasicSamples || {};
	global.Serene.Membership = global.Serene.Membership || {};
	global.Serene.Northwind = global.Serene.Northwind || {};
	global.Serenity = global.Serenity || {};
	ss.initAssembly($asm, 'Serene.Script');
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.LanguageForm
	var $Serene_Administration_LanguageForm = function(idPrefix) {
		this.$3$LanguageIdField = null;
		this.$3$LanguageNameField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Administration_LanguageForm.__typeName = 'Serene.Administration.LanguageForm';
	global.Serene.Administration.LanguageForm = $Serene_Administration_LanguageForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.RoleForm
	var $Serene_Administration_RoleForm = function(idPrefix) {
		this.$3$RoleNameField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Administration_RoleForm.__typeName = 'Serene.Administration.RoleForm';
	global.Serene.Administration.RoleForm = $Serene_Administration_RoleForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.UserForm
	var $Serene_Administration_UserForm = function(idPrefix) {
		this.$3$UsernameField = null;
		this.$3$DisplayNameField = null;
		this.$3$EmailField = null;
		this.$3$PasswordField = null;
		this.$3$PasswordConfirmField = null;
		this.$3$SourceField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Administration_UserForm.__typeName = 'Serene.Administration.UserForm';
	global.Serene.Administration.UserForm = $Serene_Administration_UserForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.BasicSamples.FilteredLookupInDetailForm
	var $Serene_BasicSamples_FilteredLookupInDetailForm = function(idPrefix) {
		this.$3$CustomerIDField = null;
		this.$3$OrderDateField = null;
		this.$3$CategoryIDField = null;
		this.$3$DetailListField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_BasicSamples_FilteredLookupInDetailForm.__typeName = 'Serene.BasicSamples.FilteredLookupInDetailForm';
	global.Serene.BasicSamples.FilteredLookupInDetailForm = $Serene_BasicSamples_FilteredLookupInDetailForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.BasicSamples.LookupFilterByMultipleForm
	var $Serene_BasicSamples_LookupFilterByMultipleForm = function(idPrefix) {
		this.$3$ProductNameField = null;
		this.$3$ProductImageField = null;
		this.$3$DiscontinuedField = null;
		this.$3$SupplierIDField = null;
		this.$3$CategoryIDField = null;
		this.$3$QuantityPerUnitField = null;
		this.$3$UnitPriceField = null;
		this.$3$UnitsInStockField = null;
		this.$3$UnitsOnOrderField = null;
		this.$3$ReorderLevelField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_BasicSamples_LookupFilterByMultipleForm.__typeName = 'Serene.BasicSamples.LookupFilterByMultipleForm';
	global.Serene.BasicSamples.LookupFilterByMultipleForm = $Serene_BasicSamples_LookupFilterByMultipleForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ChangePasswordForm
	var $Serene_Membership_ChangePasswordForm = function(idPrefix) {
		this.$3$OldPasswordField = null;
		this.$3$NewPasswordField = null;
		this.$3$ConfirmPasswordField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_ChangePasswordForm.__typeName = 'Serene.Membership.ChangePasswordForm';
	global.Serene.Membership.ChangePasswordForm = $Serene_Membership_ChangePasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ForgotPasswordForm
	var $Serene_Membership_ForgotPasswordForm = function(idPrefix) {
		this.$3$EmailField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_ForgotPasswordForm.__typeName = 'Serene.Membership.ForgotPasswordForm';
	global.Serene.Membership.ForgotPasswordForm = $Serene_Membership_ForgotPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.LoginForm
	var $Serene_Membership_LoginForm = function(idPrefix) {
		this.$3$UsernameField = null;
		this.$3$PasswordField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_LoginForm.__typeName = 'Serene.Membership.LoginForm';
	global.Serene.Membership.LoginForm = $Serene_Membership_LoginForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ResetPasswordForm
	var $Serene_Membership_ResetPasswordForm = function(idPrefix) {
		this.$3$NewPasswordField = null;
		this.$3$ConfirmPasswordField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_ResetPasswordForm.__typeName = 'Serene.Membership.ResetPasswordForm';
	global.Serene.Membership.ResetPasswordForm = $Serene_Membership_ResetPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.SignUpForm
	var $Serene_Membership_SignUpForm = function(idPrefix) {
		this.$3$DisplayNameField = null;
		this.$3$EmailField = null;
		this.$3$ConfirmEmailField = null;
		this.$3$PasswordField = null;
		this.$3$ConfirmPasswordField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_SignUpForm.__typeName = 'Serene.Membership.SignUpForm';
	global.Serene.Membership.SignUpForm = $Serene_Membership_SignUpForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CategoryDialog
	var $Serene_Northwind_CategoryDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_CategoryDialog.__typeName = 'Serene.Northwind.CategoryDialog';
	global.Serene.Northwind.CategoryDialog = $Serene_Northwind_CategoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CategoryForm
	var $Serene_Northwind_CategoryForm = function(idPrefix) {
		this.$3$CategoryNameField = null;
		this.$3$DescriptionField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CategoryForm.__typeName = 'Serene.Northwind.CategoryForm';
	global.Serene.Northwind.CategoryForm = $Serene_Northwind_CategoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CategoryGrid
	var $Serene_Northwind_CategoryGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_CategoryGrid.__typeName = 'Serene.Northwind.CategoryGrid';
	global.Serene.Northwind.CategoryGrid = $Serene_Northwind_CategoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCustomerDemoDialog
	var $Serene_Northwind_CustomerCustomerDemoDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_CustomerCustomerDemoDialog.__typeName = 'Serene.Northwind.CustomerCustomerDemoDialog';
	global.Serene.Northwind.CustomerCustomerDemoDialog = $Serene_Northwind_CustomerCustomerDemoDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCustomerDemoForm
	var $Serene_Northwind_CustomerCustomerDemoForm = function(idPrefix) {
		this.$3$CustomerIDField = null;
		this.$3$CustomerTypeIDField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CustomerCustomerDemoForm.__typeName = 'Serene.Northwind.CustomerCustomerDemoForm';
	global.Serene.Northwind.CustomerCustomerDemoForm = $Serene_Northwind_CustomerCustomerDemoForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCustomerDemoGrid
	var $Serene_Northwind_CustomerCustomerDemoGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_CustomerCustomerDemoGrid.__typeName = 'Serene.Northwind.CustomerCustomerDemoGrid';
	global.Serene.Northwind.CustomerCustomerDemoGrid = $Serene_Northwind_CustomerCustomerDemoGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDemographicDialog
	var $Serene_Northwind_CustomerDemographicDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_CustomerDemographicDialog.__typeName = 'Serene.Northwind.CustomerDemographicDialog';
	global.Serene.Northwind.CustomerDemographicDialog = $Serene_Northwind_CustomerDemographicDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDemographicForm
	var $Serene_Northwind_CustomerDemographicForm = function(idPrefix) {
		this.$3$CustomerTypeIDField = null;
		this.$3$CustomerDescField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CustomerDemographicForm.__typeName = 'Serene.Northwind.CustomerDemographicForm';
	global.Serene.Northwind.CustomerDemographicForm = $Serene_Northwind_CustomerDemographicForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDemographicGrid
	var $Serene_Northwind_CustomerDemographicGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_CustomerDemographicGrid.__typeName = 'Serene.Northwind.CustomerDemographicGrid';
	global.Serene.Northwind.CustomerDemographicGrid = $Serene_Northwind_CustomerDemographicGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDialog
	var $Serene_Northwind_CustomerDialog = function() {
		this.$loadedState = null;
		this.$ordersGrid = null;
		Serenity.EntityDialog.call(this);
		this.$ordersGrid = new Serene.Northwind.CustomerOrdersGrid(this.byId('OrdersGrid'));
		this.$ordersGrid.element.flexHeightOnly(1);
		this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
		Serene.DialogUtils.pendingChangesConfirmation(this.element, ss.mkdel(this, function() {
			return !ss.referenceEquals(this.$getSaveState(), this.$loadedState);
		}));
		this.tabs.bind('tabsactivate', ss.mkdel(this, function(e, i) {
			this.arrange();
		}));
	};
	$Serene_Northwind_CustomerDialog.__typeName = 'Serene.Northwind.CustomerDialog';
	global.Serene.Northwind.CustomerDialog = $Serene_Northwind_CustomerDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerEditor
	var $Serene_Northwind_CustomerEditor = function(container, options) {
		Serenity.LookupEditorBase.call(this, container, options);
	};
	$Serene_Northwind_CustomerEditor.__typeName = 'Serene.Northwind.CustomerEditor';
	global.Serene.Northwind.CustomerEditor = $Serene_Northwind_CustomerEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerForm
	var $Serene_Northwind_CustomerForm = function(idPrefix) {
		this.$3$CustomerIDField = null;
		this.$3$CompanyNameField = null;
		this.$3$ContactNameField = null;
		this.$3$ContactTitleField = null;
		this.$3$RepresentativesField = null;
		this.$3$AddressField = null;
		this.$3$CityField = null;
		this.$3$RegionField = null;
		this.$3$PostalCodeField = null;
		this.$3$CountryField = null;
		this.$3$PhoneField = null;
		this.$3$FaxField = null;
		this.$3$NoteListField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CustomerForm.__typeName = 'Serene.Northwind.CustomerForm';
	global.Serene.Northwind.CustomerForm = $Serene_Northwind_CustomerForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerGrid
	var $Serene_Northwind_CustomerGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_CustomerGrid.__typeName = 'Serene.Northwind.CustomerGrid';
	global.Serene.Northwind.CustomerGrid = $Serene_Northwind_CustomerGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerOrderDialog
	var $Serene_Northwind_CustomerOrderDialog = function() {
		$Serene_Northwind_OrderDialog.call(this);
	};
	$Serene_Northwind_CustomerOrderDialog.__typeName = 'Serene.Northwind.CustomerOrderDialog';
	global.Serene.Northwind.CustomerOrderDialog = $Serene_Northwind_CustomerOrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeDialog
	var $Serene_Northwind_EmployeeDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_EmployeeDialog.__typeName = 'Serene.Northwind.EmployeeDialog';
	global.Serene.Northwind.EmployeeDialog = $Serene_Northwind_EmployeeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeForm
	var $Serene_Northwind_EmployeeForm = function(idPrefix) {
		this.$3$LastNameField = null;
		this.$3$FirstNameField = null;
		this.$3$TitleField = null;
		this.$3$TitleOfCourtesyField = null;
		this.$3$BirthDateField = null;
		this.$3$HireDateField = null;
		this.$3$AddressField = null;
		this.$3$CityField = null;
		this.$3$RegionField = null;
		this.$3$PostalCodeField = null;
		this.$3$CountryField = null;
		this.$3$HomePhoneField = null;
		this.$3$ExtensionField = null;
		this.$3$PhotoField = null;
		this.$3$NotesField = null;
		this.$3$ReportsToField = null;
		this.$3$PhotoPathField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_EmployeeForm.__typeName = 'Serene.Northwind.EmployeeForm';
	global.Serene.Northwind.EmployeeForm = $Serene_Northwind_EmployeeForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeFormatter
	var $Serene_Northwind_EmployeeFormatter = function() {
		this.$1$GenderPropertyField = null;
	};
	$Serene_Northwind_EmployeeFormatter.__typeName = 'Serene.Northwind.EmployeeFormatter';
	global.Serene.Northwind.EmployeeFormatter = $Serene_Northwind_EmployeeFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeGrid
	var $Serene_Northwind_EmployeeGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_EmployeeGrid.__typeName = 'Serene.Northwind.EmployeeGrid';
	global.Serene.Northwind.EmployeeGrid = $Serene_Northwind_EmployeeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeTerritoryDialog
	var $Serene_Northwind_EmployeeTerritoryDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_EmployeeTerritoryDialog.__typeName = 'Serene.Northwind.EmployeeTerritoryDialog';
	global.Serene.Northwind.EmployeeTerritoryDialog = $Serene_Northwind_EmployeeTerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeTerritoryForm
	var $Serene_Northwind_EmployeeTerritoryForm = function(idPrefix) {
		this.$3$TerritoryIDField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_EmployeeTerritoryForm.__typeName = 'Serene.Northwind.EmployeeTerritoryForm';
	global.Serene.Northwind.EmployeeTerritoryForm = $Serene_Northwind_EmployeeTerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeTerritoryGrid
	var $Serene_Northwind_EmployeeTerritoryGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_EmployeeTerritoryGrid.__typeName = 'Serene.Northwind.EmployeeTerritoryGrid';
	global.Serene.Northwind.EmployeeTerritoryGrid = $Serene_Northwind_EmployeeTerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.FreightFormatter
	var $Serene_Northwind_FreightFormatter = function() {
	};
	$Serene_Northwind_FreightFormatter.__typeName = 'Serene.Northwind.FreightFormatter';
	global.Serene.Northwind.FreightFormatter = $Serene_Northwind_FreightFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.Gender
	var $Serene_Northwind_Gender = function() {
	};
	$Serene_Northwind_Gender.__typeName = 'Serene.Northwind.Gender';
	global.Serene.Northwind.Gender = $Serene_Northwind_Gender;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.NoteDialog
	var $Serene_Northwind_NoteDialog = function() {
		this.okClick = null;
		Serenity.TemplatedDialog.call(this);
		var $t2 = this.byId('Text');
		var $t1 = Serenity.HtmlContentEditorOptions.$ctor();
		$t1.rows = 12;
		new $Serenity_HtmlBasicContentEditor($t2, $t1);
	};
	$Serene_Northwind_NoteDialog.__typeName = 'Serene.Northwind.NoteDialog';
	global.Serene.Northwind.NoteDialog = $Serene_Northwind_NoteDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderDetailForm
	var $Serene_Northwind_OrderDetailForm = function(idPrefix) {
		this.$3$ProductIDField = null;
		this.$3$UnitPriceField = null;
		this.$3$QuantityField = null;
		this.$3$DiscountField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_OrderDetailForm.__typeName = 'Serene.Northwind.OrderDetailForm';
	global.Serene.Northwind.OrderDetailForm = $Serene_Northwind_OrderDetailForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderDialog
	var $Serene_Northwind_OrderDialog = function() {
		this.form = null;
		Serenity.EntityDialog.call(this);
		this.form = new $Serene_Northwind_OrderForm(this.idPrefix);
	};
	$Serene_Northwind_OrderDialog.__typeName = 'Serene.Northwind.OrderDialog';
	global.Serene.Northwind.OrderDialog = $Serene_Northwind_OrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderForm
	var $Serene_Northwind_OrderForm = function(idPrefix) {
		this.$3$CustomerIDField = null;
		this.$3$OrderDateField = null;
		this.$3$RequiredDateField = null;
		this.$3$EmployeeIDField = null;
		this.$3$DetailListField = null;
		this.$3$ShippedDateField = null;
		this.$3$ShipViaField = null;
		this.$3$FreightField = null;
		this.$3$ShipNameField = null;
		this.$3$ShipAddressField = null;
		this.$3$ShipCityField = null;
		this.$3$ShipRegionField = null;
		this.$3$ShipPostalCodeField = null;
		this.$3$ShipCountryField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_OrderForm.__typeName = 'Serene.Northwind.OrderForm';
	global.Serene.Northwind.OrderForm = $Serene_Northwind_OrderForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderShippingState
	var $Serene_Northwind_OrderShippingState = function() {
	};
	$Serene_Northwind_OrderShippingState.__typeName = 'Serene.Northwind.OrderShippingState';
	global.Serene.Northwind.OrderShippingState = $Serene_Northwind_OrderShippingState;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ProductForm
	var $Serene_Northwind_ProductForm = function(idPrefix) {
		this.$3$ProductNameField = null;
		this.$3$ProductImageField = null;
		this.$3$DiscontinuedField = null;
		this.$3$SupplierIDField = null;
		this.$3$CategoryIDField = null;
		this.$3$QuantityPerUnitField = null;
		this.$3$UnitPriceField = null;
		this.$3$UnitsInStockField = null;
		this.$3$UnitsOnOrderField = null;
		this.$3$ReorderLevelField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_ProductForm.__typeName = 'Serene.Northwind.ProductForm';
	global.Serene.Northwind.ProductForm = $Serene_Northwind_ProductForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionDialog
	var $Serene_Northwind_RegionDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_RegionDialog.__typeName = 'Serene.Northwind.RegionDialog';
	global.Serene.Northwind.RegionDialog = $Serene_Northwind_RegionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionForm
	var $Serene_Northwind_RegionForm = function(idPrefix) {
		this.$3$RegionIDField = null;
		this.$3$RegionDescriptionField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_RegionForm.__typeName = 'Serene.Northwind.RegionForm';
	global.Serene.Northwind.RegionForm = $Serene_Northwind_RegionForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionGrid
	var $Serene_Northwind_RegionGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_RegionGrid.__typeName = 'Serene.Northwind.RegionGrid';
	global.Serene.Northwind.RegionGrid = $Serene_Northwind_RegionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ShipperDialog
	var $Serene_Northwind_ShipperDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_ShipperDialog.__typeName = 'Serene.Northwind.ShipperDialog';
	global.Serene.Northwind.ShipperDialog = $Serene_Northwind_ShipperDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ShipperForm
	var $Serene_Northwind_ShipperForm = function(idPrefix) {
		this.$3$CompanyNameField = null;
		this.$3$PhoneField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_ShipperForm.__typeName = 'Serene.Northwind.ShipperForm';
	global.Serene.Northwind.ShipperForm = $Serene_Northwind_ShipperForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ShipperFormatter
	var $Serene_Northwind_ShipperFormatter = function() {
	};
	$Serene_Northwind_ShipperFormatter.__typeName = 'Serene.Northwind.ShipperFormatter';
	global.Serene.Northwind.ShipperFormatter = $Serene_Northwind_ShipperFormatter;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ShipperGrid
	var $Serene_Northwind_ShipperGrid = function(container) {
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_ShipperGrid.__typeName = 'Serene.Northwind.ShipperGrid';
	global.Serene.Northwind.ShipperGrid = $Serene_Northwind_ShipperGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.SupplierDialog
	var $Serene_Northwind_SupplierDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_SupplierDialog.__typeName = 'Serene.Northwind.SupplierDialog';
	global.Serene.Northwind.SupplierDialog = $Serene_Northwind_SupplierDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.SupplierForm
	var $Serene_Northwind_SupplierForm = function(idPrefix) {
		this.$3$CompanyNameField = null;
		this.$3$ContactNameField = null;
		this.$3$ContactTitleField = null;
		this.$3$AddressField = null;
		this.$3$CityField = null;
		this.$3$RegionField = null;
		this.$3$PostalCodeField = null;
		this.$3$CountryField = null;
		this.$3$PhoneField = null;
		this.$3$FaxField = null;
		this.$3$HomePageField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_SupplierForm.__typeName = 'Serene.Northwind.SupplierForm';
	global.Serene.Northwind.SupplierForm = $Serene_Northwind_SupplierForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.SupplierGrid
	var $Serene_Northwind_SupplierGrid = function(container) {
		this.$country = null;
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_SupplierGrid.__typeName = 'Serene.Northwind.SupplierGrid';
	global.Serene.Northwind.SupplierGrid = $Serene_Northwind_SupplierGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.TerritoryDialog
	var $Serene_Northwind_TerritoryDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_TerritoryDialog.__typeName = 'Serene.Northwind.TerritoryDialog';
	global.Serene.Northwind.TerritoryDialog = $Serene_Northwind_TerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.TerritoryForm
	var $Serene_Northwind_TerritoryForm = function(idPrefix) {
		this.$3$TerritoryIDField = null;
		this.$3$TerritoryDescriptionField = null;
		this.$3$RegionIDField = null;
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_TerritoryForm.__typeName = 'Serene.Northwind.TerritoryForm';
	global.Serene.Northwind.TerritoryForm = $Serene_Northwind_TerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.TerritoryGrid
	var $Serene_Northwind_TerritoryGrid = function(container) {
		this.$region = null;
		Serenity.EntityGrid.call(this, container);
	};
	$Serene_Northwind_TerritoryGrid.__typeName = 'Serene.Northwind.TerritoryGrid';
	global.Serene.Northwind.TerritoryGrid = $Serene_Northwind_TerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serenity.HtmlBasicContentEditor
	var $Serenity_HtmlBasicContentEditor = function(textArea, opt) {
		Serenity.HtmlContentEditor.call(this, textArea, opt);
	};
	$Serenity_HtmlBasicContentEditor.__typeName = 'Serenity.HtmlBasicContentEditor';
	global.Serenity.HtmlBasicContentEditor = $Serenity_HtmlBasicContentEditor;
	ss.initClass($Serene_Administration_LanguageForm, $asm, {
		set_languageId: function(value) {
			this.$3$LanguageIdField = value;
		},
		set_languageName: function(value) {
			this.$3$LanguageNameField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Administration_RoleForm, $asm, {
		set_roleName: function(value) {
			this.$3$RoleNameField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Administration_UserForm, $asm, {
		set_username: function(value) {
			this.$3$UsernameField = value;
		},
		set_displayName: function(value) {
			this.$3$DisplayNameField = value;
		},
		set_email: function(value) {
			this.$3$EmailField = value;
		},
		set_password: function(value) {
			this.$3$PasswordField = value;
		},
		set_passwordConfirm: function(value) {
			this.$3$PasswordConfirmField = value;
		},
		set_source: function(value) {
			this.$3$SourceField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_BasicSamples_FilteredLookupInDetailForm, $asm, {
		set_customerID: function(value) {
			this.$3$CustomerIDField = value;
		},
		set_orderDate: function(value) {
			this.$3$OrderDateField = value;
		},
		set_categoryID: function(value) {
			this.$3$CategoryIDField = value;
		},
		set_detailList: function(value) {
			this.$3$DetailListField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_BasicSamples_LookupFilterByMultipleForm, $asm, {
		set_productName: function(value) {
			this.$3$ProductNameField = value;
		},
		set_productImage: function(value) {
			this.$3$ProductImageField = value;
		},
		set_discontinued: function(value) {
			this.$3$DiscontinuedField = value;
		},
		set_supplierID: function(value) {
			this.$3$SupplierIDField = value;
		},
		set_categoryID: function(value) {
			this.$3$CategoryIDField = value;
		},
		set_quantityPerUnit: function(value) {
			this.$3$QuantityPerUnitField = value;
		},
		set_unitPrice: function(value) {
			this.$3$UnitPriceField = value;
		},
		set_unitsInStock: function(value) {
			this.$3$UnitsInStockField = value;
		},
		set_unitsOnOrder: function(value) {
			this.$3$UnitsOnOrderField = value;
		},
		set_reorderLevel: function(value) {
			this.$3$ReorderLevelField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_ChangePasswordForm, $asm, {
		set_oldPassword: function(value) {
			this.$3$OldPasswordField = value;
		},
		set_newPassword: function(value) {
			this.$3$NewPasswordField = value;
		},
		set_confirmPassword: function(value) {
			this.$3$ConfirmPasswordField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_ForgotPasswordForm, $asm, {
		set_email: function(value) {
			this.$3$EmailField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_LoginForm, $asm, {
		set_username: function(value) {
			this.$3$UsernameField = value;
		},
		set_password: function(value) {
			this.$3$PasswordField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_ResetPasswordForm, $asm, {
		set_newPassword: function(value) {
			this.$3$NewPasswordField = value;
		},
		set_confirmPassword: function(value) {
			this.$3$ConfirmPasswordField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_SignUpForm, $asm, {
		set_displayName: function(value) {
			this.$3$DisplayNameField = value;
		},
		set_email: function(value) {
			this.$3$EmailField = value;
		},
		set_confirmEmail: function(value) {
			this.$3$ConfirmEmailField = value;
		},
		set_password: function(value) {
			this.$3$PasswordField = value;
		},
		set_confirmPassword: function(value) {
			this.$3$ConfirmPasswordField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CategoryDialog, $asm, {
		getLanguages: function() {
			return Serene.LanguageList.getValue();
		}
	}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CategoryForm, $asm, {
		set_categoryName: function(value) {
			this.$3$CategoryNameField = value;
		},
		set_description: function(value) {
			this.$3$DescriptionField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CategoryGrid, $asm, {}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoForm, $asm, {
		set_customerID: function(value) {
			this.$3$CustomerIDField = value;
		},
		set_customerTypeID: function(value) {
			this.$3$CustomerTypeIDField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoGrid, $asm, {
		getColumns: function() {
			var columns = Serenity.DataGrid.prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerTypeID', width: 80 });
			return columns;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerDemographicDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CustomerDemographicForm, $asm, {
		set_customerTypeID: function(value) {
			this.$3$CustomerTypeIDField = value;
		},
		set_customerDesc: function(value) {
			this.$3$CustomerDescField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CustomerDemographicGrid, $asm, {
		getColumns: function() {
			var columns = Serenity.DataGrid.prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerTypeID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerDesc', width: 80 });
			return columns;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerDialog, $asm, {
		$getSaveState: function() {
			try {
				return $.toJSON(this.getSaveEntity());
			}
			catch ($t1) {
				return null;
			}
		},
		loadResponse: function(data) {
			Serenity.EntityDialog.prototype.loadResponse.call(this, data);
			this.$loadedState = this.$getSaveState();
		},
		loadEntity: function(entity) {
			Serenity.EntityDialog.prototype.loadEntity.call(this, entity);
			Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
			this.$ordersGrid.set_customerID(entity.CustomerID);
		},
		onSaveSuccess: function(response) {
			Serenity.EntityDialog.prototype.onSaveSuccess.call(this, response);
			Q.reloadLookup('Northwind.Customer');
		}
	}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CustomerEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.Customer';
		},
		getItemText: function(item, lookup) {
			return Serenity.LookupEditorBase.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
		}
	}, Serenity.LookupEditorBase, [Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue]);
	ss.initClass($Serene_Northwind_CustomerForm, $asm, {
		set_customerID: function(value) {
			this.$3$CustomerIDField = value;
		},
		set_companyName: function(value) {
			this.$3$CompanyNameField = value;
		},
		set_contactName: function(value) {
			this.$3$ContactNameField = value;
		},
		set_contactTitle: function(value) {
			this.$3$ContactTitleField = value;
		},
		set_representatives: function(value) {
			this.$3$RepresentativesField = value;
		},
		set_address: function(value) {
			this.$3$AddressField = value;
		},
		set_city: function(value) {
			this.$3$CityField = value;
		},
		set_region: function(value) {
			this.$3$RegionField = value;
		},
		set_postalCode: function(value) {
			this.$3$PostalCodeField = value;
		},
		set_country: function(value) {
			this.$3$CountryField = value;
		},
		set_phone: function(value) {
			this.$3$PhoneField = value;
		},
		set_fax: function(value) {
			this.$3$FaxField = value;
		},
		set_noteList: function(value) {
			this.$3$NoteListField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CustomerGrid, $asm, {
		getButtons: function() {
			var buttons = Serenity.EntityGrid.prototype.getButtons.call(this);
			buttons.push(Serene.Common.ExcelExportHelper.createToolButton({ grid: this, onViewSubmit: ss.mkdel(this, this.onViewSubmit), service: 'Northwind/Customer/ListExcel' }));
			buttons.push(Serene.Common.PdfExportHelper.createToolButton({ grid: this, onViewSubmit: ss.mkdel(this, this.onViewSubmit) }));
			return buttons;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_OrderDialog, $asm, {
		loadEntity: function(entity) {
			Serenity.EntityDialog.prototype.loadEntity.call(this, entity);
		},
		getToolbarButtons: function() {
			var buttons = Serenity.EntityDialog.prototype.getToolbarButtons.call(this);
			buttons.push(Serene.Common.ReportHelper.createToolButton({ title: 'Invoice', cssClass: 'export-pdf-button', reportKey: 'Northwind.OrderDetail', getParams: ss.mkdel(this, function() {
				return { OrderID: this.get_entityId() };
			}) }));
			return buttons;
		}
	}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CustomerOrderDialog, $asm, {
		updateInterface: function() {
			Serenity.EntityDialog.prototype.updateInterface.call(this);
			Serenity.EditorUtils.setReadOnly(this.form.w('CustomerID', Serene.Northwind.CustomerEditor), true);
		}
	}, $Serene_Northwind_OrderDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_EmployeeDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_EmployeeForm, $asm, {
		set_lastName: function(value) {
			this.$3$LastNameField = value;
		},
		set_firstName: function(value) {
			this.$3$FirstNameField = value;
		},
		set_title: function(value) {
			this.$3$TitleField = value;
		},
		set_titleOfCourtesy: function(value) {
			this.$3$TitleOfCourtesyField = value;
		},
		set_birthDate: function(value) {
			this.$3$BirthDateField = value;
		},
		set_hireDate: function(value) {
			this.$3$HireDateField = value;
		},
		set_address: function(value) {
			this.$3$AddressField = value;
		},
		set_city: function(value) {
			this.$3$CityField = value;
		},
		set_region: function(value) {
			this.$3$RegionField = value;
		},
		set_postalCode: function(value) {
			this.$3$PostalCodeField = value;
		},
		set_country: function(value) {
			this.$3$CountryField = value;
		},
		set_homePhone: function(value) {
			this.$3$HomePhoneField = value;
		},
		set_extension: function(value) {
			this.$3$ExtensionField = value;
		},
		set_photo: function(value) {
			this.$3$PhotoField = value;
		},
		set_notes: function(value) {
			this.$3$NotesField = value;
		},
		set_reportsTo: function(value) {
			this.$3$ReportsToField = value;
		},
		set_photoPath: function(value) {
			this.$3$PhotoPathField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_EmployeeFormatter, $asm, {
		format: function(ctx) {
			var text = Q.htmlEncode(ctx.value);
			if (ss.isNullOrEmptyString(this.get_genderProperty())) {
				return text;
			}
			var gender = ss.safeCast(ctx.item[this.get_genderProperty()], ss.Int32);
			return "<span class='" + ((gender === 2) ? 'employee-symbol female' : 'employee-symbol male') + "'>" + text + '</span>';
		},
		get_genderProperty: function() {
			return this.$1$GenderPropertyField;
		},
		set_genderProperty: function(value) {
			this.$1$GenderPropertyField = value;
		},
		initializeColumn: function(column) {
			column.referencedFields = column.referencedFields || [];
			if (!ss.isNullOrEmptyString(this.get_genderProperty())) {
				column.referencedFields.push(this.get_genderProperty());
				return;
			}
		}
	}, null, [Serenity.ISlickFormatter, Serenity.IInitializeColumn]);
	ss.initClass($Serene_Northwind_EmployeeGrid, $asm, {
		getColumns: function() {
			var columns = Serenity.DataGrid.prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'LastName', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'FirstName', width: 80 });
			columns.push({ field: 'Title', width: 80 });
			columns.push({ field: 'TitleOfCourtesy', width: 80 });
			columns.push({ field: 'BirthDate', width: 80 });
			columns.push({ field: 'HireDate', width: 80 });
			columns.push({ field: 'Address', width: 80 });
			columns.push({ field: 'City', width: 80 });
			columns.push({ field: 'Region', width: 80 });
			columns.push({ field: 'PostalCode', width: 80 });
			columns.push({ field: 'Country', width: 80 });
			columns.push({ field: 'HomePhone', width: 80 });
			columns.push({ field: 'Extension', width: 80 });
			columns.push({ field: 'Photo', width: 80 });
			columns.push({ field: 'Notes', width: 80 });
			columns.push({ field: 'ReportsTo', width: 80 });
			columns.push({ field: 'PhotoPath', width: 80 });
			return columns;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_EmployeeTerritoryDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_EmployeeTerritoryForm, $asm, {
		set_territoryID: function(value) {
			this.$3$TerritoryIDField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_EmployeeTerritoryGrid, $asm, {
		getColumns: function() {
			var columns = Serenity.DataGrid.prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'TerritoryID', width: 200, format: this.itemLink(null, null, null, null, true) });
			return columns;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_FreightFormatter, $asm, {
		format: function(ctx) {
			return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initEnum($Serene_Northwind_Gender, $asm, { Male: 1, Female: 2 });
	ss.initClass($Serene_Northwind_NoteDialog, $asm, {
		getTemplate: function() {
			return "<form id='~_Form' class='s-Form'><textarea id='~_Text' class='required'></textarea></form>";
		},
		getDialogOptions: function() {
			var opt = Serenity.TemplatedDialog.prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				if (!this.validateForm()) {
					return;
				}
				if (!ss.staticEquals(this.okClick, null)) {
					this.okClick();
				}
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			return opt;
		},
		get_text: function() {
			return this.byId('Text').val();
		},
		set_text: function(value) {
			this.byId('Text').val(value);
		}
	}, Serenity.TemplatedDialog, [Serenity.IDialog]);
	ss.initClass($Serene_Northwind_OrderDetailForm, $asm, {
		set_productID: function(value) {
			this.$3$ProductIDField = value;
		},
		set_unitPrice: function(value) {
			this.$3$UnitPriceField = value;
		},
		set_quantity: function(value) {
			this.$3$QuantityField = value;
		},
		set_discount: function(value) {
			this.$3$DiscountField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_OrderForm, $asm, {
		set_customerID: function(value) {
			this.$3$CustomerIDField = value;
		},
		set_orderDate: function(value) {
			this.$3$OrderDateField = value;
		},
		set_requiredDate: function(value) {
			this.$3$RequiredDateField = value;
		},
		set_employeeID: function(value) {
			this.$3$EmployeeIDField = value;
		},
		set_detailList: function(value) {
			this.$3$DetailListField = value;
		},
		set_shippedDate: function(value) {
			this.$3$ShippedDateField = value;
		},
		set_shipVia: function(value) {
			this.$3$ShipViaField = value;
		},
		set_freight: function(value) {
			this.$3$FreightField = value;
		},
		set_shipName: function(value) {
			this.$3$ShipNameField = value;
		},
		set_shipAddress: function(value) {
			this.$3$ShipAddressField = value;
		},
		set_shipCity: function(value) {
			this.$3$ShipCityField = value;
		},
		set_shipRegion: function(value) {
			this.$3$ShipRegionField = value;
		},
		set_shipPostalCode: function(value) {
			this.$3$ShipPostalCodeField = value;
		},
		set_shipCountry: function(value) {
			this.$3$ShipCountryField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initEnum($Serene_Northwind_OrderShippingState, $asm, { NotShipped: 0, Shipped: 1 });
	ss.initClass($Serene_Northwind_ProductForm, $asm, {
		set_productName: function(value) {
			this.$3$ProductNameField = value;
		},
		set_productImage: function(value) {
			this.$3$ProductImageField = value;
		},
		set_discontinued: function(value) {
			this.$3$DiscontinuedField = value;
		},
		set_supplierID: function(value) {
			this.$3$SupplierIDField = value;
		},
		set_categoryID: function(value) {
			this.$3$CategoryIDField = value;
		},
		set_quantityPerUnit: function(value) {
			this.$3$QuantityPerUnitField = value;
		},
		set_unitPrice: function(value) {
			this.$3$UnitPriceField = value;
		},
		set_unitsInStock: function(value) {
			this.$3$UnitsInStockField = value;
		},
		set_unitsOnOrder: function(value) {
			this.$3$UnitsOnOrderField = value;
		},
		set_reorderLevel: function(value) {
			this.$3$ReorderLevelField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_RegionDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_RegionForm, $asm, {
		set_regionID: function(value) {
			this.$3$RegionIDField = value;
		},
		set_regionDescription: function(value) {
			this.$3$RegionDescriptionField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_RegionGrid, $asm, {}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_ShipperDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_ShipperForm, $asm, {
		set_companyName: function(value) {
			this.$3$CompanyNameField = value;
		},
		set_phone: function(value) {
			this.$3$PhoneField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_ShipperFormatter, $asm, {
		format: function(ctx) {
			return "<span class='shipper-symbol shipper-" + ss.replaceAllString(ss.coalesce(ss.safeCast(ctx.value, String), ''), ' ', '') + "'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initClass($Serene_Northwind_ShipperGrid, $asm, {}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_SupplierDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_SupplierForm, $asm, {
		set_companyName: function(value) {
			this.$3$CompanyNameField = value;
		},
		set_contactName: function(value) {
			this.$3$ContactNameField = value;
		},
		set_contactTitle: function(value) {
			this.$3$ContactTitleField = value;
		},
		set_address: function(value) {
			this.$3$AddressField = value;
		},
		set_city: function(value) {
			this.$3$CityField = value;
		},
		set_region: function(value) {
			this.$3$RegionField = value;
		},
		set_postalCode: function(value) {
			this.$3$PostalCodeField = value;
		},
		set_country: function(value) {
			this.$3$CountryField = value;
		},
		set_phone: function(value) {
			this.$3$PhoneField = value;
		},
		set_fax: function(value) {
			this.$3$FaxField = value;
		},
		set_homePage: function(value) {
			this.$3$HomePageField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_SupplierGrid, $asm, {
		createToolbarExtensions: function() {
			Serenity.EntityGrid.prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.element).attr('placeholder', '--- ' + Q.text('Db.Northwind.Supplier.Country') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.SupplierCountry';
			this.$country = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$country, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!Serenity.DataGrid.prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('Country', this.$country.get_value());
			return true;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_TerritoryDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_TerritoryForm, $asm, {
		set_territoryID: function(value) {
			this.$3$TerritoryIDField = value;
		},
		set_territoryDescription: function(value) {
			this.$3$TerritoryDescriptionField = value;
		},
		set_regionID: function(value) {
			this.$3$RegionIDField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_TerritoryGrid, $asm, {
		createToolbarExtensions: function() {
			Serenity.EntityGrid.prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.element).attr('placeholder', '--- ' + Q.text('Db.Northwind.Territory.RegionDescription') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Region';
			this.$region = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$region, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!Serenity.DataGrid.prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('RegionID', Q.toId(this.$region.get_value()));
			return true;
		}
	}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serenity_HtmlBasicContentEditor, $asm, {
		getConfig: function() {
			var config = Serenity.HtmlContentEditor.prototype.getConfig.call(this);
			config.removeButtons += ',Cut,Copy,Paste,BulletedList,NumberedList,Indent,Outdent,SpecialChar,Subscript,Superscript,Styles,PasteText,PasteFromWord,Strike,Link,Unlink,CreatePlaceholder,Image,Table,HorizontalRule,Source,Maximize,Format,Font,FontSize,Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Superscript,RemoveFormat';
			config.removePlugins += ',elementspath';
			return config;
		}
	}, Serenity.HtmlContentEditor, [Serenity.IStringValue]);
	ss.setMetadata($Serene_Northwind_CategoryDialog, { attr: [new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.FormKeyAttribute('Northwind.Category'), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($Serene_Northwind_CategoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Category'), new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.DialogTypeAttribute($Serene_Northwind_CategoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($Serene_Northwind_CustomerCustomerDemoDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.CustomerCustomerDemo'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($Serene_Northwind_CustomerCustomerDemoGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerCustomerDemoDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($Serene_Northwind_CustomerDemographicDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.FormKeyAttribute('Northwind.CustomerDemographic'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($Serene_Northwind_CustomerDemographicGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerDemographicDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($Serene_Northwind_CustomerDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Customer'), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($Serene_Northwind_CustomerGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Customer'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($Serene_Northwind_EmployeeDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.FormKeyAttribute('Northwind.Employee'), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($Serene_Northwind_EmployeeFormatter, { members: [{ attr: [new Serenity.OptionAttribute()], name: 'GenderProperty', type: 16, returnType: String, getter: { name: 'get_GenderProperty', type: 8, sname: 'get_genderProperty', returnType: String, params: [] }, setter: { name: 'set_GenderProperty', type: 8, sname: 'set_genderProperty', returnType: Object, params: [String] } }] });
	ss.setMetadata($Serene_Northwind_EmployeeGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.DialogTypeAttribute($Serene_Northwind_EmployeeDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($Serene_Northwind_EmployeeTerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.EmployeeTerritory'), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($Serene_Northwind_EmployeeTerritoryGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($Serene_Northwind_EmployeeTerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($Serene_Northwind_Gender, { attr: [new Serenity.EnumKeyAttribute('Serene.Northwind.Entities.Gender')] });
	ss.setMetadata($Serene_Northwind_OrderDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('OrderID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($Serene_Northwind_OrderShippingState, { attr: [new Serenity.EnumKeyAttribute('Northwind.OrderShippingState')] });
	ss.setMetadata($Serene_Northwind_RegionDialog, { attr: [new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.FormKeyAttribute('Northwind.Region'), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($Serene_Northwind_RegionGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Region'), new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.DialogTypeAttribute($Serene_Northwind_RegionDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($Serene_Northwind_ShipperDialog, { attr: [new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Shipper'), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($Serene_Northwind_ShipperGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Shipper'), new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($Serene_Northwind_ShipperDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($Serene_Northwind_SupplierDialog, { attr: [new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Supplier'), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($Serene_Northwind_SupplierGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Supplier'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($Serene_Northwind_SupplierDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($Serene_Northwind_TerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.Territory'), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($Serene_Northwind_TerritoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Territory'), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($Serene_Northwind_TerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($Serenity_HtmlBasicContentEditor, { attr: [new Serenity.EditorAttribute(), new System.ComponentModel.DisplayNameAttribute('Html Content (Basic Set)'), new Serenity.OptionsTypeAttribute(Serenity.HtmlContentEditorOptions), new Serenity.ElementAttribute('<textarea />')] });
})();
