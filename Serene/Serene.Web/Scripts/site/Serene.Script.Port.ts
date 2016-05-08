

/*
(function () {
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ChangePasswordPanel
	var $Serene_Membership_ChangePasswordPanel = function(container) {
		this.$form = null;
		Serenity.PropertyPanel.call(this, container);
		this.$form = new $Serene_Membership_ChangePasswordForm(this.idPrefix);
		this.$form.w('NewPassword', Serenity.PasswordEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.w('ConfirmPassword', Serenity.PasswordEditor).get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		this.$form.w('ConfirmPassword', Serenity.PasswordEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.w('ConfirmPassword', Serenity.PasswordEditor).get_value(), this.$form.w('NewPassword', Serenity.PasswordEditor).get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.byId('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ChangePassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$Serene_Membership_ChangePasswordPanel.__typeName = 'Serene.Membership.ChangePasswordPanel';
	global.Serene.Membership.ChangePasswordPanel = $Serene_Membership_ChangePasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ForgotPasswordPanel
	var $Serene_Membership_ForgotPasswordPanel = function(container) {
		Serenity.PropertyPanel.call(this, container);
		this.byId('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ForgotPassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$Serene_Membership_ForgotPasswordPanel.__typeName = 'Serene.Membership.ForgotPasswordPanel';
	global.Serene.Membership.ForgotPasswordPanel = $Serene_Membership_ForgotPasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.LoginPanel
	var $Serene_Membership_LoginPanel = function(container) {
		Serenity.PropertyPanel.call(this, container);
		this.byId('LoginButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/Login'),
				request: request,
				onSuccess: function(response) {
					var q = Q.parseQueryString();
					var $t1 = q['returnUrl'];
					if (ss.isNullOrUndefined($t1)) {
						$t1 = q['ReturnUrl'];
					}
					var r = $t1;
					if (!ss.isNullOrEmptyString(r)) {
						window.location.href = r;
					}
					else {
						window.location.href = Q.resolveUrl('~/');
					}
				}
			});
		})));
	};
	$Serene_Membership_LoginPanel.__typeName = 'Serene.Membership.LoginPanel';
	global.Serene.Membership.LoginPanel = $Serene_Membership_LoginPanel;
	global.Serene.Membership.ResetPasswordForm = $Serene_Membership_ResetPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ResetPasswordPanel
	var $Serene_Membership_ResetPasswordPanel = function(container) {
		this.$form = null;
		Serenity.PropertyPanel.call(this, container);
		this.$form = new $Serene_Membership_ResetPasswordForm(this.idPrefix);
		this.$form.w('NewPassword', Serenity.PasswordEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.w('ConfirmPassword', Serenity.PasswordEditor).get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		this.$form.w('ConfirmPassword', Serenity.PasswordEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.w('ConfirmPassword', Serenity.PasswordEditor).get_value(), this.$form.w('NewPassword', Serenity.PasswordEditor).get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.byId('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			request.Token = this.byId('Token').val();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/ResetPassword'),
				request: request,
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function() {
						window.location.href = Q.resolveUrl('~/Account/Login');
					}, {});
				}
			});
		})));
	};
	$Serene_Membership_ResetPasswordPanel.__typeName = 'Serene.Membership.ResetPasswordPanel';
	global.Serene.Membership.ResetPasswordPanel = $Serene_Membership_ResetPasswordPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.SignUpPanel
	var $Serene_Membership_SignUpPanel = function(container) {
		this.$form = null;
		Serenity.PropertyPanel.call(this, container);
		this.$form = new $Serene_Membership_SignUpForm(this.idPrefix);
		this.$form.w('ConfirmPassword', Serenity.PasswordEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e) {
			if (!ss.referenceEquals(this.$form.w('ConfirmPassword', Serenity.PasswordEditor).get_value(), this.$form.w('Password', Serenity.PasswordEditor).get_value())) {
				return Q.text('Validation.PasswordConfirm');
			}
			return null;
		}));
		this.$form.w('ConfirmEmail', Serenity.EmailEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.w('ConfirmEmail', Serenity.EmailEditor).get_value(), this.$form.w('Email', Serenity.EmailEditor).get_value())) {
				return Q.text('Validation.EmailConfirm');
			}
			return null;
		}));
		this.byId('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/SignUp'),
				request: { DisplayName: this.$form.w('DisplayName', Serenity.StringEditor).get_value(), Email: this.$form.w('Email', Serenity.EmailEditor).get_value(), Password: this.$form.w('Password', Serenity.PasswordEditor).get_value() },
				onSuccess: function(response) {
					Q.information(Q.text('Forms.Membership.SignUp.Success'), function() {
						window.location.href = Q.resolveUrl('~/');
					}, {});
				}
			});
		})));
	};
	$Serene_Membership_SignUpPanel.__typeName = 'Serene.Membership.SignUpPanel';
	global.Serene.Membership.SignUpPanel = $Serene_Membership_SignUpPanel;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CategoryDialog
	var $Serene_Northwind_CategoryDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_CategoryDialog.__typeName = 'Serene.Northwind.CategoryDialog';
	global.Serene.Northwind.CategoryDialog = $Serene_Northwind_CategoryDialog;
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
		$Serene_DialogUtils.pendingChangesConfirmation(this.element, ss.mkdel(this, function() {
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
	// Serene.Northwind.OrderDetailDialog
	var $Serene_Northwind_OrderDetailDialog = function() {
		this.form = null;
		Serene.Common.GridEditorDialog.call(this);
		this.form = new $Serene_Northwind_OrderDetailForm(this.idPrefix);
		Serenity.WX.changeSelect2(this.form.w('ProductID', Serenity.LookupEditor), ss.mkdel(this, function(e) {
			var productID = Q.toId(this.form.w('ProductID', Serenity.LookupEditor).get_value());
			if (ss.isValue(productID)) {
				this.form.w('UnitPrice', Serenity.DecimalEditor).set_value(Q.getLookup('Northwind.Product').itemById[ss.unbox(productID)].UnitPrice);
			}
		}));
		this.form.w('Discount', Serenity.DecimalEditor).addValidationRule(this.uniqueName, ss.mkdel(this, function(e1) {
			if (ss.isValue(this.form.w('UnitPrice', Serenity.DecimalEditor).get_value()) && ss.isValue(this.form.w('Quantity', Serenity.IntegerEditor).get_value$1()) && ss.isValue(this.form.w('Discount', Serenity.DecimalEditor).get_value()) && ss.unbox(this.form.w('Discount', Serenity.DecimalEditor).get_value()) > 0 && ss.unbox(this.form.w('Discount', Serenity.DecimalEditor).get_value()) > ss.unbox(this.form.w('UnitPrice', Serenity.DecimalEditor).get_value()) * ss.unbox(this.form.w('Quantity', Serenity.IntegerEditor).get_value$1())) {
				return "Discount can't be higher than total price!";
			}
			return null;
		}));
	};
	$Serene_Northwind_OrderDetailDialog.__typeName = 'Serene.Northwind.OrderDetailDialog';
	global.Serene.Northwind.OrderDetailDialog = $Serene_Northwind_OrderDetailDialog;
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
	// Serene.Northwind.OrderShippingState
	var $Serene_Northwind_OrderShippingState = function() {
	};
	$Serene_Northwind_OrderShippingState.__typeName = 'Serene.Northwind.OrderShippingState';
	global.Serene.Northwind.OrderShippingState = $Serene_Northwind_OrderShippingState;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionDialog
	var $Serene_Northwind_RegionDialog = function() {
		Serenity.EntityDialog.call(this);
	};
	$Serene_Northwind_RegionDialog.__typeName = 'Serene.Northwind.RegionDialog';
	global.Serene.Northwind.RegionDialog = $Serene_Northwind_RegionDialog;
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
	ss.initClass($Serene_Authorization, $asm, {});
	ss.initClass($Serene_DialogUtils, $asm, {});
	ss.initClass($Serene_LanguageList, $asm, {});
	ss.initClass($Serene_ScriptInitialization, $asm, {});
	ss.initClass($Serene_Administration_LanguageForm, $asm, {
		set_languageId: function(value) {
			this.$3$LanguageIdField = value;
		},
		set_languageName: function(value) {
			this.$3$LanguageNameField = value;
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Common_LanguageSelection, $asm, {}, Serenity.Widget);
	ss.initClass($Serene_Common_SidebarSearch, $asm, {

	}, Serenity.Widget);
	ss.initClass($Serene_Membership_ChangePasswordPanel, $asm, {}, Serenity.PropertyPanel);
	ss.initClass($Serene_Membership_ForgotPasswordPanel, $asm, {}, Serenity.PropertyPanel);
	ss.initClass($Serene_Membership_LoginPanel, $asm, {}, Serenity.PropertyPanel);
	ss.initClass($Serene_Membership_ResetPasswordPanel, $asm, {}, Serenity.PropertyPanel);
	ss.initClass($Serene_Membership_SignUpPanel, $asm, {}, Serenity.PropertyPanel);
	ss.initClass($Serene_Northwind_CategoryDialog, $asm, {
		getLanguages: function() {
			return $Serene_LanguageList.get_value();
		}
	}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CategoryGrid, $asm, {}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
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
	ss.initClass($Serene_Northwind_OrderDetailDialog, $asm, {}, Serene.Common.GridEditorDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initEnum($Serene_Northwind_OrderShippingState, $asm, { NotShipped: 0, Shipped: 1 });
	ss.initClass($Serene_Northwind_PhoneEditor, $asm, {
	}, Serenity.StringEditor, [Serenity.IStringValue]);
	ss.initClass($Serene_Northwind_RegionDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_RegionGrid, $asm, {}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_ShipperDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_ShipperFormatter, $asm, {
		format: function(ctx) {
			return "<span class='shipper-symbol shipper-" + ss.replaceAllString(ss.coalesce(ss.safeCast(ctx.value, String), ''), ' ', '') + "'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initClass($Serene_Northwind_ShipperGrid, $asm, {}, Serenity.EntityGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_SupplierDialog, $asm, {}, Serenity.EntityDialog, [Serenity.IDialog, Serenity.IEditDialog]);
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
	ss.setMetadata($Serene_Membership_ChangePasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ChangePassword')] });
	ss.setMetadata($Serene_Membership_ForgotPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ForgotPassword')] });
	ss.setMetadata($Serene_Membership_LoginPanel, { attr: [new Serenity.FormKeyAttribute('Membership.Login')] });
	ss.setMetadata($Serene_Membership_ResetPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ResetPassword')] });
	ss.setMetadata($Serene_Membership_SignUpPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.SignUp')] });
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
	ss.setMetadata($Serene_Northwind_OrderDetailDialog, { attr: [new Serenity.FormKeyAttribute('Northwind.OrderDetail'), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($Serene_Northwind_OrderDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('OrderID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($Serene_Northwind_OrderShippingState, { attr: [new Serenity.EnumKeyAttribute('Northwind.OrderShippingState')] });
	ss.setMetadata($Serene_Northwind_PhoneEditor, { attr: [new Serenity.EditorAttribute()], members: [{ attr: [new Serenity.OptionAttribute()], name: 'Multiple', type: 16, returnType: Boolean, getter: { name: 'get_Multiple', type: 8, sname: 'get_multiple', returnType: Boolean, params: [] }, setter: { name: 'set_Multiple', type: 8, sname: 'set_multiple', returnType: Object, params: [Boolean] } }] });
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
*/