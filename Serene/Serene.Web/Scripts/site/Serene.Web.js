var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'lock-button',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("lock-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                _super.call(this, container);
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password().addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password().get_value().length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm().addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password().get_value() != _this.form.PasswordConfirm().get_value())
                        return "The passwords entered doesn't match!";
                });
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'users-button',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'lock-button',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('users-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("lock-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password().element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm().element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                _super.call(this, container);
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                _super.apply(this, arguments);
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', Serenity.StringEditor], ['LanguageName', Serenity.StringEditor]].forEach(function (x) { return LanguageForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function lookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                _super.apply(this, arguments);
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', Serenity.StringEditor]].forEach(function (x) { return RoleForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function lookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                _super.apply(this, arguments);
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', Serenity.StringEditor], ['DisplayName', Serenity.StringEditor], ['Email', Serenity.EmailEditor], ['Password', Serenity.PasswordEditor], ['PasswordConfirm', Serenity.PasswordEditor], ['Source', Serenity.StringEditor]].forEach(function (x) { return UserForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Grant', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            var Methods;
            (function (Methods) {
            })(Methods = BasicSamplesService.Methods || (BasicSamplesService.Methods = {}));
            ['OrdersByShipper', 'OrderBulkAction'].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) { return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BasicSamplesService.baseUrl + '/' + x;
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm() {
                _super.apply(this, arguments);
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
        [['CustomerID', Serene.Northwind.CustomerEditor], ['OrderDate', Serenity.DateEditor], ['CategoryID', Serenity.LookupEditor], ['DetailList', BasicSamples.FilteredLookupDetailEditor]].forEach(function (x) { return FilteredLookupInDetailForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm() {
                _super.apply(this, arguments);
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
        [['ProductName', Serenity.StringEditor], ['ProductImage', Serenity.ImageUploadEditor], ['Discontinued', Serenity.BooleanEditor], ['SupplierID', Serenity.LookupEditor], ['CategoryID', BasicSamples.ProduceSeafoodCategoryEditor], ['QuantityPerUnit', Serenity.StringEditor], ['UnitPrice', Serenity.DecimalEditor], ['UnitsInStock', Serenity.IntegerEditor], ['UnitsOnOrder', Serenity.IntegerEditor], ['ReorderLevel', Serenity.IntegerEditor]].forEach(function (x) { return LookupFilterByMultipleForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                _super.apply(this, arguments);
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', Serenity.PasswordEditor], ['NewPassword', Serenity.PasswordEditor], ['ConfirmPassword', Serenity.PasswordEditor]].forEach(function (x) { return ChangePasswordForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                _super.apply(this, arguments);
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', Serenity.EmailEditor]].forEach(function (x) { return ForgotPasswordForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                _super.apply(this, arguments);
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', Serenity.StringEditor], ['Password', Serenity.PasswordEditor]].forEach(function (x) { return LoginForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                _super.apply(this, arguments);
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', Serenity.PasswordEditor], ['ConfirmPassword', Serenity.PasswordEditor]].forEach(function (x) { return ResetPasswordForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                _super.apply(this, arguments);
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', Serenity.StringEditor], ['Email', Serenity.EmailEditor], ['ConfirmEmail', Serenity.EmailEditor], ['Password', Serenity.PasswordEditor], ['ConfirmPassword', Serenity.PasswordEditor]].forEach(function (x) { return SignUpForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                _super.apply(this, arguments);
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
        [['CategoryName', Serenity.StringEditor], ['Description', Serenity.StringEditor]].forEach(function (x) { return CategoryForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryLangService.Methods || (CategoryLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) { return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryLangService.baseUrl + '/' + x;
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function lookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryID', 'CategoryName', 'Description', 'Picture'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'RetrieveLocalization', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoForm = (function (_super) {
            __extends(CustomerCustomerDemoForm, _super);
            function CustomerCustomerDemoForm() {
                _super.apply(this, arguments);
            }
            CustomerCustomerDemoForm.formKey = 'Northwind.CustomerCustomerDemo';
            return CustomerCustomerDemoForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerCustomerDemoForm = CustomerCustomerDemoForm;
        [['CustomerID', Serenity.StringEditor], ['CustomerTypeID', Serenity.StringEditor]].forEach(function (x) { return CustomerCustomerDemoForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerCustomerDemoRow.Fields || (CustomerCustomerDemoRow.Fields = {}));
            ['ID', 'CustomerID', 'CustomerTypeID', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerTypeCustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoService;
        (function (CustomerCustomerDemoService) {
            CustomerCustomerDemoService.baseUrl = 'Northwind/CustomerCustomerDemo';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerCustomerDemoService.Methods || (CustomerCustomerDemoService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerCustomerDemoService[x] = function (r, s, o) { return Q.serviceRequest(CustomerCustomerDemoService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerCustomerDemoService.baseUrl + '/' + x;
            });
        })(CustomerCustomerDemoService = Northwind.CustomerCustomerDemoService || (Northwind.CustomerCustomerDemoService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicForm = (function (_super) {
            __extends(CustomerDemographicForm, _super);
            function CustomerDemographicForm() {
                _super.apply(this, arguments);
            }
            CustomerDemographicForm.formKey = 'Northwind.CustomerDemographic';
            return CustomerDemographicForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerDemographicForm = CustomerDemographicForm;
        [['CustomerTypeID', Serenity.StringEditor], ['CustomerDesc', Serenity.StringEditor]].forEach(function (x) { return CustomerDemographicForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDemographicRow.Fields || (CustomerDemographicRow.Fields = {}));
            ['ID', 'CustomerTypeID', 'CustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicService;
        (function (CustomerDemographicService) {
            CustomerDemographicService.baseUrl = 'Northwind/CustomerDemographic';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerDemographicService.Methods || (CustomerDemographicService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerDemographicService[x] = function (r, s, o) { return Q.serviceRequest(CustomerDemographicService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerDemographicService.baseUrl + '/' + x;
            });
        })(CustomerDemographicService = Northwind.CustomerDemographicService || (Northwind.CustomerDemographicService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                _super.apply(this, arguments);
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
        [['CustomerID', Serenity.StringEditor], ['CompanyName', Serenity.StringEditor], ['ContactName', Serenity.StringEditor], ['ContactTitle', Serenity.StringEditor], ['Representatives', Serenity.LookupEditor], ['Address', Serenity.StringEditor], ['City', Serenity.StringEditor], ['Region', Serenity.StringEditor], ['PostalCode', Serenity.StringEditor], ['Country', Serenity.StringEditor], ['Phone', Serenity.StringEditor], ['Fax', Serenity.StringEditor], ['NoteList', Northwind.NotesEditor]].forEach(function (x) { return CustomerForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'CustomerRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function lookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeForm = (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm() {
                _super.apply(this, arguments);
            }
            EmployeeForm.formKey = 'Northwind.Employee';
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        Northwind.EmployeeForm = EmployeeForm;
        [['LastName', Serenity.StringEditor], ['FirstName', Serenity.StringEditor], ['Title', Serenity.StringEditor], ['TitleOfCourtesy', Serenity.StringEditor], ['BirthDate', Serenity.DateEditor], ['HireDate', Serenity.DateEditor], ['Address', Serenity.StringEditor], ['City', Serenity.StringEditor], ['Region', Serenity.StringEditor], ['PostalCode', Serenity.StringEditor], ['Country', Serenity.StringEditor], ['HomePhone', Serenity.StringEditor], ['Extension', Serenity.StringEditor], ['Photo', Serenity.StringEditor], ['Notes', Serenity.StringEditor], ['ReportsTo', Serenity.IntegerEditor], ['PhotoPath', Serenity.StringEditor]].forEach(function (x) { return EmployeeForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function lookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Photo', 'Notes', 'ReportsTo', 'PhotoPath', 'ReportsToFullName', 'ReportsToLastName', 'ReportsToFirstName', 'ReportsToTitle', 'ReportsToTitleOfCourtesy', 'ReportsToBirthDate', 'ReportsToHireDate', 'ReportsToAddress', 'ReportsToCity', 'ReportsToRegion', 'ReportsToPostalCode', 'ReportsToCountry', 'ReportsToHomePhone', 'ReportsToExtension', 'ReportsToPhoto', 'ReportsToNotes', 'ReportsToReportsTo', 'ReportsToPhotoPath', 'Gender'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'Northwind/Employee';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeService.Methods || (EmployeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeService.baseUrl + '/' + x;
            });
        })(EmployeeService = Northwind.EmployeeService || (Northwind.EmployeeService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryForm = (function (_super) {
            __extends(EmployeeTerritoryForm, _super);
            function EmployeeTerritoryForm() {
                _super.apply(this, arguments);
            }
            EmployeeTerritoryForm.formKey = 'Northwind.EmployeeTerritory';
            return EmployeeTerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.EmployeeTerritoryForm = EmployeeTerritoryForm;
        [['TerritoryID', Serenity.StringEditor]].forEach(function (x) { return EmployeeTerritoryForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTerritoryRow.Fields || (EmployeeTerritoryRow.Fields = {}));
            ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeTitle', 'EmployeeTitleOfCourtesy', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeRegion', 'EmployeePostalCode', 'EmployeeCountry', 'EmployeeHomePhone', 'EmployeeExtension', 'EmployeePhoto', 'EmployeeNotes', 'EmployeeReportsTo', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryService;
        (function (EmployeeTerritoryService) {
            EmployeeTerritoryService.baseUrl = 'Northwind/EmployeeTerritory';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeTerritoryService.Methods || (EmployeeTerritoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeeTerritoryService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeTerritoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeTerritoryService.baseUrl + '/' + x;
            });
        })(EmployeeTerritoryService = Northwind.EmployeeTerritoryService || (Northwind.EmployeeTerritoryService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Northwind.Gender || (Northwind.Gender = {}));
        var Gender = Northwind.Gender;
        Serenity.Decorators.addAttribute(Gender, new Serenity.EnumKeyAttribute('Serene.Northwind.Entities.Gender'));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                _super.apply(this, arguments);
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
        [['ProductID', Serenity.LookupEditor], ['UnitPrice', Serenity.DecimalEditor], ['Quantity', Serenity.IntegerEditor], ['Discount', Serenity.DecimalEditor]].forEach(function (x) { return OrderDetailForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                _super.apply(this, arguments);
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
        [['CustomerID', Northwind.CustomerEditor], ['OrderDate', Serenity.DateEditor], ['RequiredDate', Serenity.DateEditor], ['EmployeeID', Serenity.LookupEditor], ['DetailList', Northwind.OrderDetailsEditor], ['ShippedDate', Serenity.DateEditor], ['ShipVia', Serenity.LookupEditor], ['Freight', Serenity.DecimalEditor], ['ShipName', Serenity.StringEditor], ['ShipAddress', Serenity.StringEditor], ['ShipCity', Serenity.StringEditor], ['ShipRegion', Serenity.StringEditor], ['ShipPostalCode', Serenity.StringEditor], ['ShipCountry', Serenity.StringEditor]].forEach(function (x) { return OrderForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.lookupKey = 'Northwind.OrderShipCity';
            function lookup() {
                return Q.getLookup('Northwind.OrderShipCity');
            }
            OrderRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            var Methods;
            (function (Methods) {
            })(Methods = OrderService.Methods || (OrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderService[x] = function (r, s, o) { return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderService.baseUrl + '/' + x;
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        var OrderShippingState = Northwind.OrderShippingState;
        Serenity.Decorators.addAttribute(OrderShippingState, new Serenity.EnumKeyAttribute('Northwind.OrderShippingState'));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                _super.apply(this, arguments);
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
        [['ProductName', Serenity.StringEditor], ['ProductImage', Serenity.ImageUploadEditor], ['Discontinued', Serenity.BooleanEditor], ['SupplierID', Serenity.LookupEditor], ['CategoryID', Serenity.LookupEditor], ['QuantityPerUnit', Serenity.StringEditor], ['UnitPrice', Serenity.DecimalEditor], ['UnitsInStock', Serenity.IntegerEditor], ['UnitsOnOrder', Serenity.IntegerEditor], ['ReorderLevel', Serenity.IntegerEditor]].forEach(function (x) { return ProductForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ['Id', 'ProductId', 'LanguageId', 'ProductName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLangService.Methods || (ProductLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) { return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLangService.baseUrl + '/' + x;
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ['ProductLogID', 'OperationType', 'ChangingUserId', 'ValidFrom', 'ValidUntil', 'ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function lookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'CategoryName', 'CategoryDescription', 'CategoryPicture'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'RetrieveLocalization', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm() {
                _super.apply(this, arguments);
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
        [['RegionID', Serenity.IntegerEditor], ['RegionDescription', Serenity.StringEditor]].forEach(function (x) { return RegionForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function lookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = RegionRow.Fields || (RegionRow.Fields = {}));
            ['RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            var Methods;
            (function (Methods) {
            })(Methods = RegionService.Methods || (RegionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RegionService[x] = function (r, s, o) { return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RegionService.baseUrl + '/' + x;
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            var Fields;
            (function (Fields) {
            })(Fields = SalesByCategoryRow.Fields || (SalesByCategoryRow.Fields = {}));
            ['CategoryId', 'CategoryName', 'ProductName', 'ProductSales'].forEach(function (x) { return Fields[x] = x; });
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            var Methods;
            (function (Methods) {
            })(Methods = SalesByCategoryService.Methods || (SalesByCategoryService.Methods = {}));
            ['List'].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) { return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SalesByCategoryService.baseUrl + '/' + x;
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                _super.apply(this, arguments);
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
        [['CompanyName', Serenity.StringEditor], ['Phone', Northwind.PhoneEditor]].forEach(function (x) { return ShipperForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function lookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ['ShipperID', 'CompanyName', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            var Methods;
            (function (Methods) {
            })(Methods = ShipperService.Methods || (ShipperService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShipperService[x] = function (r, s, o) { return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShipperService.baseUrl + '/' + x;
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                _super.apply(this, arguments);
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
        [['CompanyName', Serenity.StringEditor], ['ContactName', Serenity.StringEditor], ['ContactTitle', Serenity.StringEditor], ['Address', Serenity.StringEditor], ['City', Serenity.StringEditor], ['Region', Serenity.StringEditor], ['PostalCode', Serenity.StringEditor], ['Country', Serenity.StringEditor], ['Phone', Serenity.StringEditor], ['Fax', Serenity.StringEditor], ['HomePage', Serenity.StringEditor]].forEach(function (x) { return SupplierForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function lookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm() {
                _super.apply(this, arguments);
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
        [['TerritoryID', Serenity.StringEditor], ['TerritoryDescription', Serenity.StringEditor], ['RegionID', Serenity.LookupEditor]].forEach(function (x) { return TerritoryForm.prototype[x[0]] = function () { return this.w(x[0], x[1]); }; });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function lookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.lookup = lookup;
            var Fields;
            (function (Fields) {
            })(Fields = TerritoryRow.Fields || (TerritoryRow.Fields = {}));
            ['ID', 'TerritoryID', 'TerritoryDescription', 'RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            var Methods;
            (function (Methods) {
            })(Methods = TerritoryService.Methods || (TerritoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) { return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TerritoryService.baseUrl + '/' + x;
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.identifier || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(grid, onViewSubmit, options) {
                var g = grid;
                if (!onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                request.IncludeColumns = [];
                for (var _i = 0, _a = g.slickGrid.getColumns(); _i < _a.length; _i++) {
                    var column = _a[_i];
                    request.IncludeColumns.push(column.identifier || column.field);
                }
                options = options || {};
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = g.slickGrid.getColumns();
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.title || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        var fileName = options.title || "{0}_{1}.pdf";
                        fileName = ss.formatString(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_hhmm"));
                        doc.save(fileName);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(grid, onViewSubmit, buttonTitle, options) {
                options = options || {};
                return {
                    title: buttonTitle || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(grid, onViewSubmit, options); }
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Web.js.map