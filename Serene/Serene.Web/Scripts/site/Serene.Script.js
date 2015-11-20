(function() {
	'use strict';
	var $asm = {};
	global.Serene = global.Serene || {};
	global.Serene.Administration = global.Serene.Administration || {};
	global.Serene.Common = global.Serene.Common || {};
	global.Serene.Membership = global.Serene.Membership || {};
	global.Serene.Northwind = global.Serene.Northwind || {};
	ss.initAssembly($asm, 'Serene.Script');
	////////////////////////////////////////////////////////////////////////////////
	// Serene.ScriptInitialization
	var $Serene_ScriptInitialization = function() {
	};
	$Serene_ScriptInitialization.__typeName = 'Serene.ScriptInitialization';
	global.Serene.ScriptInitialization = $Serene_ScriptInitialization;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.LanguageDialog
	var $Serene_Administration_LanguageDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Administration_LanguageDialog.__typeName = 'Serene.Administration.LanguageDialog';
	global.Serene.Administration.LanguageDialog = $Serene_Administration_LanguageDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.LanguageForm
	var $Serene_Administration_LanguageForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Administration_LanguageForm.__typeName = 'Serene.Administration.LanguageForm';
	global.Serene.Administration.LanguageForm = $Serene_Administration_LanguageForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.LanguageGrid
	var $Serene_Administration_LanguageGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Administration_LanguageGrid.__typeName = 'Serene.Administration.LanguageGrid';
	global.Serene.Administration.LanguageGrid = $Serene_Administration_LanguageGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.PermissionCheckEditor
	var $Serene_Administration_PermissionCheckEditor = function(div, opt) {
		this.$containsText = null;
		this.$byParentKey = null;
		this.$rolePermissions = null;
		ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).call(this, div, opt);
		this.$rolePermissions = {};
		var titleByKey = {};
		var permissionKeys = this.$getSortedGroupAndPermissionKeys(titleByKey);
		var items = [];
		for (var $t1 = 0; $t1 < permissionKeys.length; $t1++) {
			var key = permissionKeys[$t1];
			items.push({ Key: key, ParentKey: this.$getParentKey(key), Title: titleByKey.$[key], GrantRevoke: null, IsGroup: ss.endsWithString(key, ':') });
		}
		this.$byParentKey = Enumerable.from(items).toLookup(function(x) {
			return x.ParentKey;
		});
		this.$setItems(items);
	};
	$Serene_Administration_PermissionCheckEditor.__typeName = 'Serene.Administration.PermissionCheckEditor';
	global.Serene.Administration.PermissionCheckEditor = $Serene_Administration_PermissionCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.PermissionModuleEditor
	var $Serene_Administration_PermissionModuleEditor = function(hidden) {
		ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]).call(this, hidden, null);
		var modules = {};
		var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
		for (var i = 0; i < permissions.length; i++) {
			var k = permissions[i];
			var idx1 = k.indexOf(String.fromCharCode(58));
			if (idx1 <= 0) {
				continue;
			}
			var idx2 = k.indexOf(String.fromCharCode(58), idx1 + 1);
			if (idx2 <= 0) {
				continue;
			}
			var module = k.substr(0, idx1);
			modules[module] = true;
		}
		var othersModule = false;
		for (var $t1 = 0; $t1 < permissions.length; $t1++) {
			var k1 = permissions[$t1];
			var idx11 = k1.indexOf(String.fromCharCode(58));
			if (idx11 < 0 && !ss.isValue(modules[k1])) {
				othersModule = true;
				break;
			}
		}
		var moduleList = [];
		ss.arrayAddRange(moduleList, Object.keys(modules));
		if (othersModule) {
			moduleList.push('Common');
		}
		for (var $t2 = 0; $t2 < moduleList.length; $t2++) {
			var k2 = moduleList[$t2];
			this.addItem(k2, k2, k2, false);
		}
	};
	$Serene_Administration_PermissionModuleEditor.__typeName = 'Serene.Administration.PermissionModuleEditor';
	global.Serene.Administration.PermissionModuleEditor = $Serene_Administration_PermissionModuleEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.RoleCheckEditor
	var $Serene_Administration_RoleCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$Serene_Administration_RoleCheckEditor.__typeName = 'Serene.Administration.RoleCheckEditor';
	global.Serene.Administration.RoleCheckEditor = $Serene_Administration_RoleCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.RoleDialog
	var $Serene_Administration_RoleDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Administration_RoleDialog.__typeName = 'Serene.Administration.RoleDialog';
	global.Serene.Administration.RoleDialog = $Serene_Administration_RoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.RoleForm
	var $Serene_Administration_RoleForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Administration_RoleForm.__typeName = 'Serene.Administration.RoleForm';
	global.Serene.Administration.RoleForm = $Serene_Administration_RoleForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.RoleGrid
	var $Serene_Administration_RoleGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Administration_RoleGrid.__typeName = 'Serene.Administration.RoleGrid';
	global.Serene.Administration.RoleGrid = $Serene_Administration_RoleGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.RolePermissionDialog
	var $Serene_Administration_RolePermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Serene_Administration_PermissionCheckEditor(this.byId$1('Permissions'), { showRevoke: false });
		Q.serviceRequest('Administration/RolePermission/List', { RoleID: this.options.roleID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return { PermissionKey: x };
			}).toArray());
		}), null);
	};
	$Serene_Administration_RolePermissionDialog.__typeName = 'Serene.Administration.RolePermissionDialog';
	global.Serene.Administration.RolePermissionDialog = $Serene_Administration_RolePermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.TranslationGrid
	var $Serene_Administration_TranslationGrid = function(container) {
		this.$searchText = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$targetLanguageKey = null;
		this.$hasChanges = false;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', ss.mkdel(this, function(e) {
			var value = Q.trimToNull($(e.target).val());
			if (value === '') {
				value = null;
			}
			this.view.getItemById($(e.target).data('key')).CustomText = value;
			this.$hasChanges = true;
		}));
	};
	$Serene_Administration_TranslationGrid.__typeName = 'Serene.Administration.TranslationGrid';
	global.Serene.Administration.TranslationGrid = $Serene_Administration_TranslationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.UserDialog
	var $Serene_Administration_UserDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $Serene_Administration_UserForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_password(), this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.get_password().get_value().length < 7) {
				return 'Password must be at least 7 characters!';
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_passwordConfirm(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_password().get_value(), this.$form.get_passwordConfirm().get_value())) {
				return "The passwords entered doesn't match!";
			}
			return null;
		}));
	};
	$Serene_Administration_UserDialog.__typeName = 'Serene.Administration.UserDialog';
	global.Serene.Administration.UserDialog = $Serene_Administration_UserDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.UserForm
	var $Serene_Administration_UserForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Administration_UserForm.__typeName = 'Serene.Administration.UserForm';
	global.Serene.Administration.UserForm = $Serene_Administration_UserForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.UserGrid
	var $Serene_Administration_UserGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Administration_UserGrid.__typeName = 'Serene.Administration.UserGrid';
	global.Serene.Administration.UserGrid = $Serene_Administration_UserGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.UserPermissionDialog
	var $Serene_Administration_UserPermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Serene_Administration_PermissionCheckEditor(this.byId$1('Permissions'), { showRevoke: true });
		Q.serviceRequest('Administration/UserPermission/List', { UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
		Q.serviceRequest('Administration/UserPermission/ListRolePermissions', { UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response1) {
			this.$permissions.set_rolePermissions(response1.Entities);
		}), null);
	};
	$Serene_Administration_UserPermissionDialog.__typeName = 'Serene.Administration.UserPermissionDialog';
	global.Serene.Administration.UserPermissionDialog = $Serene_Administration_UserPermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Administration.UserRoleDialog
	var $Serene_Administration_UserRoleDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $Serene_Administration_RoleCheckEditor(this.byId$1('Roles'));
		Q.serviceRequest('Administration/UserRole/List', { UserID: this.options.userID }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return x.toString();
			}).toArray());
		}), null);
	};
	$Serene_Administration_UserRoleDialog.__typeName = 'Serene.Administration.UserRoleDialog';
	global.Serene.Administration.UserRoleDialog = $Serene_Administration_UserRoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Common.GridEditorBase
	var $Serene_Common_GridEditorBase$1 = function(TEntity) {
		var $type = function(container) {
			this.$nextId = 1;
			ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]).call(this, container);
		};
		ss.registerGenericClassInstance($type, $Serene_Common_GridEditorBase$1, [TEntity], {
			id: function(entity) {
				return ss.cast(entity.__id, ss.Int32);
			},
			save: function(opt, callback) {
				var request = opt.request;
				var row = Q$Externals.deepClone(request.Entity);
				var id = ss.cast(row.__id, ss.Int32);
				if (ss.isNullOrUndefined(id)) {
					row.__id = this.$nextId++;
				}
				if (!this.validateEntity(row, id)) {
					return;
				}
				var items = ss.arrayClone(this.view.getItems());
				if (ss.isNullOrUndefined(id)) {
					items.push(row);
				}
				else {
					var index = Enumerable.from(items).indexOf(ss.mkdel(this, function(x) {
						return this.id(x) === ss.unbox(id);
					}));
					items[index] = Q$Externals.deepClone(ss.createInstance(TEntity), items[index], row);
				}
				this.setEntities(items);
				callback({});
			},
			deleteEntity: function(id) {
				this.view.deleteItem(id);
				return true;
			},
			validateEntity: function(row, id) {
				return true;
			},
			setEntities: function(items) {
				this.view.setItems(items, true);
			},
			getNewEntity: function() {
				return ss.createInstance(TEntity);
			},
			getButtons: function() {
				var $t1 = [];
				$t1.push({ title: this.getAddButtonCaption(), cssClass: 'add-button', onClick: ss.mkdel(this, function() {
					this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
						var dialog = ss.cast(dlg, ss.makeGenericType($Serene_Common_GridEditorDialog$1, [TEntity]));
						dialog.set_onSave(ss.mkdel(this, this.save));
						dialog.loadEntityAndOpenDialog(this.getNewEntity());
					}));
				}) });
				return $t1;
			},
			editItem: function(entityOrId) {
				var id = ss.unbox(Serenity.IdExtensions.toInt32(entityOrId));
				var item = this.view.getItemById(id);
				this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
					var dialog = ss.cast(dlg, ss.makeGenericType($Serene_Common_GridEditorDialog$1, [TEntity]));
					dialog.set_onDelete(ss.mkdel(this, function(opt, callback) {
						if (!this.deleteEntity(id)) {
							return;
						}
						callback({});
					}));
					dialog.set_onSave(ss.mkdel(this, this.save));
					dialog.loadEntityAndOpenDialog(item);
				}));
			},
			getEditValue: function(property, target) {
				target[property.name] = this.get_value();
			},
			setEditValue: function(source, property) {
				this.set_value(ss.cast(source[property.name], Array));
			},
			get_value: function() {
				return Enumerable.from(this.view.getItems()).select(function(x) {
					var y = Q$Externals.deepClone(x);
					delete y['__id'];
					return y;
				}).toArray();
			},
			set_value: function(value) {
				this.view.setItems(Enumerable.from(value || []).select(ss.mkdel(this, function(x) {
					var y = Q$Externals.deepClone(x);
					y.__id = this.$nextId++;
					return y;
				})).toArray(), true);
			},
			getGridCanLoad: function() {
				return false;
			},
			usePager: function() {
				return false;
			},
			getInitialTitle: function() {
				return null;
			},
			createQuickSearchInput: function() {
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]);
		}, function() {
			return [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$Serene_Common_GridEditorBase$1.__typeName = 'Serene.Common.GridEditorBase$1';
	ss.initGenericClass($Serene_Common_GridEditorBase$1, $asm, 1);
	global.Serene.Common.GridEditorBase$1 = $Serene_Common_GridEditorBase$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Common.GridEditorDialog
	var $Serene_Common_GridEditorDialog$1 = function(TEntity) {
		var $type = function() {
			this.$8$OnSaveField = null;
			this.$8$OnDeleteField = null;
			ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]).call(this);
		};
		ss.registerGenericClassInstance($type, $Serene_Common_GridEditorDialog$1, [TEntity], {
			destroy: function() {
				this.set_onSave(null);
				this.set_onDelete(null);
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.destroy.call(this);
			},
			updateInterface: function() {
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.updateInterface.call(this);
				// apply changes button doesn't work properly with in-memory grids yet
				if (ss.isValue(this.applyChangesButton)) {
					this.applyChangesButton.hide();
				}
			},
			saveHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onSave(), null)) {
					this.get_onSave()(options, callback);
				}
			},
			deleteHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onDelete(), null)) {
					this.get_onDelete()(options, callback);
				}
			},
			get_onSave: function() {
				return this.$8$OnSaveField;
			},
			set_onSave: function(value) {
				this.$8$OnSaveField = value;
			},
			get_onDelete: function() {
				return this.$8$OnDeleteField;
			},
			set_onDelete: function(value) {
				this.$8$OnDeleteField = value;
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]);
		}, function() {
			return [Serenity.IDialog, Serenity.IEditDialog];
		});
		ss.setMetadata($type, { attr: [new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$Serene_Common_GridEditorDialog$1.__typeName = 'Serene.Common.GridEditorDialog$1';
	ss.initGenericClass($Serene_Common_GridEditorDialog$1, $asm, 1);
	global.Serene.Common.GridEditorDialog$1 = $Serene_Common_GridEditorDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Common.LanguageSelection
	var $Serene_Common_LanguageSelection = function(hidden, currentLanguage) {
		this.$currentLanguage = null;
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
		this.$currentLanguage = ss.coalesce(currentLanguage, 'en');
		this.set_value('en');
		var self = this;
		Serenity.WX.changeSelect2(this, function(e) {
			$.cookie('LanguagePreference', self.get_value(), { path: Q$Config.applicationPath });
			window.location.reload(true);
		});
	};
	$Serene_Common_LanguageSelection.__typeName = 'Serene.Common.LanguageSelection';
	global.Serene.Common.LanguageSelection = $Serene_Common_LanguageSelection;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Common.SidebarSearch
	var $Serene_Common_SidebarSearch = function(input, menuUL) {
		this.$menuUL = null;
		Serenity.Widget.call(this, input);
		var self = this;
		var $t1 = Serenity.QuickSearchInputOptions.$ctor();
		$t1.onSearch = function(field, text, success) {
			self.$updateMatchFlags(text);
			success(true);
		};
		new Serenity.QuickSearchInput(input, $t1);
		this.$menuUL = menuUL;
	};
	$Serene_Common_SidebarSearch.__typeName = 'Serene.Common.SidebarSearch';
	global.Serene.Common.SidebarSearch = $Serene_Common_SidebarSearch;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ChangePasswordForm
	var $Serene_Membership_ChangePasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_ChangePasswordForm.__typeName = 'Serene.Membership.ChangePasswordForm';
	global.Serene.Membership.ChangePasswordForm = $Serene_Membership_ChangePasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ChangePasswordPanel
	var $Serene_Membership_ChangePasswordPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $Serene_Membership_ChangePasswordForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_newPassword(), this.get_uniqueName(), ss.mkdel(this, function(e) {
			if (this.$form.get_confirmPassword().get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.get_uniqueName(), ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_newPassword().get_value())) {
				return Q.text('Validation.PasswordConfirmMismatch');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
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
	// Serene.Membership.ForgotPasswordForm
	var $Serene_Membership_ForgotPasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_ForgotPasswordForm.__typeName = 'Serene.Membership.ForgotPasswordForm';
	global.Serene.Membership.ForgotPasswordForm = $Serene_Membership_ForgotPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ForgotPasswordPanel
	var $Serene_Membership_ForgotPasswordPanel = function(container) {
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
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
	// Serene.Membership.LoginForm
	var $Serene_Membership_LoginForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_LoginForm.__typeName = 'Serene.Membership.LoginForm';
	global.Serene.Membership.LoginForm = $Serene_Membership_LoginForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.LoginPanel
	var $Serene_Membership_LoginPanel = function(container) {
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.byId$1('LoginButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/Login'),
				request: request,
				onSuccess: function(response) {
					var q = Q$Externals.parseQueryString();
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
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ResetPasswordForm
	var $Serene_Membership_ResetPasswordForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Membership_ResetPasswordForm.__typeName = 'Serene.Membership.ResetPasswordForm';
	global.Serene.Membership.ResetPasswordForm = $Serene_Membership_ResetPasswordForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Membership.ResetPasswordPanel
	var $Serene_Membership_ResetPasswordPanel = function(container) {
		this.$form = null;
		ss.makeGenericType(Serenity.PropertyPanel$1, [Object]).call(this, container);
		this.$form = new $Serene_Membership_ResetPasswordForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_newPassword(), this.get_uniqueName(), ss.mkdel(this, function(e) {
			if (this.$form.get_confirmPassword().get_value().length < 7) {
				return ss.formatString(Q.text('Validation.MinRequiredPasswordLength'), 7);
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_confirmPassword(), this.get_uniqueName(), ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_confirmPassword().get_value(), this.$form.get_newPassword().get_value())) {
				return Q.text('Validation.PasswordConfirmMismatch');
			}
			return null;
		}));
		this.byId$1('SubmitButton').click(ss.thisFix(ss.mkdel(this, function(s, e2) {
			e2.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			request.Token = this.byId$1('Token').val();
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
	// Serene.Northwind.CategoryDialog
	var $Serene_Northwind_CategoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_CategoryDialog.__typeName = 'Serene.Northwind.CategoryDialog';
	global.Serene.Northwind.CategoryDialog = $Serene_Northwind_CategoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CategoryForm
	var $Serene_Northwind_CategoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CategoryForm.__typeName = 'Serene.Northwind.CategoryForm';
	global.Serene.Northwind.CategoryForm = $Serene_Northwind_CategoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CategoryGrid
	var $Serene_Northwind_CategoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_CategoryGrid.__typeName = 'Serene.Northwind.CategoryGrid';
	global.Serene.Northwind.CategoryGrid = $Serene_Northwind_CategoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCityEditor
	var $Serene_Northwind_CustomerCityEditor = function(container) {
		this.$countryLink = null;
		this.$country = null;
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, container);
		this.$countryLink = new (ss.makeGenericType(Serenity.CascadedWidgetLink$1, [Serenity.LookupEditor]))(this, ss.mkdel(this, function(p) {
			this.set_country(p.get_value());
		}));
	};
	$Serene_Northwind_CustomerCityEditor.__typeName = 'Serene.Northwind.CustomerCityEditor';
	global.Serene.Northwind.CustomerCityEditor = $Serene_Northwind_CustomerCityEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCustomerDemoDialog
	var $Serene_Northwind_CustomerCustomerDemoDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_CustomerCustomerDemoDialog.__typeName = 'Serene.Northwind.CustomerCustomerDemoDialog';
	global.Serene.Northwind.CustomerCustomerDemoDialog = $Serene_Northwind_CustomerCustomerDemoDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCustomerDemoForm
	var $Serene_Northwind_CustomerCustomerDemoForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CustomerCustomerDemoForm.__typeName = 'Serene.Northwind.CustomerCustomerDemoForm';
	global.Serene.Northwind.CustomerCustomerDemoForm = $Serene_Northwind_CustomerCustomerDemoForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerCustomerDemoGrid
	var $Serene_Northwind_CustomerCustomerDemoGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_CustomerCustomerDemoGrid.__typeName = 'Serene.Northwind.CustomerCustomerDemoGrid';
	global.Serene.Northwind.CustomerCustomerDemoGrid = $Serene_Northwind_CustomerCustomerDemoGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDemographicDialog
	var $Serene_Northwind_CustomerDemographicDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_CustomerDemographicDialog.__typeName = 'Serene.Northwind.CustomerDemographicDialog';
	global.Serene.Northwind.CustomerDemographicDialog = $Serene_Northwind_CustomerDemographicDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDemographicForm
	var $Serene_Northwind_CustomerDemographicForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CustomerDemographicForm.__typeName = 'Serene.Northwind.CustomerDemographicForm';
	global.Serene.Northwind.CustomerDemographicForm = $Serene_Northwind_CustomerDemographicForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDemographicGrid
	var $Serene_Northwind_CustomerDemographicGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_CustomerDemographicGrid.__typeName = 'Serene.Northwind.CustomerDemographicGrid';
	global.Serene.Northwind.CustomerDemographicGrid = $Serene_Northwind_CustomerDemographicGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerDialog
	var $Serene_Northwind_CustomerDialog = function() {
		this.$ordersGrid = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$ordersGrid = new $Serene_Northwind_CustomerOrdersGrid(this.byId$1('OrdersGrid'));
		Serenity.FLX.flexHeightOnly(this.$ordersGrid.get_element(), 1);
		this.tabs.bind('tabsactivate', ss.mkdel(this, function(e, i) {
			this.arrange();
		}));
	};
	$Serene_Northwind_CustomerDialog.__typeName = 'Serene.Northwind.CustomerDialog';
	global.Serene.Northwind.CustomerDialog = $Serene_Northwind_CustomerDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerEditor
	var $Serene_Northwind_CustomerEditor = function(container) {
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, container);
	};
	$Serene_Northwind_CustomerEditor.__typeName = 'Serene.Northwind.CustomerEditor';
	global.Serene.Northwind.CustomerEditor = $Serene_Northwind_CustomerEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerForm
	var $Serene_Northwind_CustomerForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_CustomerForm.__typeName = 'Serene.Northwind.CustomerForm';
	global.Serene.Northwind.CustomerForm = $Serene_Northwind_CustomerForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.CustomerGrid
	var $Serene_Northwind_CustomerGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
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
	// Serene.Northwind.CustomerOrdersGrid
	var $Serene_Northwind_CustomerOrdersGrid = function(container) {
		this.$customerID = null;
		$Serene_Northwind_OrderGrid.call(this, container);
	};
	$Serene_Northwind_CustomerOrdersGrid.__typeName = 'Serene.Northwind.CustomerOrdersGrid';
	global.Serene.Northwind.CustomerOrdersGrid = $Serene_Northwind_CustomerOrdersGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeDialog
	var $Serene_Northwind_EmployeeDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_EmployeeDialog.__typeName = 'Serene.Northwind.EmployeeDialog';
	global.Serene.Northwind.EmployeeDialog = $Serene_Northwind_EmployeeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeForm
	var $Serene_Northwind_EmployeeForm = function(idPrefix) {
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
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_EmployeeGrid.__typeName = 'Serene.Northwind.EmployeeGrid';
	global.Serene.Northwind.EmployeeGrid = $Serene_Northwind_EmployeeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeTerritoryDialog
	var $Serene_Northwind_EmployeeTerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_EmployeeTerritoryDialog.__typeName = 'Serene.Northwind.EmployeeTerritoryDialog';
	global.Serene.Northwind.EmployeeTerritoryDialog = $Serene_Northwind_EmployeeTerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeTerritoryForm
	var $Serene_Northwind_EmployeeTerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_EmployeeTerritoryForm.__typeName = 'Serene.Northwind.EmployeeTerritoryForm';
	global.Serene.Northwind.EmployeeTerritoryForm = $Serene_Northwind_EmployeeTerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.EmployeeTerritoryGrid
	var $Serene_Northwind_EmployeeTerritoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
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
	// Serene.Northwind.OrderDetailDialog
	var $Serene_Northwind_OrderDetailDialog = function() {
		this.$form = null;
		ss.makeGenericType($Serene_Common_GridEditorDialog$1, [Object]).call(this);
		this.$form = new $Serene_Northwind_OrderDetailForm(this.get_idPrefix());
		Serenity.WX.changeSelect2(this.$form.get_productID(), ss.mkdel(this, function(e) {
			var productID = Serenity.IdExtensions.toInt32(this.$form.get_productID().get_value());
			if (ss.isValue(productID)) {
				this.$form.get_unitPrice().set_value(Q.getLookup('Northwind.Product').get_itemById()[ss.unbox(productID)].UnitPrice);
			}
		}));
		Serenity.VX.addValidationRule(this.$form.get_discount(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (ss.isValue(this.$form.get_unitPrice().get_value()) && ss.isValue(this.$form.get_quantity().get_value$1()) && ss.isValue(this.$form.get_discount().get_value()) && ss.unbox(this.$form.get_discount().get_value()) > 0 && ss.unbox(this.$form.get_discount().get_value()) > ss.unbox(this.$form.get_unitPrice().get_value()) * ss.unbox(this.$form.get_quantity().get_value$1())) {
				return "Discount can't be higher than total price!";
			}
			return null;
		}));
	};
	$Serene_Northwind_OrderDetailDialog.__typeName = 'Serene.Northwind.OrderDetailDialog';
	global.Serene.Northwind.OrderDetailDialog = $Serene_Northwind_OrderDetailDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderDetailForm
	var $Serene_Northwind_OrderDetailForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_OrderDetailForm.__typeName = 'Serene.Northwind.OrderDetailForm';
	global.Serene.Northwind.OrderDetailForm = $Serene_Northwind_OrderDetailForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderDetailsEditor
	var $Serene_Northwind_OrderDetailsEditor = function(container) {
		ss.makeGenericType($Serene_Common_GridEditorBase$1, [Object]).call(this, container);
	};
	$Serene_Northwind_OrderDetailsEditor.__typeName = 'Serene.Northwind.OrderDetailsEditor';
	global.Serene.Northwind.OrderDetailsEditor = $Serene_Northwind_OrderDetailsEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderDialog
	var $Serene_Northwind_OrderDialog = function() {
		this.form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.form = new $Serene_Northwind_OrderForm(this.get_idPrefix());
	};
	$Serene_Northwind_OrderDialog.__typeName = 'Serene.Northwind.OrderDialog';
	global.Serene.Northwind.OrderDialog = $Serene_Northwind_OrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderForm
	var $Serene_Northwind_OrderForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_OrderForm.__typeName = 'Serene.Northwind.OrderForm';
	global.Serene.Northwind.OrderForm = $Serene_Northwind_OrderForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderGrid
	var $Serene_Northwind_OrderGrid = function(container) {
		this.$7$CustomerFilterField = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_OrderGrid.__typeName = 'Serene.Northwind.OrderGrid';
	global.Serene.Northwind.OrderGrid = $Serene_Northwind_OrderGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderShipCityEditor
	var $Serene_Northwind_OrderShipCityEditor = function(container) {
		this.$countryLink = null;
		this.$country = null;
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, container);
		this.$countryLink = new (ss.makeGenericType(Serenity.CascadedWidgetLink$1, [Serenity.LookupEditor]))(this, ss.mkdel(this, function(p) {
			this.set_country(p.get_value());
		}));
	};
	$Serene_Northwind_OrderShipCityEditor.__typeName = 'Serene.Northwind.OrderShipCityEditor';
	global.Serene.Northwind.OrderShipCityEditor = $Serene_Northwind_OrderShipCityEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.OrderShippingState
	var $Serene_Northwind_OrderShippingState = function() {
	};
	$Serene_Northwind_OrderShippingState.__typeName = 'Serene.Northwind.OrderShippingState';
	global.Serene.Northwind.OrderShippingState = $Serene_Northwind_OrderShippingState;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.PhoneEditor
	var $Serene_Northwind_PhoneEditor = function(input) {
		this.$5$MultipleField = false;
		Serenity.StringEditor.call(this, input);
		Serenity.VX.addValidationRule(this, this.uniqueName, ss.mkdel(this, function(e) {
			var value = Q.trimToNull(this.get_value());
			if (ss.isNullOrUndefined(value)) {
				return null;
			}
			return $Serene_Northwind_PhoneEditor.$validate(value, this.get_multiple());
		}));
		input.bind('change', ss.mkdel(this, function(e1) {
			if (!Serenity.WX.hasOriginalEvent(e1)) {
				return;
			}
			this.formatValue();
		}));
		input.bind('blur', ss.mkdel(this, function(e2) {
			if (this.element.hasClass('valid')) {
				this.formatValue();
			}
		}));
	};
	$Serene_Northwind_PhoneEditor.__typeName = 'Serene.Northwind.PhoneEditor';
	$Serene_Northwind_PhoneEditor.$validate = function(phone, isMultiple) {
		var valid = (isMultiple ? $Serene_Northwind_PhoneEditor.$isValidMulti(phone, $Serene_Northwind_PhoneEditor.$isValidPhone) : $Serene_Northwind_PhoneEditor.$isValidPhone(phone));
		if (valid) {
			return null;
		}
		return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
	};
	$Serene_Northwind_PhoneEditor.$isValidPhone = function(phone) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		phone = ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', '');
		if (phone.length < 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		if (ss.startsWithString(phone, '(') && phone.charCodeAt(4) === 41) {
			phone = phone.substr(1, 3) + phone.substring(5);
		}
		if (phone.length !== 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			return false;
		}
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charCodeAt(i);
			if (c < 48 || c > 57) {
				return false;
			}
		}
		return true;
	};
	$Serene_Northwind_PhoneEditor.$formatPhone = function(phone) {
		if (!$Serene_Northwind_PhoneEditor.$isValidPhone(phone)) {
			return phone;
		}
		phone = ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', ''), '(', ''), ')', '');
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
		return phone;
	};
	$Serene_Northwind_PhoneEditor.$formatMulti = function(phone, format) {
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var result = '';
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (result.length > 0) {
				result += ', ';
			}
			result += format(s);
		}
		return result;
	};
	$Serene_Northwind_PhoneEditor.$isValidMulti = function(phone, check) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var anyValid = false;
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (!check(s)) {
				return false;
			}
			anyValid = true;
		}
		if (!anyValid) {
			return false;
		}
		return true;
	};
	global.Serene.Northwind.PhoneEditor = $Serene_Northwind_PhoneEditor;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ProductDialog
	var $Serene_Northwind_ProductDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_ProductDialog.__typeName = 'Serene.Northwind.ProductDialog';
	global.Serene.Northwind.ProductDialog = $Serene_Northwind_ProductDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ProductForm
	var $Serene_Northwind_ProductForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_ProductForm.__typeName = 'Serene.Northwind.ProductForm';
	global.Serene.Northwind.ProductForm = $Serene_Northwind_ProductForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ProductGrid
	var $Serene_Northwind_ProductGrid = function(container) {
		this.$supplier = null;
		this.$category = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_ProductGrid.__typeName = 'Serene.Northwind.ProductGrid';
	global.Serene.Northwind.ProductGrid = $Serene_Northwind_ProductGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionDialog
	var $Serene_Northwind_RegionDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_RegionDialog.__typeName = 'Serene.Northwind.RegionDialog';
	global.Serene.Northwind.RegionDialog = $Serene_Northwind_RegionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionForm
	var $Serene_Northwind_RegionForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_RegionForm.__typeName = 'Serene.Northwind.RegionForm';
	global.Serene.Northwind.RegionForm = $Serene_Northwind_RegionForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.RegionGrid
	var $Serene_Northwind_RegionGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_RegionGrid.__typeName = 'Serene.Northwind.RegionGrid';
	global.Serene.Northwind.RegionGrid = $Serene_Northwind_RegionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ShipperDialog
	var $Serene_Northwind_ShipperDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_ShipperDialog.__typeName = 'Serene.Northwind.ShipperDialog';
	global.Serene.Northwind.ShipperDialog = $Serene_Northwind_ShipperDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.ShipperForm
	var $Serene_Northwind_ShipperForm = function(idPrefix) {
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
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_ShipperGrid.__typeName = 'Serene.Northwind.ShipperGrid';
	global.Serene.Northwind.ShipperGrid = $Serene_Northwind_ShipperGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.SupplierDialog
	var $Serene_Northwind_SupplierDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_SupplierDialog.__typeName = 'Serene.Northwind.SupplierDialog';
	global.Serene.Northwind.SupplierDialog = $Serene_Northwind_SupplierDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.SupplierForm
	var $Serene_Northwind_SupplierForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_SupplierForm.__typeName = 'Serene.Northwind.SupplierForm';
	global.Serene.Northwind.SupplierForm = $Serene_Northwind_SupplierForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.SupplierGrid
	var $Serene_Northwind_SupplierGrid = function(container) {
		this.$country = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_SupplierGrid.__typeName = 'Serene.Northwind.SupplierGrid';
	global.Serene.Northwind.SupplierGrid = $Serene_Northwind_SupplierGrid;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.TerritoryDialog
	var $Serene_Northwind_TerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$Serene_Northwind_TerritoryDialog.__typeName = 'Serene.Northwind.TerritoryDialog';
	global.Serene.Northwind.TerritoryDialog = $Serene_Northwind_TerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.TerritoryForm
	var $Serene_Northwind_TerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$Serene_Northwind_TerritoryForm.__typeName = 'Serene.Northwind.TerritoryForm';
	global.Serene.Northwind.TerritoryForm = $Serene_Northwind_TerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// Serene.Northwind.TerritoryGrid
	var $Serene_Northwind_TerritoryGrid = function(container) {
		this.$region = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$Serene_Northwind_TerritoryGrid.__typeName = 'Serene.Northwind.TerritoryGrid';
	global.Serene.Northwind.TerritoryGrid = $Serene_Northwind_TerritoryGrid;
	ss.initClass($Serene_ScriptInitialization, $asm, {});
	ss.initClass($Serene_Administration_LanguageDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Administration_LanguageForm, $asm, {
		get_languageId: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageId');
		},
		get_languageName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Administration_LanguageGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Administration_PermissionCheckEditor, $asm, {
		$getItemGrantRevokeClass: function(item, grant) {
			if (!item.IsGroup) {
				return ((item.GrantRevoke === grant) ? ' checked' : '');
			}
			var desc = this.$getDescendants(item, true);
			var granted = Enumerable.from(desc).where(function(x) {
				return x.GrantRevoke === grant;
			});
			if (!granted.any()) {
				return '';
			}
			else if (Enumerable.from(desc).count() === granted.count()) {
				return 'checked';
			}
			else {
				return 'checked partial';
			}
		},
		$getItemEffectiveClass: function(item) {
			if (item.IsGroup) {
				var desc = this.$getDescendants(item, true);
				var grantCount = Enumerable.from(desc).count(ss.mkdel(this, function(x) {
					return x.GrantRevoke === true || ss.isNullOrUndefined(x.GrantRevoke) && this.$rolePermissions[x.Key];
				}));
				if (grantCount === desc.length || desc.length === 0) {
					return 'allow';
				}
				else if (grantCount === 0) {
					return 'deny';
				}
				else {
					return 'partial';
				}
			}
			else {
				var granted = item.GrantRevoke === true || ss.isNullOrUndefined(item.GrantRevoke) && this.$rolePermissions[item.Key];
				return (granted ? ' allow' : ' deny');
			}
		},
		getColumns: function() {
			var $t1 = [];
			$t1.push({ name: Q.text('Site.UserPermissionDialog.Permission'), field: 'Title', format: Serenity.SlickFormatting.treeToggle(Object).call(null, ss.mkdel(this, function() {
				return this.get_view();
			}), function(x) {
				return x.Key;
			}, ss.mkdel(this, function(ctx) {
				var item = ctx.item;
				var klass = this.$getItemEffectiveClass(item);
				return "<span class='effective-permission " + klass + "'>" + Q.htmlEncode(ctx.value) + '</span>';
			})), width: 495, sortable: false });
			$t1.push({ name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant', format: ss.mkdel(this, function(ctx1) {
				var item1 = ctx1.item;
				var klass1 = this.$getItemGrantRevokeClass(item1, true);
				return "<span class='check-box grant no-float " + klass1 + "'></span>";
			}), width: 65, sortable: false, headerCssClass: 'align-center', cssClass: 'align-center' });
			var columns = $t1;
			if (this.options.showRevoke) {
				columns.push({ name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke', format: ss.mkdel(this, function(ctx2) {
					var item2 = ctx2.item;
					var klass2 = this.$getItemGrantRevokeClass(item2, false);
					return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
				}), width: 65, sortable: false, headerCssClass: 'align-center', cssClass: 'align-center' });
			}
			return columns;
		},
		$setItems: function(items) {
			Serenity.SlickTreeHelper.setIndents(items, function(x) {
				return x.Key;
			}, function(x1) {
				return x1.ParentKey;
			}, false);
			this.get_view().setItems(items, true);
		},
		onViewSubmit: function() {
			return false;
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (!Serenity.SlickTreeHelper.filterById(item, this.view, function(x) {
				return x.ParentKey;
			})) {
				return false;
			}
			if (!ss.isNullOrEmptyString(this.$containsText)) {
				return this.$matchContains(item) || item.IsGroup && Enumerable.from(this.$getDescendants(item, false)).any(ss.mkdel(this, this.$matchContains));
			}
			return true;
		},
		$matchContains: function(item) {
			return Select2.util.stripDiacritics(ss.coalesce(item.Title, '')).toLowerCase().indexOf(this.$containsText) >= 0;
		},
		$getDescendants: function(item, excludeGroups) {
			var result = [];
			var stack = new Array();
			stack.push(item);
			while (stack.length > 0) {
				var i = stack.pop();
				var $t1 = this.$byParentKey.get(i.Key).getEnumerator();
				try {
					while ($t1.moveNext()) {
						var child = $t1.current();
						if (!excludeGroups || !child.IsGroup) {
							result.push(child);
						}
						stack.push(child);
					}
				}
				finally {
					$t1.dispose();
				}
			}
			return result;
		},
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (!e.isDefaultPrevented()) {
				Serenity.SlickTreeHelper.toggleClick(Object).call(null, e, row, cell, this.view, function(x) {
					return x.Key;
				});
			}
			if (e.isDefaultPrevented()) {
				return;
			}
			var target = $(e.target);
			var grant = target.hasClass('grant');
			if (ss.unbox(grant) || target.hasClass('revoke')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
				if (checkedOrPartial) {
					grant = null;
				}
				else {
					grant = !!(ss.unbox(grant) ^ checkedOrPartial);
				}
				this.view.beginUpdate();
				try {
					if (item.IsGroup) {
						var $t1 = this.$getDescendants(item, true);
						for (var $t2 = 0; $t2 < $t1.length; $t2++) {
							var d = $t1[$t2];
							if (!ss.referenceEquals(d.GrantRevoke, grant)) {
								d.GrantRevoke = grant;
								this.view.updateItem(d.Key, d);
							}
						}
					}
					else if (!ss.referenceEquals(item.GrantRevoke, grant)) {
						item.GrantRevoke = grant;
						this.view.updateItem(item.Key, item);
					}
				}
				finally {
					this.view.endUpdate();
				}
			}
		},
		$getParentKey: function(key) {
			if (ss.endsWithString(key, ':')) {
				key = key.substr(0, key.length - 1);
			}
			var idx = key.lastIndexOf(String.fromCharCode(58));
			if (idx >= 0) {
				return key.substr(0, idx + 1);
			}
			return null;
		},
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Select2.util.stripDiacritics(ss.coalesce(Q.trimToNull(text), '')).toLowerCase();
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		$getSortedGroupAndPermissionKeys: function(titleByKey) {
			var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
			titleByKey.$ = {};
			var titleWithGroup = {};
			for (var $t1 = 0; $t1 < keys.length; $t1++) {
				var k = keys[$t1];
				var s = k;
				if (ss.isNullOrEmptyString(s)) {
					continue;
				}
				if (ss.endsWithString(s, ':')) {
					s = s.substr(0, s.length - 1);
					if (s.length === 0) {
						continue;
					}
				}
				if (ss.keyExists(titleByKey.$, s)) {
					continue;
				}
				titleByKey.$[s] = ss.coalesce(Q.tryGetText('Permission.' + s), s);
				var parts = s.split(String.fromCharCode(58));
				var group = '';
				var groupTitle = '';
				for (var i = 0; i < parts.length - 1; i++) {
					group = group + parts[i] + ':';
					var $t3 = titleByKey.$;
					var $t2 = Q.tryGetText('Permission.' + group);
					if (ss.isNullOrUndefined($t2)) {
						$t2 = parts[i];
					}
					$t3[group] = $t2;
					groupTitle = groupTitle + titleByKey.$[group] + ':';
					titleWithGroup[group] = groupTitle;
				}
				titleWithGroup[s] = groupTitle + titleByKey.$[s];
			}
			keys = Enumerable.from(Object.keys(titleByKey.$)).toArray();
			keys.sort(function(x, y) {
				return Q$Externals.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]);
			});
			return keys;
		},
		get_value: function() {
			var result = [];
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				if (ss.isValue(item.GrantRevoke) && !ss.endsWithString(item.Key, ':')) {
					result.push({ PermissionKey: item.Key, Grant: ss.unbox(item.GrantRevoke) });
				}
			}
			return result;
		},
		set_value: function(value) {
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				item.GrantRevoke = null;
			}
			if (ss.isValue(value)) {
				for (var $t3 = 0; $t3 < value.length; $t3++) {
					var row = value[$t3];
					var r = this.view.getItemById(row.PermissionKey);
					if (ss.isValue(r)) {
						r.GrantRevoke = ss.coalesce(row.Grant, true);
					}
				}
			}
			this.$setItems(this.get_items());
		},
		get_rolePermissions: function() {
			return Enumerable.from(Object.keys(this.$rolePermissions)).toArray();
		},
		set_rolePermissions: function(value) {
			ss.clearKeys(this.$rolePermissions);
			if (ss.isValue(value)) {
				for (var $t1 = 0; $t1 < value.length; $t1++) {
					var k = value[$t1];
					this.$rolePermissions[k] = true;
				}
			}
			this.$setItems(this.get_items());
		}
	}, ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Administration_PermissionModuleEditor, $asm, {}, ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]), [Serenity.IStringValue]);
	ss.initClass($Serene_Administration_RoleCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var roles = Q.getLookup('Administration.Role').get_items();
			for (var $t1 = 0; $t1 < roles.length; $t1++) {
				var role = roles[$t1];
				list.push({ id: role.RoleId.toString(), text: role.RoleName });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($Serene_Administration_RoleDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.RolePermissionDialog.EditButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $Serene_Administration_RolePermissionDialog({ roleID: ss.unbox(this.get_entity().RoleId), title: this.get_entity().RoleName })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Administration_RoleForm, $asm, {
		get_roleName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RoleName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Administration_RoleGrid, $asm, {
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('RoleName');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Administration_RolePermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/RolePermission/Update', { RoleID: this.options.roleID, Permissions: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return x.PermissionKey;
				}).toArray(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Serene_Administration_TranslationGrid, $asm, {
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (e.isDefaultPrevented()) {
				return;
			}
			if ($(e.target).hasClass('source-text')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var done = ss.mkdel(this, function() {
					item.CustomText = item.SourceText;
					this.view.updateItem(item.Key, item);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item.CustomText) || ss.referenceEquals(Q.trimToEmpty(item.CustomText), Q.trimToEmpty(item.SourceText))) {
					done();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
			}
			if ($(e.target).hasClass('target-text')) {
				e.preventDefault();
				var item1 = this.view.rows[row];
				var done1 = ss.mkdel(this, function() {
					item1.CustomText = item1.TargetText;
					this.view.updateItem(item1.Key, item1);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item1.CustomText) || ss.referenceEquals(Q.trimToEmpty(item1.CustomText), Q.trimToEmpty(item1.TargetText))) {
					done1();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done1);
			}
		},
		getColumnsAsync: function() {
			var columns = [];
			columns.push({ field: 'Key', width: 300, sortable: false });
			columns.push({
				field: 'SourceText',
				width: 300,
				sortable: false,
				format: function(ctx) {
					return Q.outerHtml($('<a/>').addClass('source-text').text(ss.coalesce(ss.cast(ctx.value, String), '')));
				}
			});
			columns.push({
				field: 'CustomText',
				width: 300,
				sortable: false,
				format: function(ctx1) {
					return Q.outerHtml($('<input/>').addClass('custom-text').attr('value', ss.cast(ctx1.value, String)).attr('type', 'text').attr('data-key', ss.cast(ctx1.item.Key, String)));
				}
			});
			columns.push({
				field: 'TargetText',
				width: 300,
				sortable: false,
				format: function(ctx2) {
					return Q.outerHtml($('<a/>').addClass('target-text').text(ss.coalesce(ss.cast(ctx2.value, String), '')));
				}
			});
			return RSVP.resolve(columns);
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.SourceLanguage') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Administration.Language';
			this.$sourceLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.changeSelect2(this.$sourceLanguage, ss.mkdel(this, function(e1) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.TargetLanguage') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Administration.Language';
			this.$targetLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.changeSelect2(this.$targetLanguage, ss.mkdel(this, function(e3) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
		},
		saveChanges: function(language) {
			var translations = {};
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				translations[item.Key] = item.CustomText;
			}
			return RSVP.resolve(Q.serviceRequest('Administration/Translation/Update', { TargetLanguageID: language, Translations: translations }, null, null)).then(ss.mkdel(this, function() {
				this.$hasChanges = false;
				Q.notifySuccess('User translations in "' + language + '" language are saved to "user.texts.' + language + '.json" ' + 'file under "~/script/site/texts/user/"');
			}), null);
		},
		onViewSubmit: function() {
			var request = this.view.params;
			request.SourceLanguageID = this.$sourceLanguage.get_value();
			this.$targetLanguageKey = ss.coalesce(this.$targetLanguage.get_value(), '');
			request.TargetLanguageID = this.$targetLanguageKey;
			this.$hasChanges = false;
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this);
		},
		getButtons: function() {
			var $t1 = [];
			$t1.push({ title: 'Save Changes', onClick: ss.mkdel(this, function(e) {
				this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
			}), cssClass: 'apply-changes-button' });
			return $t1;
		},
		createQuickSearchInput: function() {
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, searchText) {
				this.$searchText = searchText;
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (Q.isEmptyOrNull(this.$searchText)) {
				return true;
			}
			var searching = Select2.util.stripDiacritics(this.$searchText).toLowerCase();
			if (Q.isEmptyOrNull(searching)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.Key, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.SourceText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.TargetText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.CustomText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			return false;
		},
		usePager: function() {
			return false;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Administration_UserDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.UserDialog.EditRolesButton'), cssClass: 'users-button', onClick: ss.mkdel(this, function() {
				(new $Serene_Administration_UserRoleDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			buttons.push({ title: Q.text('Site.UserDialog.EditPermissionsButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $Serene_Administration_UserPermissionDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('users-button').toggleClass('disabled', this.get_isNewOrDeleted());
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Administration_UserForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_passwordConfirm: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'PasswordConfirm');
		},
		get_source: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Source');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Administration_UserGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'UserId', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'Username', width: 150, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'DisplayName', width: 150 });
			columns.push({ field: 'Email', width: 250 });
			columns.push({ field: 'Source', width: 100 });
			return columns;
		},
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('Username');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Administration_UserPermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/UserPermission/Update', { UserID: this.options.userID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Serene_Administration_UserRoleDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				Q.serviceRequest('Administration/UserRole/Update', { UserID: this.options.userID, Roles: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return parseInt(x, 10);
				}).toArray() }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Roles'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($Serene_Common_LanguageSelection, $asm, {
		getLookupAsync: function() {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getLookupAsync.call(this).then(ss.mkdel(this, function(x) {
				if (!Enumerable.from(x.get_items()).any(ss.mkdel(this, function(z) {
					return ss.referenceEquals(z.LanguageId, this.$currentLanguage);
				}))) {
					var idx = this.$currentLanguage.lastIndexOf('-');
					if (idx >= 0) {
						this.$currentLanguage = this.$currentLanguage.substr(0, idx);
						if (!Enumerable.from(x.get_items()).any(ss.mkdel(this, function(z1) {
							return ss.referenceEquals(z1.LanguageId, this.$currentLanguage);
						}))) {
							this.$currentLanguage = 'en';
						}
					}
					else {
						this.$currentLanguage = 'en';
					}
				}
				return x;
			}), null);
		},
		updateItemsAsync: function() {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.updateItemsAsync.call(this).then(ss.mkdel(this, function() {
				this.set_value(this.$currentLanguage);
			}), null);
		},
		getLookupKey: function() {
			return 'Administration.Language';
		},
		emptyItemText: function() {
			return null;
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.IStringValue, Serenity.IAsyncInit]);
	ss.initClass($Serene_Common_SidebarSearch, $asm, {
		$updateMatchFlags: function(text) {
			var liList = this.$menuUL.find('li').removeClass('non-match');
			text = Q.trimToNull(text);
			if (ss.isNullOrUndefined(text)) {
				liList.removeClass('active');
				liList.show();
				liList.children('ul').addClass('collapse');
				return;
			}
			var parts = ss.netSplit(text, [44, 32].map(function(i) {
				return String.fromCharCode(i);
			}), null, 1);
			for (var i = 0; i < parts.length; i++) {
				parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
			}
			var items = liList;
			items.each(function(i1, e) {
				var x = $(e);
				var title = Select2.util.stripDiacritics(ss.coalesce(x.text(), '').toUpperCase());
				for (var $t1 = 0; $t1 < parts.length; $t1++) {
					var p = parts[$t1];
					if (ss.isValue(p) && !(title.indexOf(p) !== -1)) {
						x.addClass('non-match');
						break;
					}
				}
			});
			var matchingItems = items.not('.non-match');
			var visibles = matchingItems.parents('li').add(matchingItems);
			var nonVisibles = liList.not(visibles);
			nonVisibles.hide().addClass('non-match');
			visibles.show();
			liList.children('ul').removeClass('collapse');
		}
	}, Serenity.Widget);
	ss.initClass($Serene_Membership_ChangePasswordForm, $asm, {
		get_oldPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'OldPassword');
		},
		get_newPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'NewPassword');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_ChangePasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Serene_Membership_ForgotPasswordForm, $asm, {
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_ForgotPasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Serene_Membership_LoginForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_LoginPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Serene_Membership_ResetPasswordForm, $asm, {
		get_newPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'NewPassword');
		},
		get_confirmPassword: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'ConfirmPassword');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Membership_ResetPasswordPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyPanel$1, [Object]));
	ss.initClass($Serene_Northwind_CategoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_CategoryForm, $asm, {
		get_categoryName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CategoryName');
		},
		get_description: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Description');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CategoryGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_CustomerCityEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.CustomerCity';
		},
		getItems: function(lookup) {
			return Enumerable.from(ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getItems.call(this, lookup)).where(ss.mkdel(this, function(x) {
				return ss.referenceEquals(x.Country, this.get_country());
			}));
		},
		get_countryEditorID: function() {
			return this.$countryLink.get_parentID();
		},
		set_countryEditorID: function(value) {
			this.$countryLink.set_parentID(value);
		},
		get_country: function() {
			return this.$country;
		},
		set_country: function(value) {
			if (!ss.referenceEquals(this.$country, value)) {
				this.$country = value;
				this.set_value(null);
				this.updateItems();
			}
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.IStringValue]);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CustomerCustomerDemoGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerTypeID', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerDemographicDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_CustomerDemographicForm, $asm, {
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		},
		get_customerDesc: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerDesc');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CustomerDemographicGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerTypeID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerDesc', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.get_isNewOrDeleted());
			this.$ordersGrid.set_customerID(entity.CustomerID);
		},
		onSaveSuccess: function(response) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.onSaveSuccess.call(this, response);
			Q.reloadLookup('Northwind.Customer');
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_CustomerEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.Customer';
		},
		getItemText: function(item, lookup) {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.IStringValue]);
	ss.initClass($Serene_Northwind_CustomerForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_CustomerGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.CustomerCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'Country', null, $t1, null, null, null);
			this.addEqualityFilter($Serene_Northwind_OrderShipCityEditor).call(this, 'City', null, null, null, null, function(w) {
				w.set_countryEditorID('Country');
			});
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_OrderDialog, $asm, {
		loadEntity: function(entity) {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.loadEntity.call(this, entity);
			if (this.get_isNew() && ss.isNullOrUndefined(entity.OrderDate)) {
				this.form.get_orderDate().set_valueAsDate(ss.today());
			}
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_CustomerOrderDialog, $asm, {
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			Serenity.PropertyGrid.setReadOnly(this.form.get_customerID(), true);
		}
	}, $Serene_Northwind_OrderDialog, [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_OrderGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			this.set_customerFilter(this.addEqualityFilter($Serene_Northwind_CustomerEditor).call(this, 'CustomerID', null, null, null, null, null));
			this.addDateRangeFilter('OrderDate', null);
			var $t1 = Serenity.EnumEditorOptions.$ctor();
			$t1.enumKey = 'Northwind.OrderShippingState';
			this.addEqualityFilter(Serenity.EnumEditor).call(this, 'ShippingState', null, $t1, null, null, null);
			var $t2 = Serenity.LookupEditorOptions.$ctor();
			$t2.lookupKey = 'Northwind.Shipper';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipVia', null, $t2, null, null, null);
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Northwind.OrderShipCountry';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'ShipCountry', null, $t3, null, null, null);
			this.addEqualityFilter($Serene_Northwind_OrderShipCityEditor).call(this, 'ShipCity', null, null, null, null, function(w) {
				w.set_countryEditorID('ShipCountry');
			});
			var $t4 = Serenity.LookupEditorOptions.$ctor();
			$t4.lookupKey = 'Northwind.Employee';
			this.addEqualityFilter(Serenity.LookupEditor).call(this, 'EmployeeID', null, $t4, null, null, null);
		},
		get_customerFilter: function() {
			return this.$7$CustomerFilterField;
		},
		set_customerFilter: function(value) {
			this.$7$CustomerFilterField = value;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_CustomerOrdersGrid, $asm, {
		getColumns: function() {
			return Enumerable.from(ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this)).where(function(x) {
				return x.field !== 'CustomerCompanyName';
			}).toArray();
		},
		initEntityDialog$1: function(itemType, dialog) {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.initEntityDialog$1.call(this, itemType, dialog);
			Serenity.SubDialogHelper.cascade(ss.cast(dialog, $Serene_Northwind_OrderDialog), this.get_element().closest('.ui-dialog'));
		},
		addButtonClick: function() {
			this.editItem({ CustomerID: this.get_customerID() });
		},
		getInitialTitle: function() {
			return null;
		},
		createToolbarExtensions: function() {
			$Serene_Northwind_OrderGrid.prototype.createToolbarExtensions.call(this);
			this.get_customerFilter().get_element().parent().hide();
		},
		getGridCanLoad: function() {
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getGridCanLoad.call(this) && !ss.isNullOrEmptyString(this.$customerID);
		},
		get_customerID: function() {
			return this.$customerID;
		},
		set_customerID: function(value) {
			if (!ss.referenceEquals(this.$customerID, value)) {
				this.$customerID = value;
				this.setEquality('CustomerID', this.get_customerID());
				this.refresh();
			}
		}
	}, $Serene_Northwind_OrderGrid, [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_EmployeeDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_EmployeeForm, $asm, {
		get_lastName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LastName');
		},
		get_firstName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'FirstName');
		},
		get_title: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Title');
		},
		get_titleOfCourtesy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TitleOfCourtesy');
		},
		get_birthDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'BirthDate');
		},
		get_hireDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'HireDate');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_homePhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePhone');
		},
		get_extension: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Extension');
		},
		get_photo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Photo');
		},
		get_notes: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Notes');
		},
		get_reportsTo: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReportsTo');
		},
		get_photoPath: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PhotoPath');
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
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
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
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_EmployeeTerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_EmployeeTerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_EmployeeTerritoryGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'TerritoryID', width: 200, format: this.itemLink(null, null, null, null, true) });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_FreightFormatter, $asm, {
		format: function(ctx) {
			return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initEnum($Serene_Northwind_Gender, $asm, { Male: 1, Female: 2 });
	ss.initClass($Serene_Northwind_OrderDetailDialog, $asm, {}, ss.makeGenericType($Serene_Common_GridEditorDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($Serene_Northwind_OrderDetailForm, $asm, {
		get_productID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'ProductID');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_quantity: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Quantity');
		},
		get_discount: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Discount');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_OrderDetailsEditor, $asm, {
		validateEntity: function(row, id) {
			row.ProductID = Serenity.IdExtensions.toInt32(row.ProductID);
			var sameProduct = Enumerable.from(this.view.getItems()).firstOrDefault(function(x) {
				return ss.referenceEquals(x.ProductID, row.ProductID);
			}, ss.getDefaultValue(Object));
			if (ss.isValue(sameProduct) && !ss.referenceEquals(this.id(sameProduct), id)) {
				Q.alert('This product is already in order details!');
				return false;
			}
			row.ProductName = Q.getLookup('Northwind.Product').get_itemById()[row.ProductID].ProductName;
			row.LineTotal = ss.coalesce(row.Quantity, 0) * ss.coalesce(row.UnitPrice, 0) - ss.coalesce(row.Discount, 0);
			return true;
		}
	}, ss.makeGenericType($Serene_Common_GridEditorBase$1, [Object]), [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue]);
	ss.initClass($Serene_Northwind_OrderForm, $asm, {
		get_customerID: function() {
			return this.byId($Serene_Northwind_CustomerEditor).call(this, 'CustomerID');
		},
		get_orderDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'OrderDate');
		},
		get_requiredDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'RequiredDate');
		},
		get_employeeID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'EmployeeID');
		},
		get_detailList: function() {
			return this.byId($Serene_Northwind_OrderDetailsEditor).call(this, 'DetailList');
		},
		get_shippedDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'ShippedDate');
		},
		get_shipVia: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'ShipVia');
		},
		get_freight: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Freight');
		},
		get_shipName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipName');
		},
		get_shipAddress: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipAddress');
		},
		get_shipCity: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCity');
		},
		get_shipRegion: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipRegion');
		},
		get_shipPostalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipPostalCode');
		},
		get_shipCountry: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCountry');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_OrderShipCityEditor, $asm, {
		getLookupKey: function() {
			return 'Northwind.OrderShipCity';
		},
		getItems: function(lookup) {
			return Enumerable.from(ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getItems.call(this, lookup)).where(ss.mkdel(this, function(x) {
				return ss.referenceEquals(x.ShipCountry, this.get_country());
			}));
		},
		get_countryEditorID: function() {
			return this.$countryLink.get_parentID();
		},
		set_countryEditorID: function(value) {
			this.$countryLink.set_parentID(value);
		},
		get_country: function() {
			return this.$country;
		},
		set_country: function(value) {
			if (!ss.referenceEquals(this.$country, value)) {
				this.$country = value;
				this.set_value(null);
				this.updateItems();
			}
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.IStringValue]);
	ss.initEnum($Serene_Northwind_OrderShippingState, $asm, { NotShipped: 0, Shipped: 1 });
	ss.initClass($Serene_Northwind_PhoneEditor, $asm, {
		formatValue: function() {
			this.element.val(this.getFormattedValue());
		},
		getFormattedValue: function() {
			var value = this.element.val();
			if (this.get_multiple()) {
				return $Serene_Northwind_PhoneEditor.$formatMulti(value, $Serene_Northwind_PhoneEditor.$formatPhone);
			}
			return $Serene_Northwind_PhoneEditor.$formatPhone(value);
		},
		get_multiple: function() {
			return this.$5$MultipleField;
		},
		set_multiple: function(value) {
			this.$5$MultipleField = value;
		},
		get_value: function() {
			return this.getFormattedValue();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, Serenity.StringEditor, [Serenity.IStringValue]);
	ss.initClass($Serene_Northwind_ProductDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_ProductForm, $asm, {
		get_productName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ProductName');
		},
		get_productImage: function() {
			return this.byId(Serenity.ImageUploadEditor).call(this, 'ProductImage');
		},
		get_discontinued: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Discontinued');
		},
		get_supplierID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'SupplierID');
		},
		get_categoryID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'CategoryID');
		},
		get_quantityPerUnit: function() {
			return this.byId(Serenity.StringEditor).call(this, 'QuantityPerUnit');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_unitsInStock: function() {
			return this.byId(Serenity.StringEditor).call(this, 'UnitsInStock');
		},
		get_unitsOnOrder: function() {
			return this.byId(Serenity.StringEditor).call(this, 'UnitsOnOrder');
		},
		get_reorderLevel: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ReorderLevel');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_ProductGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Product.SupplierCompanyName') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Supplier';
			this.$supplier = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$supplier, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Product.CategoryName') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Northwind.Category';
			this.$category = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.change(this.$category, ss.mkdel(this, function(e3) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('SupplierID', Serenity.IdExtensions.convertToId(this.$supplier.get_value()));
			this.setEquality('CategoryID', Serenity.IdExtensions.convertToId(this.$category.get_value()));
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($Serene_Northwind_RegionDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_RegionForm, $asm, {
		get_regionID: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'RegionID');
		},
		get_regionDescription: function() {
			return this.byId(Serenity.DateTimeEditor).call(this, 'RegionDescription');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_RegionGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_ShipperDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_ShipperForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_phone: function() {
			return this.byId($Serene_Northwind_PhoneEditor).call(this, 'Phone');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_ShipperFormatter, $asm, {
		format: function(ctx) {
			return "<span class='shipper-symbol shipper-" + ss.replaceAllString(ss.coalesce(ss.safeCast(ctx.value, String), ''), ' ', '') + "'>" + Q.htmlEncode(ctx.value) + '</span>';
		}
	}, null, [Serenity.ISlickFormatter]);
	ss.initClass($Serene_Northwind_ShipperGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_SupplierDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_SupplierForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		},
		get_homePage: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePage');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_SupplierGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Supplier.Country') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.SupplierCountry';
			this.$country = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$country, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('Country', this.$country.get_value());
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_TerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($Serene_Northwind_TerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		},
		get_territoryDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryDescription');
		},
		get_regionID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'RegionID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($Serene_Northwind_TerritoryGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Territory.RegionDescription') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Region';
			this.$region = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$region, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			this.setEquality('RegionID', Serenity.IdExtensions.convertToId(this.$region.get_value()));
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.setMetadata($Serene_Administration_LanguageDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.FormKeyAttribute('Administration.Language'), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($Serene_Administration_LanguageGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Language'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.DialogTypeAttribute($Serene_Administration_LanguageDialog), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($Serene_Administration_PermissionCheckEditor, { attr: [new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('Key')] });
	ss.setMetadata($Serene_Administration_PermissionModuleEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Serene_Administration_RoleCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($Serene_Administration_RoleDialog, { attr: [new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.FormKeyAttribute('Administration.Role'), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($Serene_Administration_RoleGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Role'), new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.DialogTypeAttribute($Serene_Administration_RoleDialog), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($Serene_Administration_TranslationGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Translation'), new Serenity.IdPropertyAttribute('Key'), new Serenity.LocalTextPrefixAttribute('Administration.Translation'), new Serenity.ServiceAttribute('Administration/Translation')] });
	ss.setMetadata($Serene_Administration_UserDialog, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.FormKeyAttribute('Administration.User'), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($Serene_Administration_UserGrid, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.DialogTypeAttribute($Serene_Administration_UserDialog), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($Serene_Common_GridEditorBase$1, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($Serene_Common_GridEditorDialog$1, { attr: [new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($Serene_Membership_ChangePasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ChangePassword')] });
	ss.setMetadata($Serene_Membership_ForgotPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ForgotPassword')] });
	ss.setMetadata($Serene_Membership_LoginPanel, { attr: [new Serenity.FormKeyAttribute('Membership.Login')] });
	ss.setMetadata($Serene_Membership_ResetPasswordPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.ResetPassword')] });
	ss.setMetadata($Serene_Northwind_CategoryDialog, { attr: [new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.FormKeyAttribute('Northwind.Category'), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($Serene_Northwind_CategoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Category'), new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.DialogTypeAttribute($Serene_Northwind_CategoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($Serene_Northwind_CustomerCityEditor, { members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'Country', type: 16, returnType: String, getter: { name: 'get_Country', type: 8, sname: 'get_country', returnType: String, params: [] }, setter: { name: 'set_Country', type: 8, sname: 'set_country', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'CountryEditorID', type: 16, returnType: String, getter: { name: 'get_CountryEditorID', type: 8, sname: 'get_countryEditorID', returnType: String, params: [] }, setter: { name: 'set_CountryEditorID', type: 8, sname: 'set_countryEditorID', returnType: Object, params: [String] } }] });
	ss.setMetadata($Serene_Northwind_CustomerCustomerDemoDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.CustomerCustomerDemo'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($Serene_Northwind_CustomerCustomerDemoGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerCustomerDemoDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($Serene_Northwind_CustomerDemographicDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.FormKeyAttribute('Northwind.CustomerDemographic'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($Serene_Northwind_CustomerDemographicGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerDemographicDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($Serene_Northwind_CustomerDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Customer'), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($Serene_Northwind_CustomerGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Customer'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($Serene_Northwind_CustomerOrdersGrid, { attr: [new Serenity.DialogTypeAttribute($Serene_Northwind_CustomerOrderDialog)] });
	ss.setMetadata($Serene_Northwind_EmployeeDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.FormKeyAttribute('Northwind.Employee'), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($Serene_Northwind_EmployeeFormatter, { members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'GenderProperty', type: 16, returnType: String, getter: { name: 'get_GenderProperty', type: 8, sname: 'get_genderProperty', returnType: String, params: [] }, setter: { name: 'set_GenderProperty', type: 8, sname: 'set_genderProperty', returnType: Object, params: [String] } }] });
	ss.setMetadata($Serene_Northwind_EmployeeGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.DialogTypeAttribute($Serene_Northwind_EmployeeDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($Serene_Northwind_EmployeeTerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.EmployeeTerritory'), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($Serene_Northwind_EmployeeTerritoryGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($Serene_Northwind_EmployeeTerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($Serene_Northwind_Gender, { attr: [new Serenity.EnumKeyAttribute('Serene.Northwind.Entities.Gender')] });
	ss.setMetadata($Serene_Northwind_OrderDetailDialog, { attr: [new Serenity.FormKeyAttribute('Northwind.OrderDetail'), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($Serene_Northwind_OrderDetailsEditor, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.OrderDetail'), new Serenity.DialogTypeAttribute($Serene_Northwind_OrderDetailDialog), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail')] });
	ss.setMetadata($Serene_Northwind_OrderDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('OrderID'), new Serenity.FlexifyAttribute(), new Serenity.MaximizableAttribute(), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($Serene_Northwind_OrderGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Order'), new Serenity.IdPropertyAttribute('OrderID'), new Serenity.DialogTypeAttribute($Serene_Northwind_OrderDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($Serene_Northwind_OrderShipCityEditor, { members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'Country', type: 16, returnType: String, getter: { name: 'get_Country', type: 8, sname: 'get_country', returnType: String, params: [] }, setter: { name: 'set_Country', type: 8, sname: 'set_country', returnType: Object, params: [String] } }, { attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'CountryEditorID', type: 16, returnType: String, getter: { name: 'get_CountryEditorID', type: 8, sname: 'get_countryEditorID', returnType: String, params: [] }, setter: { name: 'set_CountryEditorID', type: 8, sname: 'set_countryEditorID', returnType: Object, params: [String] } }] });
	ss.setMetadata($Serene_Northwind_OrderShippingState, { attr: [new Serenity.EnumKeyAttribute('Northwind.OrderShippingState')] });
	ss.setMetadata($Serene_Northwind_PhoneEditor, { attr: [new Serenity.EditorAttribute()], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'Multiple', type: 16, returnType: Boolean, getter: { name: 'get_Multiple', type: 8, sname: 'get_multiple', returnType: Boolean, params: [] }, setter: { name: 'set_Multiple', type: 8, sname: 'set_multiple', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($Serene_Northwind_ProductDialog, { attr: [new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.FormKeyAttribute('Northwind.Product'), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($Serene_Northwind_ProductGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Product'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.DialogTypeAttribute($Serene_Northwind_ProductDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($Serene_Northwind_RegionDialog, { attr: [new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.FormKeyAttribute('Northwind.Region'), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($Serene_Northwind_RegionGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Region'), new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.DialogTypeAttribute($Serene_Northwind_RegionDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($Serene_Northwind_ShipperDialog, { attr: [new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Shipper'), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($Serene_Northwind_ShipperGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Shipper'), new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($Serene_Northwind_ShipperDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($Serene_Northwind_SupplierDialog, { attr: [new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Supplier'), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($Serene_Northwind_SupplierGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Supplier'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($Serene_Northwind_SupplierDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($Serene_Northwind_TerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.Territory'), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($Serene_Northwind_TerritoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Territory'), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($Serene_Northwind_TerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	(function() {
		Q$Config.rootNamespaces.push('Serene');
	})();
})();
