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
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
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
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
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
        var ChangingLookupTextForm = (function (_super) {
            __extends(ChangingLookupTextForm, _super);
            function ChangingLookupTextForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangingLookupTextForm;
        }(Serenity.PrefixedContext));
        ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
        BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
        [['ProductID', function () { return BasicSamples.ChangingLookupTextEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(ChangingLookupTextForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesService;
        (function (CustomerGrossSalesService) {
            CustomerGrossSalesService.baseUrl = 'BasicSamples/CustomerGrossSales';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerGrossSalesService.Methods || (CustomerGrossSalesService.Methods = {}));
            ['List'].forEach(function (x) {
                CustomerGrossSalesService[x] = function (r, s, o) { return Q.serviceRequest(CustomerGrossSalesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerGrossSalesService.baseUrl + '/' + x;
            });
        })(CustomerGrossSalesService = BasicSamples.CustomerGrossSalesService || (BasicSamples.CustomerGrossSalesService = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleForm = (function (_super) {
            __extends(DragDropSampleForm, _super);
            function DragDropSampleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DragDropSampleForm;
        }(Serenity.PrefixedContext));
        DragDropSampleForm.formKey = 'BasicSamples.DragDropSample';
        BasicSamples.DragDropSampleForm = DragDropSampleForm;
        [['Title', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(DragDropSampleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleRow;
        (function (DragDropSampleRow) {
            DragDropSampleRow.idProperty = 'Id';
            DragDropSampleRow.nameProperty = 'Title';
            DragDropSampleRow.localTextPrefix = 'BasicSamples.DragDropSample';
            var Fields;
            (function (Fields) {
            })(Fields = DragDropSampleRow.Fields || (DragDropSampleRow.Fields = {}));
            ['Id', 'ParentId', 'Title'].forEach(function (x) { return Fields[x] = x; });
        })(DragDropSampleRow = BasicSamples.DragDropSampleRow || (BasicSamples.DragDropSampleRow = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleService;
        (function (DragDropSampleService) {
            DragDropSampleService.baseUrl = 'BasicSamples/DragDropSample';
            var Methods;
            (function (Methods) {
            })(Methods = DragDropSampleService.Methods || (DragDropSampleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DragDropSampleService[x] = function (r, s, o) { return Q.serviceRequest(DragDropSampleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DragDropSampleService.baseUrl + '/' + x;
            });
        })(DragDropSampleService = BasicSamples.DragDropSampleService || (BasicSamples.DragDropSampleService = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
        [['CustomerID', function () { return Serene.Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return BasicSamples.FilteredLookupDetailEditor; }]].forEach(function (x) { return Object.defineProperty(FilteredLookupInDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesForm = (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
        BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
        [['SomeValue', function () { return BasicSamples.HardcodedValuesEditor; }]].forEach(function (x) { return Object.defineProperty(HardcodedValuesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return BasicSamples.ProduceSeafoodCategoryEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(LookupFilterByMultipleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
        [['CustomerID', function () { return Serene.Northwind.CustomerEditor; }], ['CustomerContactName', function () { return Serenity.StringEditor; }], ['CustomerContactTitle', function () { return Serenity.StringEditor; }], ['CustomerCity', function () { return Serenity.StringEditor; }], ['CustomerRegion', function () { return Serenity.StringEditor; }], ['CustomerCountry', function () { return Serenity.StringEditor; }], ['CustomerPhone', function () { return Serenity.StringEditor; }], ['CustomerFax', function () { return Serenity.StringEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Serene.Northwind.OrderDetailsEditor; }]].forEach(function (x) { return Object.defineProperty(PopulateLinkedDataForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
        [['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(ProductExcelImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            var Methods;
            (function (Methods) {
            })(Methods = ProductExcelImportService.Methods || (ProductExcelImportService.Methods = {}));
            ['ExcelImport'].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) { return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductExcelImportService.baseUrl + '/' + x;
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockForm = (function (_super) {
            __extends(StaticTextBlockForm, _super);
            function StaticTextBlockForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return StaticTextBlockForm;
        }(Serenity.PrefixedContext));
        StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
        BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
        [['StaticText', function () { return Serene.StaticTextBlock; }], ['SomeInput', function () { return Serenity.StringEditor; }], ['HtmlList', function () { return Serene.StaticTextBlock; }], ['FromLocalText', function () { return Serene.StaticTextBlock; }], ['DisplayFieldValue', function () { return Serene.StaticTextBlock; }]].forEach(function (x) { return Object.defineProperty(StaticTextBlockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAService;
        (function (VSGalleryQAService) {
            VSGalleryQAService.baseUrl = 'BasicSamples/VSGalleryQA';
            var Methods;
            (function (Methods) {
            })(Methods = VSGalleryQAService.Methods || (VSGalleryQAService.Methods = {}));
            ['List'].forEach(function (x) {
                VSGalleryQAService[x] = function (r, s, o) { return Q.serviceRequest(VSGalleryQAService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = VSGalleryQAService.baseUrl + '/' + x;
            });
        })(VSGalleryQAService = BasicSamples.VSGalleryQAService || (BasicSamples.VSGalleryQAService = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaForm = (function (_super) {
            __extends(MeetingAgendaForm, _super);
            function MeetingAgendaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAgendaForm;
        }(Serenity.PrefixedContext));
        MeetingAgendaForm.formKey = 'Meeting.MeetingAgenda';
        Meeting.MeetingAgendaForm = MeetingAgendaForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['AgendaNumber', function () { return Serenity.IntegerEditor; }], ['Title', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['AgendaTypeId', function () { return Serenity.IntegerEditor; }], ['RequestedByContactId', function () { return Serenity.IntegerEditor; }], ['Images', function () { return Serenity.MultipleImageUploadEditor; }], ['Attachments', function () { return Serenity.MultipleImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAgendaForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantForm = (function (_super) {
            __extends(MeetingAgendaRelevantForm, _super);
            function MeetingAgendaRelevantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAgendaRelevantForm;
        }(Serenity.PrefixedContext));
        MeetingAgendaRelevantForm.formKey = 'Meeting.MeetingAgendaRelevant';
        Meeting.MeetingAgendaRelevantForm = MeetingAgendaRelevantForm;
        [['AgendaId', function () { return Serenity.IntegerEditor; }], ['ContactId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAgendaRelevantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantRow;
        (function (MeetingAgendaRelevantRow) {
            MeetingAgendaRelevantRow.idProperty = 'AgendaRelevantId';
            MeetingAgendaRelevantRow.localTextPrefix = 'Meeting.MeetingAgendaRelevant';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAgendaRelevantRow.Fields || (MeetingAgendaRelevantRow.Fields = {}));
            ['AgendaRelevantId', 'AgendaId', 'ContactId', 'AgendaMeetingId', 'AgendaAgendaNumber', 'AgendaTitle', 'AgendaDescription', 'AgendaAgendaTypeId', 'AgendaRequestedByContactId', 'AgendaImages', 'AgendaAttachments', 'ContactTitle', 'ContactFirstName', 'ContactLastName', 'ContactEmail', 'ContactIdentityNo', 'ContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAgendaRelevantRow = Meeting.MeetingAgendaRelevantRow || (Meeting.MeetingAgendaRelevantRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantService;
        (function (MeetingAgendaRelevantService) {
            MeetingAgendaRelevantService.baseUrl = 'Meeting/MeetingAgendaRelevant';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAgendaRelevantService.Methods || (MeetingAgendaRelevantService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAgendaRelevantService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAgendaRelevantService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAgendaRelevantService.baseUrl + '/' + x;
            });
        })(MeetingAgendaRelevantService = Meeting.MeetingAgendaRelevantService || (Meeting.MeetingAgendaRelevantService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRow;
        (function (MeetingAgendaRow) {
            MeetingAgendaRow.idProperty = 'AgendaId';
            MeetingAgendaRow.nameProperty = 'Title';
            MeetingAgendaRow.localTextPrefix = 'Meeting.MeetingAgenda';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAgendaRow.Fields || (MeetingAgendaRow.Fields = {}));
            ['AgendaId', 'MeetingId', 'AgendaNumber', 'Title', 'Description', 'AgendaTypeId', 'RequestedByContactId', 'Images', 'Attachments', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'AgendaTypeName', 'RequestedByContactTitle', 'RequestedByContactFirstName', 'RequestedByContactLastName', 'RequestedByContactFullName', 'RequestedByContactEmail', 'RequestedByContactIdentityNo', 'RequestedByContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAgendaRow = Meeting.MeetingAgendaRow || (Meeting.MeetingAgendaRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaService;
        (function (MeetingAgendaService) {
            MeetingAgendaService.baseUrl = 'Meeting/MeetingAgenda';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAgendaService.Methods || (MeetingAgendaService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAgendaService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAgendaService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAgendaService.baseUrl + '/' + x;
            });
        })(MeetingAgendaService = Meeting.MeetingAgendaService || (Meeting.MeetingAgendaService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeForm = (function (_super) {
            __extends(MeetingAgendaTypeForm, _super);
            function MeetingAgendaTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAgendaTypeForm;
        }(Serenity.PrefixedContext));
        MeetingAgendaTypeForm.formKey = 'Meeting.MeetingAgendaType';
        Meeting.MeetingAgendaTypeForm = MeetingAgendaTypeForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAgendaTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeRow;
        (function (MeetingAgendaTypeRow) {
            MeetingAgendaTypeRow.idProperty = 'AgendaTypeId';
            MeetingAgendaTypeRow.nameProperty = 'Name';
            MeetingAgendaTypeRow.localTextPrefix = 'Meeting.MeetingAgendaType';
            MeetingAgendaTypeRow.lookupKey = 'Meeting.MeetingAgendaType';
            function getLookup() {
                return Q.getLookup('Meeting.MeetingAgendaType');
            }
            MeetingAgendaTypeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAgendaTypeRow.Fields || (MeetingAgendaTypeRow.Fields = {}));
            ['AgendaTypeId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAgendaTypeRow = Meeting.MeetingAgendaTypeRow || (Meeting.MeetingAgendaTypeRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeService;
        (function (MeetingAgendaTypeService) {
            MeetingAgendaTypeService.baseUrl = 'Meeting/MeetingAgendaType';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingAgendaTypeService.Methods || (MeetingAgendaTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingAgendaTypeService[x] = function (r, s, o) { return Q.serviceRequest(MeetingAgendaTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingAgendaTypeService.baseUrl + '/' + x;
            });
        })(MeetingAgendaTypeService = Meeting.MeetingAgendaTypeService || (Meeting.MeetingAgendaTypeService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendanceStatus;
        (function (MeetingAttendanceStatus) {
            MeetingAttendanceStatus[MeetingAttendanceStatus["NotSet"] = 0] = "NotSet";
            MeetingAttendanceStatus[MeetingAttendanceStatus["Attended"] = 1] = "Attended";
            MeetingAttendanceStatus[MeetingAttendanceStatus["Absent"] = 2] = "Absent";
            MeetingAttendanceStatus[MeetingAttendanceStatus["AbsentWithPermission"] = 3] = "AbsentWithPermission";
        })(MeetingAttendanceStatus = Meeting.MeetingAttendanceStatus || (Meeting.MeetingAttendanceStatus = {}));
        Serenity.Decorators.registerEnum(MeetingAttendanceStatus, 'Meeting.MeetingAttendanceStatus');
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeForm = (function (_super) {
            __extends(MeetingAttendeeForm, _super);
            function MeetingAttendeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingAttendeeForm;
        }(Serenity.PrefixedContext));
        MeetingAttendeeForm.formKey = 'Meeting.MeetingAttendee';
        Meeting.MeetingAttendeeForm = MeetingAttendeeForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['ContactId', function () { return Serenity.IntegerEditor; }], ['AttendeeType', function () { return Serenity.EnumEditor; }], ['AttendanceStatus', function () { return Serenity.EnumEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingAttendeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeRow;
        (function (MeetingAttendeeRow) {
            MeetingAttendeeRow.idProperty = 'AttendeeId';
            MeetingAttendeeRow.localTextPrefix = 'Meeting.MeetingAttendee';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingAttendeeRow.Fields || (MeetingAttendeeRow.Fields = {}));
            ['AttendeeId', 'MeetingId', 'ContactId', 'AttendeeType', 'AttendanceStatus', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'ContactTitle', 'ContactFirstName', 'ContactLastName', 'ContactFullName', 'ContactEmail', 'ContactIdentityNo', 'ContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingAttendeeRow = Meeting.MeetingAttendeeRow || (Meeting.MeetingAttendeeRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeType;
        (function (MeetingAttendeeType) {
            MeetingAttendeeType[MeetingAttendeeType["Attendee"] = 1] = "Attendee";
            MeetingAttendeeType[MeetingAttendeeType["Guest"] = 2] = "Guest";
        })(MeetingAttendeeType = Meeting.MeetingAttendeeType || (Meeting.MeetingAttendeeType = {}));
        Serenity.Decorators.registerEnum(MeetingAttendeeType, 'Meeting.MeetingAttendeeType');
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionForm = (function (_super) {
            __extends(MeetingDecisionForm, _super);
            function MeetingDecisionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingDecisionForm;
        }(Serenity.PrefixedContext));
        MeetingDecisionForm.formKey = 'Meeting.MeetingDecision';
        Meeting.MeetingDecisionForm = MeetingDecisionForm;
        [['MeetingId', function () { return Serenity.IntegerEditor; }], ['AgendaId', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['DecisionNumber', function () { return Serenity.IntegerEditor; }], ['ResponsibleContactId', function () { return Serenity.IntegerEditor; }], ['DueDate', function () { return Serenity.DateEditor; }], ['ResolutionStatus', function () { return Serenity.IntegerEditor; }], ['Images', function () { return Serenity.StringEditor; }], ['Attachments', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingDecisionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantForm = (function (_super) {
            __extends(MeetingDecisionRelevantForm, _super);
            function MeetingDecisionRelevantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingDecisionRelevantForm;
        }(Serenity.PrefixedContext));
        MeetingDecisionRelevantForm.formKey = 'Meeting.MeetingDecisionRelevant';
        Meeting.MeetingDecisionRelevantForm = MeetingDecisionRelevantForm;
        [['DecisionId', function () { return Serenity.IntegerEditor; }], ['ContactId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingDecisionRelevantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantRow;
        (function (MeetingDecisionRelevantRow) {
            MeetingDecisionRelevantRow.idProperty = 'DecisionRelevantId';
            MeetingDecisionRelevantRow.localTextPrefix = 'Meeting.MeetingDecisionRelevant';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingDecisionRelevantRow.Fields || (MeetingDecisionRelevantRow.Fields = {}));
            ['DecisionRelevantId', 'DecisionId', 'ContactId', 'DecisionMeetingId', 'DecisionAgendaId', 'DecisionDescription', 'DecisionDecisionNumber', 'DecisionResponsibleContactId', 'DecisionDueDate', 'DecisionResolutionStatus', 'DecisionImages', 'DecisionAttachments', 'ContactTitle', 'ContactFirstName', 'ContactLastName', 'ContactEmail', 'ContactIdentityNo', 'ContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingDecisionRelevantRow = Meeting.MeetingDecisionRelevantRow || (Meeting.MeetingDecisionRelevantRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantService;
        (function (MeetingDecisionRelevantService) {
            MeetingDecisionRelevantService.baseUrl = 'Meeting/MeetingDecisionRelevant';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingDecisionRelevantService.Methods || (MeetingDecisionRelevantService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingDecisionRelevantService[x] = function (r, s, o) { return Q.serviceRequest(MeetingDecisionRelevantService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingDecisionRelevantService.baseUrl + '/' + x;
            });
        })(MeetingDecisionRelevantService = Meeting.MeetingDecisionRelevantService || (Meeting.MeetingDecisionRelevantService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRow;
        (function (MeetingDecisionRow) {
            MeetingDecisionRow.idProperty = 'DecisionId';
            MeetingDecisionRow.nameProperty = 'Description';
            MeetingDecisionRow.localTextPrefix = 'Meeting.MeetingDecision';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingDecisionRow.Fields || (MeetingDecisionRow.Fields = {}));
            ['DecisionId', 'MeetingId', 'AgendaId', 'Description', 'DecisionNumber', 'ResponsibleContactId', 'DueDate', 'ResolutionStatus', 'Images', 'Attachments', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'AgendaMeetingId', 'AgendaNumber', 'AgendaTitle', 'AgendaDescription', 'AgendaAgendaTypeId', 'AgendaRequestedByContactId', 'AgendaImages', 'AgendaAttachments', 'DecisionNumberName', 'ResponsibleContactTitle', 'ResponsibleContactFirstName', 'ResponsibleContactLastName', 'ResponsibleContactFullName', 'ResponsibleContactEmail', 'ResponsibleContactIdentityNo', 'ResponsibleContactUserId'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingDecisionRow = Meeting.MeetingDecisionRow || (Meeting.MeetingDecisionRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionService;
        (function (MeetingDecisionService) {
            MeetingDecisionService.baseUrl = 'Meeting/MeetingDecision';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingDecisionService.Methods || (MeetingDecisionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingDecisionService[x] = function (r, s, o) { return Q.serviceRequest(MeetingDecisionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingDecisionService.baseUrl + '/' + x;
            });
        })(MeetingDecisionService = Meeting.MeetingDecisionService || (Meeting.MeetingDecisionService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingForm = (function (_super) {
            __extends(MeetingForm, _super);
            function MeetingForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingForm;
        }(Serenity.PrefixedContext));
        MeetingForm.formKey = 'Meeting.Meeting';
        Meeting.MeetingForm = MeetingForm;
        [['MeetingName', function () { return Serenity.StringEditor; }], ['MeetingTypeId', function () { return Serenity.LookupEditor; }], ['MeetingNumber', function () { return Serenity.StringEditor; }], ['StartDate', function () { return Serenity.DateTimeEditor; }], ['EndDate', function () { return Serenity.DateTimeEditor; }], ['LocationId', function () { return Serenity.LookupEditor; }], ['UnitId', function () { return Serene.Organization.BusinessUnitEditor; }], ['OrganizerContactId', function () { return Serenity.LookupEditor; }], ['ReporterContactId', function () { return Serenity.LookupEditor; }], ['AttendeeList', function () { return Meeting.MeetingAttendeeEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationForm = (function (_super) {
            __extends(MeetingLocationForm, _super);
            function MeetingLocationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingLocationForm;
        }(Serenity.PrefixedContext));
        MeetingLocationForm.formKey = 'Meeting.MeetingLocation';
        Meeting.MeetingLocationForm = MeetingLocationForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Latitude', function () { return Serenity.DecimalEditor; }], ['Longitude', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingLocationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationRow;
        (function (MeetingLocationRow) {
            MeetingLocationRow.idProperty = 'LocationId';
            MeetingLocationRow.nameProperty = 'Name';
            MeetingLocationRow.localTextPrefix = 'Meeting.MeetingLocation';
            MeetingLocationRow.lookupKey = 'Meeting.MeetingLocation';
            function getLookup() {
                return Q.getLookup('Meeting.MeetingLocation');
            }
            MeetingLocationRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingLocationRow.Fields || (MeetingLocationRow.Fields = {}));
            ['LocationId', 'Name', 'Address', 'Latitude', 'Longitude'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingLocationRow = Meeting.MeetingLocationRow || (Meeting.MeetingLocationRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationService;
        (function (MeetingLocationService) {
            MeetingLocationService.baseUrl = 'Meeting/MeetingLocation';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingLocationService.Methods || (MeetingLocationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingLocationService[x] = function (r, s, o) { return Q.serviceRequest(MeetingLocationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingLocationService.baseUrl + '/' + x;
            });
        })(MeetingLocationService = Meeting.MeetingLocationService || (Meeting.MeetingLocationService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingRow;
        (function (MeetingRow) {
            MeetingRow.idProperty = 'MeetingId';
            MeetingRow.nameProperty = 'MeetingName';
            MeetingRow.localTextPrefix = 'Meeting.Meeting';
            var Fields;
            (function (Fields) {
            })(Fields = MeetingRow.Fields || (MeetingRow.Fields = {}));
            ['MeetingId', 'MeetingName', 'MeetingNumber', 'MeetingGuid', 'MeetingTypeId', 'StartDate', 'EndDate', 'LocationId', 'UnitId', 'OrganizerContactId', 'ReporterContactId', 'MeetingTypeName', 'LocationName', 'UnitName', 'UnitParentUnitId', 'OrganizerContactTitle', 'OrganizerContactFirstName', 'OrganizerContactLastName', 'OrganizerContactFullName', 'OrganizerContactEmail', 'OrganizerContactIdentityNo', 'OrganizerContactUserId', 'ReporterContactTitle', 'ReporterContactFirstName', 'ReporterContactLastName', 'ReporterContactFullName', 'ReporterContactEmail', 'ReporterContactIdentityNo', 'ReporterContactUserId', 'AttendeeList', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingRow = Meeting.MeetingRow || (Meeting.MeetingRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingService;
        (function (MeetingService) {
            MeetingService.baseUrl = 'Meeting/Meeting';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingService.Methods || (MeetingService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingService[x] = function (r, s, o) { return Q.serviceRequest(MeetingService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingService.baseUrl + '/' + x;
            });
        })(MeetingService = Meeting.MeetingService || (Meeting.MeetingService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeForm = (function (_super) {
            __extends(MeetingTypeForm, _super);
            function MeetingTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MeetingTypeForm;
        }(Serenity.PrefixedContext));
        MeetingTypeForm.formKey = 'Meeting.MeetingType';
        Meeting.MeetingTypeForm = MeetingTypeForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MeetingTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeRow;
        (function (MeetingTypeRow) {
            MeetingTypeRow.idProperty = 'MeetingTypeId';
            MeetingTypeRow.nameProperty = 'Name';
            MeetingTypeRow.localTextPrefix = 'Meeting.MeetingType';
            MeetingTypeRow.lookupKey = 'Meeting.MeetingType';
            function getLookup() {
                return Q.getLookup('Meeting.MeetingType');
            }
            MeetingTypeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MeetingTypeRow.Fields || (MeetingTypeRow.Fields = {}));
            ['MeetingTypeId', 'Name'].forEach(function (x) { return Fields[x] = x; });
        })(MeetingTypeRow = Meeting.MeetingTypeRow || (Meeting.MeetingTypeRow = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeService;
        (function (MeetingTypeService) {
            MeetingTypeService.baseUrl = 'Meeting/MeetingType';
            var Methods;
            (function (Methods) {
            })(Methods = MeetingTypeService.Methods || (MeetingTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MeetingTypeService[x] = function (r, s, o) { return Q.serviceRequest(MeetingTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MeetingTypeService.baseUrl + '/' + x;
            });
        })(MeetingTypeService = Meeting.MeetingTypeService || (Meeting.MeetingTypeService = {}));
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CategoryForm;
        }(Serenity.PrefixedContext));
        CategoryForm.formKey = 'Northwind.Category';
        Northwind.CategoryForm = CategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
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
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
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
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDetailsRow.Fields || (CustomerDetailsRow.Fields = {}));
            ['Id', 'LastContactDate', 'LastContactedBy', 'Email', 'SendBulletin', 'LastContactedByLastName', 'LastContactedByFirstName', 'LastContactedByTitle', 'LastContactedByTitleOfCourtesy', 'LastContactedByBirthDate', 'LastContactedByHireDate', 'LastContactedByAddress', 'LastContactedByCity', 'LastContactedByRegion', 'LastContactedByPostalCode', 'LastContactedByCountry', 'LastContactedByHomePhone', 'LastContactedByExtension', 'LastContactedByPhoto', 'LastContactedByNotes', 'LastContactedByReportsTo', 'LastContactedByPhotoPath'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CustomerForm;
        }(Serenity.PrefixedContext));
        CustomerForm.formKey = 'Northwind.Customer';
        Northwind.CustomerForm = CustomerForm;
        [['CustomerID', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['NoteList', function () { return Northwind.NotesEditor; }], ['LastContactDate', function () { return Serenity.DateEditor; }], ['LastContactedBy', function () { return Serenity.LookupEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['SendBulletin', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'BasicSamples.GrossSales';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerGrossSalesRow.Fields || (CustomerGrossSalesRow.Fields = {}));
            ['CustomerId', 'ContactName', 'ProductId', 'ProductName', 'GrossAmount'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
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
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives', 'LastContactDate', 'LastContactedBy', 'Email', 'SendBulletin'].forEach(function (x) { return Fields[x] = x; });
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
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
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
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
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
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'Serene.Northwind.Entities.Gender');
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        OrderDetailForm.formKey = 'Northwind.OrderDetail';
        Northwind.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OrderForm;
        }(Serenity.PrefixedContext));
        OrderForm.formKey = 'Northwind.Order';
        Northwind.OrderForm = OrderForm;
        [['CustomerID', function () { return Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Northwind.OrderDetailsEditor; }], ['ShippedDate', function () { return Serenity.DateEditor; }], ['ShipVia', function () { return Serenity.LookupEditor; }], ['Freight', function () { return Serenity.DecimalEditor; }], ['ShipName', function () { return Serenity.StringEditor; }], ['ShipAddress', function () { return Serenity.StringEditor; }], ['ShipCity', function () { return Serenity.StringEditor; }], ['ShipRegion', function () { return Serenity.StringEditor; }], ['ShipPostalCode', function () { return Serenity.StringEditor; }], ['ShipCountry', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.OrderShipCity');
            }
            OrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'EmployeeReportsToFullName', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
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
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnum(OrderShippingState, 'Northwind.OrderShippingState');
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProductForm;
        }(Serenity.PrefixedContext));
        ProductForm.formKey = 'Northwind.Product';
        Northwind.ProductForm = ProductForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
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
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RegionForm;
        }(Serenity.PrefixedContext));
        RegionForm.formKey = 'Northwind.Region';
        Northwind.RegionForm = RegionForm;
        [['RegionID', function () { return Serenity.IntegerEditor; }], ['RegionDescription', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RegionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ShipperForm;
        }(Serenity.PrefixedContext));
        ShipperForm.formKey = 'Northwind.Shipper';
        Northwind.ShipperForm = ShipperForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Phone', function () { return Northwind.PhoneEditor; }]].forEach(function (x) { return Object.defineProperty(ShipperForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SupplierForm;
        }(Serenity.PrefixedContext));
        SupplierForm.formKey = 'Northwind.Supplier';
        Northwind.SupplierForm = SupplierForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['HomePage', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        TerritoryForm.formKey = 'Northwind.Territory';
        Northwind.TerritoryForm = TerritoryForm;
        [['TerritoryID', function () { return Serenity.StringEditor; }], ['TerritoryDescription', function () { return Serenity.StringEditor; }], ['RegionID', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(TerritoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
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
    var Organization;
    (function (Organization) {
        var BusinessUnitForm = (function (_super) {
            __extends(BusinessUnitForm, _super);
            function BusinessUnitForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BusinessUnitForm;
        }(Serenity.PrefixedContext));
        BusinessUnitForm.formKey = 'Organization.BusinessUnit';
        Organization.BusinessUnitForm = BusinessUnitForm;
        [['Name', function () { return Serenity.StringEditor; }], ['ParentUnitId', function () { return Organization.BusinessUnitEditor; }]].forEach(function (x) { return Object.defineProperty(BusinessUnitForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitRow;
        (function (BusinessUnitRow) {
            BusinessUnitRow.idProperty = 'UnitId';
            BusinessUnitRow.nameProperty = 'Name';
            BusinessUnitRow.localTextPrefix = 'Organization.BusinessUnit';
            BusinessUnitRow.lookupKey = 'Organization.BusinessUnit';
            function getLookup() {
                return Q.getLookup('Organization.BusinessUnit');
            }
            BusinessUnitRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = BusinessUnitRow.Fields || (BusinessUnitRow.Fields = {}));
            ['UnitId', 'Name', 'ParentUnitId', 'ParentUnitName', 'ParentUnitParentUnitId'].forEach(function (x) { return Fields[x] = x; });
        })(BusinessUnitRow = Organization.BusinessUnitRow || (Organization.BusinessUnitRow = {}));
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitService;
        (function (BusinessUnitService) {
            BusinessUnitService.baseUrl = 'Organization/BusinessUnit';
            var Methods;
            (function (Methods) {
            })(Methods = BusinessUnitService.Methods || (BusinessUnitService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BusinessUnitService[x] = function (r, s, o) { return Q.serviceRequest(BusinessUnitService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BusinessUnitService.baseUrl + '/' + x;
            });
        })(BusinessUnitService = Organization.BusinessUnitService || (Organization.BusinessUnitService = {}));
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitsForm = (function (_super) {
            __extends(BusinessUnitsForm, _super);
            function BusinessUnitsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BusinessUnitsForm;
        }(Serenity.PrefixedContext));
        BusinessUnitsForm.formKey = 'Organization.BusinessUnits';
        Organization.BusinessUnitsForm = BusinessUnitsForm;
        [['Name', function () { return Serenity.StringEditor; }], ['ParentUnitId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(BusinessUnitsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitsRow;
        (function (BusinessUnitsRow) {
            BusinessUnitsRow.idProperty = 'UnitId';
            BusinessUnitsRow.nameProperty = 'Name';
            BusinessUnitsRow.localTextPrefix = 'Organization.BusinessUnits';
            var Fields;
            (function (Fields) {
            })(Fields = BusinessUnitsRow.Fields || (BusinessUnitsRow.Fields = {}));
            ['UnitId', 'Name', 'ParentUnitId', 'ParentUnitName', 'ParentUnitParentUnitId'].forEach(function (x) { return Fields[x] = x; });
        })(BusinessUnitsRow = Organization.BusinessUnitsRow || (Organization.BusinessUnitsRow = {}));
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitsService;
        (function (BusinessUnitsService) {
            BusinessUnitsService.baseUrl = 'Organization/BusinessUnits';
            var Methods;
            (function (Methods) {
            })(Methods = BusinessUnitsService.Methods || (BusinessUnitsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BusinessUnitsService[x] = function (r, s, o) { return Q.serviceRequest(BusinessUnitsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BusinessUnitsService.baseUrl + '/' + x;
            });
        })(BusinessUnitsService = Organization.BusinessUnitsService || (Organization.BusinessUnitsService = {}));
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var ContactForm = (function (_super) {
            __extends(ContactForm, _super);
            function ContactForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ContactForm;
        }(Serenity.PrefixedContext));
        ContactForm.formKey = 'Organization.Contact';
        Organization.ContactForm = ContactForm;
        [['Title', function () { return Serenity.StringEditor; }], ['FirstName', function () { return Serenity.StringEditor; }], ['LastName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['IdentityNo', function () { return Serenity.StringEditor; }], ['UserId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ContactForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var ContactRow;
        (function (ContactRow) {
            ContactRow.idProperty = 'ContactId';
            ContactRow.nameProperty = 'FullName';
            ContactRow.localTextPrefix = 'Organization.Contact';
            ContactRow.lookupKey = 'Organization.Contact';
            function getLookup() {
                return Q.getLookup('Organization.Contact');
            }
            ContactRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ContactRow.Fields || (ContactRow.Fields = {}));
            ['ContactId', 'Title', 'FirstName', 'LastName', 'FullName', 'Email', 'IdentityNo', 'UserId', 'Username', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive'].forEach(function (x) { return Fields[x] = x; });
        })(ContactRow = Organization.ContactRow || (Organization.ContactRow = {}));
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var ContactService;
        (function (ContactService) {
            ContactService.baseUrl = 'Organization/Contact';
            var Methods;
            (function (Methods) {
            })(Methods = ContactService.Methods || (ContactService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ContactService[x] = function (r, s, o) { return Q.serviceRequest(ContactService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ContactService.baseUrl + '/' + x;
            });
        })(ContactService = Organization.ContactService || (Organization.ContactService = {}));
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
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
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
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
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
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
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Serene.Authorization || (Serene.Authorization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
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
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
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
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
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
                return _super.call(this, container) || this;
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
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = ChartInDialog_1 = (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog_1()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        ChartInDialog = ChartInDialog_1 = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.resizable(),
            Serenity.Decorators.maximizable()
        ], ChartInDialog);
        BasicSamples.ChartInDialog = ChartInDialog;
        var ChartInDialog_1;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            return ProductDialog;
        }(Serenity.EntityDialog));
        ProductDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], ProductDialog);
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            return CloneableEntityDialog;
        }(Serene.Northwind.ProductDialog));
        CloneableEntityDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], CloneableEntityDialog);
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var fld = Northwind.ProductRow.Fields;
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + id + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var fld = Northwind.ProductRow.Fields;
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === fld.CategoryName; });
                category.referencedFields = [fld.CategoryID];
                category.format = function (ctx) { return _this.selectFormatter(ctx, fld.CategoryID, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === fld.SupplierCompanyName; });
                supplier.referencedFields = [fld.SupplierID];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, fld.SupplierID, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === fld.UnitPrice; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsInStock; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsOnOrder; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.ReorderLevel; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            return ProductGrid;
        }(Serenity.EntityGrid));
        ProductGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], ProductGrid);
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            return CloneableEntityGrid;
        }(Serene.Northwind.ProductGrid));
        CloneableEntityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CloneableEntityGrid);
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    }
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                var fld = Northwind.OrderRow.Fields;
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        Serene.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            return OrderGrid;
        }(Serenity.EntityGrid));
        OrderGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], OrderGrid);
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: Serene.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: Serene.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: Serene.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: Serene.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new Serene.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = Serene.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = Serene.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            return DefaultValuesInNewGrid;
        }(Serene.Northwind.OrderGrid));
        DefaultValuesInNewGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], DefaultValuesInNewGrid);
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
                alertWithHtmlContent();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
            function alertWithHtmlContent() {
                $('#AlertWithHtmlContent').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serene.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            return OrderDialog;
        }(Serenity.EntityDialog));
        OrderDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDialog);
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var EntityDialogAsPanel = (function (_super) {
            __extends(EntityDialogAsPanel, _super);
            function EntityDialogAsPanel() {
                var _this = _super.call(this) || this;
                _this.element.addClass('flex-layout');
                return _this;
            }
            return EntityDialogAsPanel;
        }(Serene.Northwind.OrderDialog));
        EntityDialogAsPanel = __decorate([
            Serenity.Decorators.panel()
        ], EntityDialogAsPanel);
        BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            return CategoryDialog;
        }(Serenity.EntityDialog));
        CategoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CategoryDialog);
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew()) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    Serene.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            return GetInsertedRecordIdDialog;
        }(Serene.Northwind.CategoryDialog));
        GetInsertedRecordIdDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GetInsertedRecordIdDialog);
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            return CategoryGrid;
        }(Serenity.EntityGrid));
        CategoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CategoryGrid);
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            return GetInsertedRecordIdGrid;
        }(Serene.Northwind.CategoryGrid));
        GetInsertedRecordIdGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GetInsertedRecordIdGrid);
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Styling for columns is done with CSS in site.basicsamples.less file.
         * When comparing this to MultiColumnDialog sample, you may notice that
         * this version requires much less JS and CSS code.
         */
        var MultiColumnResponsiveDialog = (function (_super) {
            __extends(MultiColumnResponsiveDialog, _super);
            function MultiColumnResponsiveDialog() {
                return _super.call(this) || this;
            }
            return MultiColumnResponsiveDialog;
        }(Serene.Northwind.OrderDialog));
        MultiColumnResponsiveDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], MultiColumnResponsiveDialog);
        BasicSamples.MultiColumnResponsiveDialog = MultiColumnResponsiveDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
         */
        var MultiColumnResponsiveGrid = (function (_super) {
            __extends(MultiColumnResponsiveGrid, _super);
            function MultiColumnResponsiveGrid(container) {
                return _super.call(this, container) || this;
            }
            MultiColumnResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.MultiColumnResponsiveDialog; };
            return MultiColumnResponsiveGrid;
        }(Serene.Northwind.OrderGrid));
        MultiColumnResponsiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MultiColumnResponsiveGrid);
        BasicSamples.MultiColumnResponsiveGrid = MultiColumnResponsiveGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         */
        var OtherFormInTabDialog = (function (_super) {
            __extends(OtherFormInTabDialog, _super);
            function OtherFormInTabDialog() {
                var _this = _super.call(this) || this;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(Serene.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new Serene.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                Serene.Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(Serene.Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    Serene.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormInTabDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(Serene.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            return OtherFormInTabDialog;
        }(Serene.Northwind.OrderDialog));
        OtherFormInTabDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormInTabDialog);
        BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
         */
        var OtherFormInTabGrid = (function (_super) {
            __extends(OtherFormInTabGrid, _super);
            function OtherFormInTabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
            return OtherFormInTabGrid;
        }(Serene.Northwind.OrderGrid));
        OtherFormInTabGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormInTabGrid);
        BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         * With single toolbar for all forms
         */
        var OtherFormOneBarDialog = (function (_super) {
            __extends(OtherFormOneBarDialog, _super);
            function OtherFormOneBarDialog() {
                var _this = _super.call(this) || this;
                _this.selfChange = 0;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(Serene.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new Serene.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.form.CustomerID.change(function (e) {
                    if (_this.selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    Serene.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormOneBarDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(Serene.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            // Save the customer and the order 
            OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                var _this = this;
                var id = this.getCustomerID();
                if (!id) {
                    // If id of Customer isn't present, we save only Order entity
                    onSuccess(null);
                }
                else {
                    // Get current tab
                    var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                    // Select the correct tab and validate to see the error message in tab
                    Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                    if (!this.customerValidator.form()) {
                        return false;
                    }
                    // Re-select initial tab
                    Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                    // prepare an empty entity to serialize customer details into
                    var c = {};
                    this.customerPropertyGrid.save(c);
                    Serene.Northwind.CustomerService.Update({
                        EntityId: id,
                        Entity: c
                    }, function (response) {
                        // reload customer list just in case
                        Q.reloadLookup(Serene.Northwind.CustomerRow.lookupKey);
                        // set flag that we are triggering customer select change event
                        // otherwise active tab will change to first one
                        _this.selfChange++;
                        try {
                            // trigger change so that customer select updates its text
                            // in case if Company Name is changed
                            _this.form.CustomerID.element.change();
                        }
                        finally {
                            _this.selfChange--;
                        }
                        onSuccess(response);
                    });
                }
                return true;
            };
            // Call super.save to save Order entity
            OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                _super.prototype.save.call(this, callback);
            };
            OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                var _this = this;
                this.saveCustomer(callback, 
                // If customer successa, save Order entity
                function (resp) { return _this.saveOrder(callback); });
            };
            // This is called when save/update button is pressed
            OtherFormOneBarDialog.prototype.save = function (callback) {
                this.saveAll(callback);
            };
            return OtherFormOneBarDialog;
        }(Serene.Northwind.OrderDialog));
        OtherFormOneBarDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormOneBarDialog);
        BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
         */
        var OtherFormInTabOneBarGrid = (function (_super) {
            __extends(OtherFormInTabOneBarGrid, _super);
            function OtherFormInTabOneBarGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
            return OtherFormInTabOneBarGrid;
        }(Serene.Northwind.OrderGrid));
        OtherFormInTabOneBarGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormInTabOneBarGrid);
        BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                _this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(Serene.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    Serene.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
                return _this;
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return Serene.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return Serene.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return Serene.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return Serene.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        PopulateLinkedDataDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PopulateLinkedDataDialog);
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                return _super.call(this, container) || this;
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            return PopulateLinkedDataGrid;
        }(Serene.Northwind.OrderGrid));
        PopulateLinkedDataGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PopulateLinkedDataGrid);
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return Serene.LanguageList.getValue();
            };
            return SupplierDialog;
        }(Serenity.EntityDialog));
        SupplierDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SupplierDialog);
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            return ReadOnlyDialog;
        }(Serene.Northwind.SupplierDialog));
        ReadOnlyDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ReadOnlyDialog);
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            return SupplierGrid;
        }(Serenity.EntityGrid));
        SupplierGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SupplierGrid);
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return ReadOnlyGrid;
        }(Serene.Northwind.SupplierGrid));
        ReadOnlyGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ReadOnlyGrid);
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Adding Responsive attribute makes this dialog use full screen in mobile devices.
         */
        var ResponsiveDialog = (function (_super) {
            __extends(ResponsiveDialog, _super);
            function ResponsiveDialog() {
                return _super.call(this) || this;
            }
            ResponsiveDialog.prototype.getFormKey = function () { return Serene.Northwind.OrderForm.formKey; };
            ResponsiveDialog.prototype.getIdProperty = function () { return Serene.Northwind.OrderRow.idProperty; };
            ResponsiveDialog.prototype.getLocalTextPrefix = function () { return Serene.Northwind.OrderRow.localTextPrefix; };
            ResponsiveDialog.prototype.getNameProperty = function () { return Serene.Northwind.OrderRow.nameProperty; };
            ResponsiveDialog.prototype.getService = function () { return Serene.Northwind.OrderService.baseUrl; };
            return ResponsiveDialog;
        }(Serenity.EntityDialog));
        ResponsiveDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], ResponsiveDialog);
        BasicSamples.ResponsiveDialog = ResponsiveDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to ResponsiveDialog
         */
        var ResponsiveGrid = (function (_super) {
            __extends(ResponsiveGrid, _super);
            function ResponsiveGrid(container) {
                return _super.call(this, container) || this;
            }
            ResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.ResponsiveDialog; };
            return ResponsiveGrid;
        }(Serene.Northwind.OrderGrid));
        ResponsiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ResponsiveGrid);
        BasicSamples.ResponsiveGrid = ResponsiveGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                _this.ordersGrid.element.flexHeightOnly(1);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Serene.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            return CustomerDialog;
        }(Serenity.EntityDialog));
        CustomerDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerDialog);
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    Serene.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            return SerialAutoNumberDialog;
        }(Serene.Northwind.CustomerDialog));
        SerialAutoNumberDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SerialAutoNumberDialog);
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(Serene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            return CustomerGrid;
        }(Serenity.EntityGrid));
        CustomerGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], CustomerGrid);
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            return SerialAutoNumberGrid;
        }(Serene.Northwind.CustomerGrid));
        SerialAutoNumberGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SerialAutoNumberGrid);
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextDialog = (function (_super) {
            __extends(ChangingLookupTextDialog, _super);
            function ChangingLookupTextDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Serene.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
            ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return Serene.Northwind.OrderDetailRow.localTextPrefix; };
            ChangingLookupTextDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('save-and-close-button').hide();
            };
            return ChangingLookupTextDialog;
        }(Serene.Common.GridEditorDialog));
        ChangingLookupTextDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangingLookupTextDialog);
        BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom product editor type
         */
        var ChangingLookupTextEditor = (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return Serene.Northwind.ProductRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                    ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    ', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        ChangingLookupTextEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], ChangingLookupTextEditor);
        BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            return OrderDetailDialog;
        }(Serene.Common.GridEditorDialog));
        OrderDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDetailDialog);
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Serene.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = Serene.Northwind.ProductRow.Fields.CategoryID;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            return FilteredLookupOrderDetailDialog;
        }(Serene.Northwind.OrderDetailDialog));
        FilteredLookupOrderDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], FilteredLookupOrderDetailDialog);
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            return OrderDetailsEditor;
        }(Serene.Common.GridEditorBase));
        OrderDetailsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDetailsEditor);
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            return FilteredLookupDetailEditor;
        }(Serene.Northwind.OrderDetailsEditor));
        FilteredLookupDetailEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], FilteredLookupDetailEditor);
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return Serene.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return Serene.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return Serene.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return Serene.Northwind.OrderService.baseUrl; };
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        FilteredLookupInDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], FilteredLookupInDetailDialog);
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            return FilteredLookupInDetailGrid;
        }(Serene.Northwind.OrderGrid));
        FilteredLookupInDetailGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], FilteredLookupInDetailGrid);
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            return LookupFilterByMultipleDialog;
        }(Serene.Northwind.ProductDialog));
        LookupFilterByMultipleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LookupFilterByMultipleDialog);
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            return LookupFilterByMultipleGrid;
        }(Serene.Northwind.ProductGrid));
        LookupFilterByMultipleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LookupFilterByMultipleGrid);
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return Serene.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        ProduceSeafoodCategoryEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], ProduceSeafoodCategoryEditor);
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesDialog = (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        HardcodedValuesDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], HardcodedValuesDialog);
        BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("key1", "Text 1");
                _this.addOption("key2", "Text 2");
                // you may also use addItem which accepts a Select2Item parameter
                _this.addItem({
                    id: "key3",
                    text: "Text 3"
                });
                // don't let selecting this one (disabled)
                _this.addItem({
                    id: "key4",
                    text: "Text 4",
                    disabled: true
                });
                return _this;
            }
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        HardcodedValuesEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], HardcodedValuesEditor);
        BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        return StaticTextBlock;
    }(Serenity.Widget));
    StaticTextBlock = __decorate([
        Serenity.Decorators.element("<div/>"),
        Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    ], StaticTextBlock);
    Serene.StaticTextBlock = StaticTextBlock;
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockDialog = (function (_super) {
            __extends(StaticTextBlockDialog, _super);
            function StaticTextBlockDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                _this.dialogTitle = "A form with static text blocks";
                return _this;
            }
            StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
            /**
             * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
             * If this was an EntityDialog, your field value would be originating from server side entity.
             */
            StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                this.propertyGrid.load({
                    DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                });
            };
            StaticTextBlockDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 650;
                return opt;
            };
            return StaticTextBlockDialog;
        }(Serenity.PropertyDialog));
        StaticTextBlockDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], StaticTextBlockDialog);
        BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Serene.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Common/Helpers/BulkServiceAction.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(Serene.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
/// <reference path="OrderBulkAction.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                return _super.call(this, container) || this;
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            return CancellableBulkActionGrid;
        }(Serene.Northwind.OrderGrid));
        CancellableBulkActionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CancellableBulkActionGrid);
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                return _super.call(this, container) || this;
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return Serene.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return Serene.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return Serene.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return Serene.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = Serene.Northwind.ProductRow.Fields;
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == fld.UnitPrice; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        ConditionalFormattingGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ConditionalFormattingGrid);
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = Serene.Northwind.OrderRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.CustomerCompanyName; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.OrderDate; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.EmployeeFullName; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.ShipCountry; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(Serene.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new Serene.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new Serene.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(item.OrderDate) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new Serene.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, Serene.Northwind.OrderRow.Fields.ShipCountry);
                    countryFilter.value = item.ShipCountry;
                    this.refresh();
                }
            };
            /**
             * This method is called for columns with [EditLink] attribute,
             * but only for edit links of this grid's own item type.
             * It is also called by Add Product button with a NULL entityOrId
             * parameter so we should check that entityOrId is a string
             * to be sure it is originating from a link.
             *
             * As we changed format for other columns, this will only be called
             * for links in remaining OrderID column
             */
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(item.OrderDate);
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new Serene.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            return CustomLinksInGrid;
        }(Serene.Northwind.OrderGrid));
        CustomLinksInGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomLinksInGrid);
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleDialog = (function (_super) {
            __extends(DragDropSampleDialog, _super);
            function DragDropSampleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BasicSamples.DragDropSampleForm(_this.idPrefix);
                return _this;
            }
            DragDropSampleDialog.prototype.getFormKey = function () { return BasicSamples.DragDropSampleForm.formKey; };
            DragDropSampleDialog.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleDialog.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleDialog.prototype.getNameProperty = function () { return BasicSamples.DragDropSampleRow.nameProperty; };
            DragDropSampleDialog.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            return DragDropSampleDialog;
        }(Serenity.EntityDialog));
        DragDropSampleDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], DragDropSampleDialog);
        BasicSamples.DragDropSampleDialog = DragDropSampleDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleGrid = (function (_super) {
            __extends(DragDropSampleGrid, _super);
            function DragDropSampleGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    toggleField: BasicSamples.DragDropSampleRow.Fields.Title,
                    getParentId: function (x) { return x.ParentId; },
                    initialCollapse: function () { return false; },
                });
                // save prior drag target to restore its color during drag
                var priorDragTarget;
                // prevent the grid from cancelling drag'n'drop by default
                _this.slickGrid.onDragInit.subscribe(function (e, dd) {
                    e.stopImmediatePropagation();
                });
                // this method is called when an item is about to be dragged
                _this.slickGrid.onDragStart.subscribe(function (e, dd) {
                    // only allow edit links to be dragged
                    if (!$(e.target).hasClass('s-EditLink'))
                        return;
                    // make sure there is a cell in source location
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell) {
                        return;
                    }
                    // notify that we'll handle drag
                    e.stopImmediatePropagation();
                    // save details about dragged item
                    dd.row = cell.row;
                    var item = _this.itemAt(cell.row);
                    dd.item = item;
                    // a unique name for our operation
                    dd.mode = "move";
                    // create an absolute position helper shown during dragging
                    var helper = $("<span></span>")
                        .addClass('drag-helper')
                        .text("Moving " + item.Title)
                        .appendTo(document.body);
                    dd.helper = helper;
                });
                // this method is periodically called during drag
                _this.slickGrid.onDrag.subscribe(function (e, dd) {
                    // only handle our operation
                    if (dd.mode != "move") {
                        return;
                    }
                    // if we changed color of some target before, reset it
                    if (priorDragTarget && priorDragTarget != e.target) {
                        $(priorDragTarget).css('background-color', '');
                        priorDragTarget = null;
                    }
                    // find target, the source will drag into
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // accept only edit links and valid items as drag target
                    var reject = !$(e.target).hasClass('s-EditLink') || !_this.canMoveUnder(dd.item, target);
                    if (reject) {
                        dd.helper.text("Can't move " + dd.item.Title + " here");
                    }
                    else {
                        dd.helper.text("Move " + dd.item.Title + " under " + $(e.target).text());
                        // change color of current drag target
                        $(e.target).css('background-color', '#ddeeee');
                        priorDragTarget = e.target;
                    }
                    // toggle class of helper to show relevant accept / reject icon
                    dd.helper.toggleClass('reject', reject);
                    // position helper next to current mouse position
                    dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
                });
                // this is called when drag is completed
                _this.slickGrid.onDragEnd.subscribe(function (e, dd) {
                    if (dd.mode != "move") {
                        return;
                    }
                    // prevent browser from changing url
                    e.preventDefault();
                    // clear indicator color and drag helper
                    priorDragTarget && $(priorDragTarget).css('background-color', '');
                    dd.helper.remove();
                    // determine target row
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var item = dd.item;
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // check again that this is valid drag target
                    if ($(e.target).hasClass('s-EditLink') && _this.canMoveUnder(item, target)) {
                        // this will move our primary drag source under new parent
                        var moveItem = function (onSuccess) {
                            BasicSamples.DragDropSampleService.Update({
                                EntityId: item.Id,
                                Entity: {
                                    ParentId: target.Id
                                }
                            }, onSuccess);
                        };
                        // if drag source has some children, need some confirmation
                        var children = _this.getChildren(dd.item);
                        if (children.length > 0) {
                            Q.confirm('Move its children alongside the item?', function () {
                                // if responded yes, moving item under new parent should be enough
                                moveItem(function () { return _this.refresh(); });
                            }, {
                                onNo: function () {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentId == null ? null : item.ParentId;
                                    var moveNextChild = function (onSuccess) {
                                        var _this = this;
                                        if (children.length) {
                                            var x = children.shift();
                                            BasicSamples.DragDropSampleService.Update({
                                                EntityId: x.Id,
                                                Entity: {
                                                    ParentId: oldParentId || null
                                                }
                                            }, function () { return moveNextChild(onSuccess); }, {
                                                onError: function () { return _this.refresh(); }
                                            });
                                        }
                                        else
                                            onSuccess();
                                    };
                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(function () { return moveNextChild(function () { return _this.refresh(); }); });
                                }
                            });
                        }
                        else {
                            // item has no children, just move it under new parent
                            moveItem(function () { return _this.refresh(); });
                        }
                    }
                    return false;
                });
                return _this;
            }
            DragDropSampleGrid.prototype.getColumnsKey = function () { return 'BasicSamples.DragDropSample'; };
            DragDropSampleGrid.prototype.getDialogType = function () { return BasicSamples.DragDropSampleDialog; };
            DragDropSampleGrid.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleGrid.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleGrid.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            /**
             * This method will determine if item can be moved under a given target
             * An item can't be moved under itself, under one of its children
             */
            DragDropSampleGrid.prototype.canMoveUnder = function (item, target) {
                if (!item || !target || item.Id == target.Id || item.ParentId == target.Id)
                    return false;
                if (Q.any(this.getParents(target), function (x) { return x.Id == item.Id; }))
                    return false;
                return true;
            };
            /**
             * Gets children list of an item
             */
            DragDropSampleGrid.prototype.getChildren = function (item) {
                return this.getItems().filter(function (x) { return x.ParentId == item.Id; });
            };
            /**
             * Gets all parents of an item
             */
            DragDropSampleGrid.prototype.getParents = function (item) {
                // use this to prevent infinite recursion
                var visited = {};
                var result = [];
                // while item has a parent and not visited yet
                while (item.ParentId && !visited[item.ParentId]) {
                    // find parent by its ID
                    item = this.view.getItemById(item.ParentId);
                    if (!item)
                        break;
                    result.push(item);
                    visited[item.Id] = true;
                }
                return result;
            };
            DragDropSampleGrid.prototype.getButtons = function () {
                return [];
            };
            DragDropSampleGrid.prototype.usePager = function () {
                return false;
            };
            return DragDropSampleGrid;
        }(Serenity.EntityGrid));
        DragDropSampleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], DragDropSampleGrid);
        BasicSamples.DragDropSampleGrid = DragDropSampleGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var SelectableEntityGrid = (function (_super) {
        __extends(SelectableEntityGrid, _super);
        function SelectableEntityGrid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectableEntityGrid.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        };
        SelectableEntityGrid.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        };
        return SelectableEntityGrid;
    }(Serenity.EntityGrid));
    SelectableEntityGrid = __decorate([
        Serenity.Decorators.registerClass()
    ], SelectableEntityGrid);
    Serene.SelectableEntityGrid = SelectableEntityGrid;
})(Serene || (Serene = {}));
/// <reference path="SelectableEntityGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var RowSelectionGrid = (function (_super) {
            __extends(RowSelectionGrid, _super);
            function RowSelectionGrid(container) {
                return _super.call(this, container) || this;
            }
            RowSelectionGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            RowSelectionGrid.prototype.getDialogType = function () { return Serene.Northwind.SupplierDialog; };
            RowSelectionGrid.prototype.getIdProperty = function () { return Serene.Northwind.SupplierRow.idProperty; };
            RowSelectionGrid.prototype.getLocalTextPrefix = function () { return Serene.Northwind.SupplierRow.localTextPrefix; };
            RowSelectionGrid.prototype.getService = function () { return Serene.Northwind.SupplierService.baseUrl; };
            return RowSelectionGrid;
        }(Serene.SelectableEntityGrid));
        RowSelectionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RowSelectionGrid);
        BasicSamples.RowSelectionGrid = RowSelectionGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                return _super.call(this, container) || this;
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            return GridFilteredByCriteria;
        }(Serene.Northwind.ProductGrid));
        GridFilteredByCriteria = __decorate([
            Serenity.Decorators.registerClass()
        ], GridFilteredByCriteria);
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg('UnitPrice'),
                        new Slick.Aggregators.Sum('UnitsInStock'),
                        new Slick.Aggregators.Max('UnitsOnOrder'),
                        new Slick.Aggregators.Avg('ReorderLevel')
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: 'CategoryName'
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'CategoryName'
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'SupplierCompanyName'
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            return GroupingAndSummariesInGrid;
        }(Serene.Northwind.ProductGrid));
        GroupingAndSummariesInGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GroupingAndSummariesInGrid);
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // get a reference to order row field names
                var fld = Serene.Northwind.OrderRow.Fields;
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == fld.OrderDate; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 2016-05-01
                    w.valueAsDate = new Date(2016, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(2016, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == fld.ShippingState; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = Serene.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
            /**
             * This method is another possible place to modify quick filter widgets.
             * It is where the quick filter widgets are actually created.
             *
             * By default, it calls getQuickFilters() then renders UI for these
             * quick filters.
             *
             * We could use getQuickFilters() method for ShipVia too,
             * but this is for demonstration purposes
             */
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // get a reference to order row field names
                var fld = Serene.Northwind.OrderRow.Fields;
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, fld.ShipVia).values = ["1", "2"];
            };
            return InitialValuesForQuickFilters;
        }(Serene.Northwind.OrderGrid));
        InitialValuesForQuickFilters = __decorate([
            Serenity.Decorators.registerClass()
        ], InitialValuesForQuickFilters);
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineActionGrid = (function (_super) {
            __extends(InlineActionGrid, _super);
            function InlineActionGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineActionGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(2, 0, {
                    field: 'New Order',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action new-order" title="new order"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InlineActionGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            Serene.Northwind.CustomerService.Delete({
                                EntityId: item.ID,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ID);
                    }
                    else if (target.hasClass('new-order')) {
                        var dlg = new Serene.Northwind.OrderDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: item.CustomerID
                        });
                    }
                }
            };
            return InlineActionGrid;
        }(Serene.Northwind.CustomerGrid));
        InlineActionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], InlineActionGrid);
        BasicSamples.InlineActionGrid = InlineActionGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            return InlineImageFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], InlineImageFormatter.prototype, "fileProperty", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], InlineImageFormatter.prototype, "thumb", void 0);
        InlineImageFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], InlineImageFormatter);
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return Serene.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return Serene.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return Serene.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return Serene.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        InlineImageInGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], InlineImageInGrid);
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportDialog = (function (_super) {
            __extends(ProductExcelImportDialog, _super);
            function ProductExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ProductExcelImportForm(_this.idPrefix);
                return _this;
            }
            ProductExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            BasicSamples.ProductExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            return ProductExcelImportDialog;
        }(Serenity.PropertyDialog));
        ProductExcelImportDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductExcelImportDialog);
        BasicSamples.ProductExcelImportDialog = ProductExcelImportDialog;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportGrid = (function (_super) {
            __extends(ProductExcelImportGrid, _super);
            function ProductExcelImportGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            ProductExcelImportGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new BasicSamples.ProductExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            return ProductExcelImportGrid;
        }(Serene.Northwind.ProductGrid));
        ProductExcelImportGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductExcelImportGrid);
        BasicSamples.ProductExcelImportGrid = ProductExcelImportGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var QuickFilterCustomization = (function (_super) {
            __extends(QuickFilterCustomization, _super);
            function QuickFilterCustomization(container) {
                return _super.call(this, container) || this;
            }
            QuickFilterCustomization.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            QuickFilterCustomization.prototype.getDialogType = function () { return Serene.Northwind.OrderDialog; };
            QuickFilterCustomization.prototype.getIdProperty = function () { return Serene.Northwind.OrderRow.idProperty; };
            QuickFilterCustomization.prototype.getLocalTextPrefix = function () { return Serene.Northwind.OrderRow.localTextPrefix; };
            QuickFilterCustomization.prototype.getService = function () { return Serene.Northwind.OrderService.baseUrl; };
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            QuickFilterCustomization.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                // get a reference to order row field names
                var fld = Serene.Northwind.OrderRow.Fields;
                // we start by turning CustomerID filter to a Not Equal one
                var filter = Q.first(filters, function (x) { return x.field == fld.CustomerID; });
                filter.title = "Customer Not Equal To";
                filter.handler = function (h) {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.CustomerID], '!=', h.value]);
                    }
                };
                // turn order date filter to exact match, not a range
                filter = Q.first(filters, function (x) { return x.field == fld.OrderDate; });
                filter.title = "Order Date Is Exactly";
                // element method in DataGrid turns this into a range editor, clear it to prevent
                filter.element = function (e) { };
                // need to override handler too, otherwise default handler will try to handle a date range
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.EqualityFilter[fld.OrderDate] = h.value;
                    }
                    else {
                        h.request.EqualityFilter[fld.OrderDate] = null;
                    }
                };
                // make employee filter a textbox, instead of lookup, and search by starts with
                filter = Q.first(filters, function (x) { return x.field == fld.EmployeeID; });
                filter.title = "Employee Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.EmployeeFullName], 'like', h.value + '%']);
                    }
                };
                // turn shipping state into a boolean filter
                filter = Q.first(filters, function (x) { return x.field == fld.ShippingState; });
                filter.title = "Show Only Shipped";
                filter.type = Serenity.BooleanEditor;
                filter.handler = function (h) {
                    h.active = !!h.value;
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, ['is not null', [fld.ShippedDate]]);
                    }
                };
                // ship via filters by NOT IN
                filter = Q.first(filters, function (x) { return x.field == fld.ShipVia; });
                filter.title = "Ship Via Not IN";
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.ShipVia], 'not in', [h.value]]);
                    }
                };
                // ship country filters by NOT contains
                filter = Q.first(filters, function (x) { return x.field == fld.ShipCountry; });
                filter.title = "Ship Country NOT Contains";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.ShipCountry], 'not like', '%' + h.value + '%']);
                    }
                };
                // ship city filters by GREATER THAN (>)
                filter = Q.first(filters, function (x) { return x.field == fld.ShipCity; });
                filter.title = "Ship City Greater Than";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.ShipCity], '>', h.value]);
                    }
                };
                // create a range editor for freight
                var endFreight = null;
                filters.push({
                    field: fld.Freight,
                    type: Serenity.DecimalEditor,
                    title: 'Freight Between',
                    element: function (e1) {
                        e1.css("width", "80px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "80px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.Freight], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.Freight], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            return QuickFilterCustomization;
        }(Serenity.EntityGrid));
        QuickFilterCustomization = __decorate([
            Serenity.Decorators.registerClass()
        ], QuickFilterCustomization);
        BasicSamples.QuickFilterCustomization = QuickFilterCustomization;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return RemovingAddButton;
        }(Serene.Northwind.SupplierGrid));
        RemovingAddButton = __decorate([
            Serenity.Decorators.registerClass()
        ], RemovingAddButton);
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesGrid = (function (_super) {
            __extends(CustomerGrossSalesGrid, _super);
            function CustomerGrossSalesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            CustomerGrossSalesGrid.prototype.getColumnsKey = function () { return "BasicSamples.CustomerGrossSales"; };
            CustomerGrossSalesGrid.prototype.getIdProperty = function () { return "__id"; };
            CustomerGrossSalesGrid.prototype.getNameProperty = function () { return Serene.Northwind.CustomerGrossSalesRow.nameProperty; };
            CustomerGrossSalesGrid.prototype.getLocalTextPrefix = function () { return Serene.Northwind.CustomerGrossSalesRow.localTextPrefix; };
            CustomerGrossSalesGrid.prototype.getService = function () { return BasicSamples.CustomerGrossSalesService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            CustomerGrossSalesGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            CustomerGrossSalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push(Serene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: BasicSamples.CustomerGrossSalesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrossSalesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('GrossAmount')
                    ]
                });
                this.view.setGrouping([{
                        getter: 'ContactName'
                    }]);
                return grid;
            };
            CustomerGrossSalesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            CustomerGrossSalesGrid.prototype.usePager = function () {
                return false;
            };
            CustomerGrossSalesGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    args.request.StartDate = start;
                    args.request.EndDate = end;
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            return CustomerGrossSalesGrid;
        }(Serenity.EntityGrid));
        CustomerGrossSalesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerGrossSalesGrid);
        BasicSamples.CustomerGrossSalesGrid = CustomerGrossSalesGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var TreeGrid = (function (_super) {
            __extends(TreeGrid, _super);
            function TreeGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return true; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: Serene.Northwind.OrderRow.Fields.CustomerCompanyName,
                    getParentId: function (x) {
                        // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                        // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                        var parentId = Math.floor(x.OrderID / 10) * 10;
                        if (parentId == x.OrderID) {
                            parentId = Math.floor(x.OrderID / 50) * 50;
                            // orders with ID 16050 and 17000 should have NULL parent
                            if (parentId == x.OrderID)
                                return null;
                        }
                        // if you had a ParentID column, you'd just return x.ParentID
                        return parentId;
                    }
                });
                return _this;
            }
            TreeGrid.prototype.usePager = function () {
                return false;
            };
            return TreeGrid;
        }(Serene.Northwind.OrderGrid));
        TreeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TreeGrid);
        BasicSamples.TreeGrid = TreeGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                var _this = _super.call(this, container) || this;
                // this is our autoincrementing counter
                _this.nextId = 1;
                return _this;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return Serene.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return Serene.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return Serene.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        ViewWithoutIDGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ViewWithoutIDGrid);
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAGrid = (function (_super) {
            __extends(VSGalleryQAGrid, _super);
            function VSGalleryQAGrid(container) {
                return _super.call(this, container) || this;
            }
            VSGalleryQAGrid.prototype.getColumnsKey = function () { return "BasicSamples.VSGalleryQA"; };
            VSGalleryQAGrid.prototype.getIdProperty = function () { return "ThreadId"; };
            VSGalleryQAGrid.prototype.getService = function () { return BasicSamples.VSGalleryQAService.baseUrl; };
            VSGalleryQAGrid.prototype.getButtons = function () {
                return [];
            };
            VSGalleryQAGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 250;
                return opt;
            };
            VSGalleryQAGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == 'Posts'; }).format = function (ctx) {
                    var posts = ctx.value;
                    if (!posts || !posts.length)
                        return "";
                    var i = 0;
                    var text = "<ul class='posts'>";
                    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                        var post = posts_1[_i];
                        text += "<li class='" + (i++ % 2 == 0 ? 'even' : 'odd') + "'><h4>";
                        text += post.PostedByName + " - ";
                        text += Q.formatDate(post.PostedOn, 'g');
                        text += "</h4><pre>";
                        text += Q.htmlEncode(post.Message);
                        text += "</pre></li>";
                    }
                    text += "</ul>";
                    return text;
                };
                return columns;
            };
            VSGalleryQAGrid.prototype.getInitialTitle = function () {
                return null;
            };
            return VSGalleryQAGrid;
        }(Serenity.EntityGrid));
        VSGalleryQAGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VSGalleryQAGrid);
        BasicSamples.VSGalleryQAGrid = VSGalleryQAGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var BasicSamples;
    (function (BasicSamples) {
        var WrappedHeadersGrid = (function (_super) {
            __extends(WrappedHeadersGrid, _super);
            function WrappedHeadersGrid(container) {
                return _super.call(this, container) || this;
            }
            return WrappedHeadersGrid;
        }(Serene.Northwind.OrderGrid));
        WrappedHeadersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], WrappedHeadersGrid);
        BasicSamples.WrappedHeadersGrid = WrappedHeadersGrid;
    })(BasicSamples = Serene.BasicSamples || (Serene.BasicSamples = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Serene.BasicProgressDialog = BasicProgressDialog;
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Serene.DialogUtils || (Serene.DialogUtils = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Serene.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Serene.LanguageList || (Serene.LanguageList = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
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
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Serene.Common || (Serene.Common = {}));
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
                        dataKey: src.id || src.field,
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
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
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
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
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
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Serene;
(function (Serene) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Serene');
        Serenity.EntityDialog.defaultLanguageList = Serene.LanguageList.getValue;
    })(ScriptInitialization = Serene.ScriptInitialization || (Serene.ScriptInitialization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Serene.Common || (Serene.Common = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDialog = (function (_super) {
            __extends(MeetingDialog, _super);
            function MeetingDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.MeetingForm(_this.idPrefix);
                _this.agendaGrid = new Meeting.MeetingAgendaGrid(_this.byId('AgendaGrid'));
                _this.decisionGrid = new Meeting.MeetingDecisionGrid(_this.byId('DecisionGrid'));
                _this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-maximize').click();
                _this.form.EndDate.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.EndDate.valueAsDate != null &&
                        _this.form.StartDate.valueAsDate != null &&
                        _this.form.StartDate.valueAsDate > _this.form.EndDate.valueAsDate) {
                        return "End Date can't be earlier than Start Date";
                    }
                    return null;
                });
                return _this;
            }
            MeetingDialog.prototype.getFormKey = function () { return Meeting.MeetingForm.formKey; };
            MeetingDialog.prototype.getIdProperty = function () { return Meeting.MeetingRow.idProperty; };
            MeetingDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingRow.localTextPrefix; };
            MeetingDialog.prototype.getNameProperty = function () { return Meeting.MeetingRow.nameProperty; };
            MeetingDialog.prototype.getService = function () { return Meeting.MeetingService.baseUrl; };
            MeetingDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                var attendeeGrid = this.form.AttendeeList.element.find('.grid-container');
                attendeeGrid.css('height', Math.max(150, this.element.height() - attendeeGrid.position().top - 15) + 'px')
                    .triggerHandler('layout');
            };
            MeetingDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Agenda', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Decision', this.isNewOrDeleted());
                //this.agendaGrid.customerID = entity.CustomerID;
            };
            return MeetingDialog;
        }(Serenity.EntityDialog));
        MeetingDialog = __decorate([
            Serenity.Decorators.maximizable(),
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingDialog);
        Meeting.MeetingDialog = MeetingDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingGrid = (function (_super) {
            __extends(MeetingGrid, _super);
            function MeetingGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingGrid.prototype.getColumnsKey = function () { return 'Meeting.Meeting'; };
            MeetingGrid.prototype.getDialogType = function () { return Meeting.MeetingDialog; };
            MeetingGrid.prototype.getIdProperty = function () { return Meeting.MeetingRow.idProperty; };
            MeetingGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingRow.localTextPrefix; };
            MeetingGrid.prototype.getService = function () { return Meeting.MeetingService.baseUrl; };
            return MeetingGrid;
        }(Serenity.EntityGrid));
        MeetingGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingGrid);
        Meeting.MeetingGrid = MeetingGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaDialog = (function (_super) {
            __extends(MeetingAgendaDialog, _super);
            function MeetingAgendaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAgendaForm(_this.idPrefix);
                return _this;
            }
            MeetingAgendaDialog.prototype.getFormKey = function () { return Meeting.MeetingAgendaForm.formKey; };
            MeetingAgendaDialog.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRow.idProperty; };
            MeetingAgendaDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRow.localTextPrefix; };
            MeetingAgendaDialog.prototype.getNameProperty = function () { return Meeting.MeetingAgendaRow.nameProperty; };
            MeetingAgendaDialog.prototype.getService = function () { return Meeting.MeetingAgendaService.baseUrl; };
            return MeetingAgendaDialog;
        }(Serenity.EntityDialog));
        MeetingAgendaDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAgendaDialog);
        Meeting.MeetingAgendaDialog = MeetingAgendaDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaGrid = (function (_super) {
            __extends(MeetingAgendaGrid, _super);
            function MeetingAgendaGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAgendaGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAgenda'; };
            MeetingAgendaGrid.prototype.getDialogType = function () { return Meeting.MeetingAgendaDialog; };
            MeetingAgendaGrid.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRow.idProperty; };
            MeetingAgendaGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRow.localTextPrefix; };
            MeetingAgendaGrid.prototype.getService = function () { return Meeting.MeetingAgendaService.baseUrl; };
            MeetingAgendaGrid.prototype.addButtonClick = function () {
                this.editItem({ MeetingId: this.meetingId });
            };
            MeetingAgendaGrid.prototype.getInitialTitle = function () {
                return null;
            };
            MeetingAgendaGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.meetingId;
            };
            Object.defineProperty(MeetingAgendaGrid.prototype, "meetingId", {
                get: function () {
                    return this._meetingId;
                },
                set: function (value) {
                    if (this._meetingId !== value) {
                        this._meetingId = value;
                        this.setEquality('MeetingId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return MeetingAgendaGrid;
        }(Serenity.EntityGrid));
        MeetingAgendaGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAgendaGrid);
        Meeting.MeetingAgendaGrid = MeetingAgendaGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantDialog = (function (_super) {
            __extends(MeetingAgendaRelevantDialog, _super);
            function MeetingAgendaRelevantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAgendaRelevantForm(_this.idPrefix);
                return _this;
            }
            MeetingAgendaRelevantDialog.prototype.getFormKey = function () { return Meeting.MeetingAgendaRelevantForm.formKey; };
            MeetingAgendaRelevantDialog.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRelevantRow.idProperty; };
            MeetingAgendaRelevantDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRelevantRow.localTextPrefix; };
            MeetingAgendaRelevantDialog.prototype.getService = function () { return Meeting.MeetingAgendaRelevantService.baseUrl; };
            return MeetingAgendaRelevantDialog;
        }(Serenity.EntityDialog));
        MeetingAgendaRelevantDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAgendaRelevantDialog);
        Meeting.MeetingAgendaRelevantDialog = MeetingAgendaRelevantDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaRelevantGrid = (function (_super) {
            __extends(MeetingAgendaRelevantGrid, _super);
            function MeetingAgendaRelevantGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAgendaRelevantGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAgendaRelevant'; };
            MeetingAgendaRelevantGrid.prototype.getDialogType = function () { return Meeting.MeetingAgendaRelevantDialog; };
            MeetingAgendaRelevantGrid.prototype.getIdProperty = function () { return Meeting.MeetingAgendaRelevantRow.idProperty; };
            MeetingAgendaRelevantGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaRelevantRow.localTextPrefix; };
            MeetingAgendaRelevantGrid.prototype.getService = function () { return Meeting.MeetingAgendaRelevantService.baseUrl; };
            return MeetingAgendaRelevantGrid;
        }(Serenity.EntityGrid));
        MeetingAgendaRelevantGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAgendaRelevantGrid);
        Meeting.MeetingAgendaRelevantGrid = MeetingAgendaRelevantGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeDialog = (function (_super) {
            __extends(MeetingAgendaTypeDialog, _super);
            function MeetingAgendaTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAgendaTypeForm(_this.idPrefix);
                return _this;
            }
            MeetingAgendaTypeDialog.prototype.getFormKey = function () { return Meeting.MeetingAgendaTypeForm.formKey; };
            MeetingAgendaTypeDialog.prototype.getIdProperty = function () { return Meeting.MeetingAgendaTypeRow.idProperty; };
            MeetingAgendaTypeDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaTypeRow.localTextPrefix; };
            MeetingAgendaTypeDialog.prototype.getNameProperty = function () { return Meeting.MeetingAgendaTypeRow.nameProperty; };
            MeetingAgendaTypeDialog.prototype.getService = function () { return Meeting.MeetingAgendaTypeService.baseUrl; };
            return MeetingAgendaTypeDialog;
        }(Serenity.EntityDialog));
        MeetingAgendaTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAgendaTypeDialog);
        Meeting.MeetingAgendaTypeDialog = MeetingAgendaTypeDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAgendaTypeGrid = (function (_super) {
            __extends(MeetingAgendaTypeGrid, _super);
            function MeetingAgendaTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAgendaTypeGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAgendaType'; };
            MeetingAgendaTypeGrid.prototype.getDialogType = function () { return Meeting.MeetingAgendaTypeDialog; };
            MeetingAgendaTypeGrid.prototype.getIdProperty = function () { return Meeting.MeetingAgendaTypeRow.idProperty; };
            MeetingAgendaTypeGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAgendaTypeRow.localTextPrefix; };
            MeetingAgendaTypeGrid.prototype.getService = function () { return Meeting.MeetingAgendaTypeService.baseUrl; };
            return MeetingAgendaTypeGrid;
        }(Serenity.EntityGrid));
        MeetingAgendaTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAgendaTypeGrid);
        Meeting.MeetingAgendaTypeGrid = MeetingAgendaTypeGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeDialog = (function (_super) {
            __extends(MeetingAttendeeDialog, _super);
            function MeetingAttendeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAttendeeForm(_this.idPrefix);
                return _this;
            }
            MeetingAttendeeDialog.prototype.getFormKey = function () { return Meeting.MeetingAttendeeForm.formKey; };
            MeetingAttendeeDialog.prototype.getIdProperty = function () { return Meeting.MeetingAttendeeRow.idProperty; };
            MeetingAttendeeDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeeRow.localTextPrefix; };
            return MeetingAttendeeDialog;
        }(Serene.Common.GridEditorDialog));
        MeetingAttendeeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingAttendeeDialog);
        Meeting.MeetingAttendeeDialog = MeetingAttendeeDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeeEditor = (function (_super) {
            __extends(MeetingAttendeeEditor, _super);
            function MeetingAttendeeEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.slickContainer.on('change', 'select', function (e) {
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell)
                        return;
                    var item = _this.itemAt(cell.row);
                    var field = _this.slickGrid.getColumns()[cell.cell].field;
                    item[field] = Q.toId($(e.target).val());
                    _this.view.updateItem(_this.id(item), item);
                });
                return _this;
            }
            MeetingAttendeeEditor.prototype.getColumnsKey = function () { return 'Meeting.MeetingAttendee'; };
            MeetingAttendeeEditor.prototype.getDialogType = function () { return Meeting.MeetingAttendeeDialog; };
            MeetingAttendeeEditor.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeeRow.localTextPrefix; };
            MeetingAttendeeEditor.prototype.getButtons = function () {
                return [];
            };
            MeetingAttendeeEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Serene.Organization.ContactRow.lookupKey
                    },
                    element: function (e) { return e.attr('placeholder', '--select contact to add--').appendTo(_this.toolbar.element); },
                    init: function (w) { return w.changeSelect2(function (x) {
                        if (Q.isEmptyOrNull(w.value))
                            return;
                        var contact = Serene.Organization.ContactRow.getLookup().itemById[Q.toId(w.value)];
                        w.value = null;
                        if (!contact)
                            return;
                        if (Q.any(_this.getItems(), function (i) { return i.ContactId == contact.ContactId; })) {
                            Q.notifyWarning("Contact is already in attendee list!");
                            return;
                        }
                        var item = {
                            ContactId: contact.ContactId,
                            ContactFullName: contact.FullName,
                            AttendeeType: Meeting.MeetingAttendeeType.Attendee,
                            AttendanceStatus: Meeting.MeetingAttendanceStatus.NotSet
                        };
                        _this.setNewId(item);
                        var items = _this.getItems().slice();
                        items.push(item);
                        items.sort(function (a, b) { return Q.turkishLocaleCompare(a.ContactFullName, b.ContactFullName); });
                        _this.setItems(items);
                    }); }
                });
            };
            MeetingAttendeeEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Remove Attendee',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-times text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            MeetingAttendeeEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        var items = this.getItems();
                        items.splice(row, 1);
                        this.setItems(items);
                    }
                }
            };
            return MeetingAttendeeEditor;
        }(Serene.Common.GridEditorBase));
        MeetingAttendeeEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingAttendeeEditor);
        Meeting.MeetingAttendeeEditor = MeetingAttendeeEditor;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionDialog = (function (_super) {
            __extends(MeetingDecisionDialog, _super);
            function MeetingDecisionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingDecisionForm(_this.idPrefix);
                return _this;
            }
            MeetingDecisionDialog.prototype.getFormKey = function () { return Meeting.MeetingDecisionForm.formKey; };
            MeetingDecisionDialog.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRow.idProperty; };
            MeetingDecisionDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRow.localTextPrefix; };
            MeetingDecisionDialog.prototype.getNameProperty = function () { return Meeting.MeetingDecisionRow.nameProperty; };
            MeetingDecisionDialog.prototype.getService = function () { return Meeting.MeetingDecisionService.baseUrl; };
            return MeetingDecisionDialog;
        }(Serenity.EntityDialog));
        MeetingDecisionDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingDecisionDialog);
        Meeting.MeetingDecisionDialog = MeetingDecisionDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionGrid = (function (_super) {
            __extends(MeetingDecisionGrid, _super);
            function MeetingDecisionGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingDecisionGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingDecision'; };
            MeetingDecisionGrid.prototype.getDialogType = function () { return Meeting.MeetingDecisionDialog; };
            MeetingDecisionGrid.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRow.idProperty; };
            MeetingDecisionGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRow.localTextPrefix; };
            MeetingDecisionGrid.prototype.getService = function () { return Meeting.MeetingDecisionService.baseUrl; };
            MeetingDecisionGrid.prototype.addButtonClick = function () {
                this.editItem({ MeetingId: this.meetingId });
            };
            MeetingDecisionGrid.prototype.getInitialTitle = function () {
                return null;
            };
            MeetingDecisionGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.meetingId;
            };
            Object.defineProperty(MeetingDecisionGrid.prototype, "meetingId", {
                get: function () {
                    return this._meetingId;
                },
                set: function (value) {
                    if (this._meetingId !== value) {
                        this._meetingId = value;
                        this.setEquality('MeetingId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return MeetingDecisionGrid;
        }(Serenity.EntityGrid));
        MeetingDecisionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingDecisionGrid);
        Meeting.MeetingDecisionGrid = MeetingDecisionGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantDialog = (function (_super) {
            __extends(MeetingDecisionRelevantDialog, _super);
            function MeetingDecisionRelevantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingDecisionRelevantForm(_this.idPrefix);
                return _this;
            }
            MeetingDecisionRelevantDialog.prototype.getFormKey = function () { return Meeting.MeetingDecisionRelevantForm.formKey; };
            MeetingDecisionRelevantDialog.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRelevantRow.idProperty; };
            MeetingDecisionRelevantDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRelevantRow.localTextPrefix; };
            MeetingDecisionRelevantDialog.prototype.getService = function () { return Meeting.MeetingDecisionRelevantService.baseUrl; };
            return MeetingDecisionRelevantDialog;
        }(Serenity.EntityDialog));
        MeetingDecisionRelevantDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingDecisionRelevantDialog);
        Meeting.MeetingDecisionRelevantDialog = MeetingDecisionRelevantDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingDecisionRelevantGrid = (function (_super) {
            __extends(MeetingDecisionRelevantGrid, _super);
            function MeetingDecisionRelevantGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingDecisionRelevantGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingDecisionRelevant'; };
            MeetingDecisionRelevantGrid.prototype.getDialogType = function () { return Meeting.MeetingDecisionRelevantDialog; };
            MeetingDecisionRelevantGrid.prototype.getIdProperty = function () { return Meeting.MeetingDecisionRelevantRow.idProperty; };
            MeetingDecisionRelevantGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingDecisionRelevantRow.localTextPrefix; };
            MeetingDecisionRelevantGrid.prototype.getService = function () { return Meeting.MeetingDecisionRelevantService.baseUrl; };
            return MeetingDecisionRelevantGrid;
        }(Serenity.EntityGrid));
        MeetingDecisionRelevantGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingDecisionRelevantGrid);
        Meeting.MeetingDecisionRelevantGrid = MeetingDecisionRelevantGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationDialog = (function (_super) {
            __extends(MeetingLocationDialog, _super);
            function MeetingLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingLocationForm(_this.idPrefix);
                return _this;
            }
            MeetingLocationDialog.prototype.getFormKey = function () { return Meeting.MeetingLocationForm.formKey; };
            MeetingLocationDialog.prototype.getIdProperty = function () { return Meeting.MeetingLocationRow.idProperty; };
            MeetingLocationDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingLocationRow.localTextPrefix; };
            MeetingLocationDialog.prototype.getNameProperty = function () { return Meeting.MeetingLocationRow.nameProperty; };
            MeetingLocationDialog.prototype.getService = function () { return Meeting.MeetingLocationService.baseUrl; };
            return MeetingLocationDialog;
        }(Serenity.EntityDialog));
        MeetingLocationDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingLocationDialog);
        Meeting.MeetingLocationDialog = MeetingLocationDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingLocationGrid = (function (_super) {
            __extends(MeetingLocationGrid, _super);
            function MeetingLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingLocationGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingLocation'; };
            MeetingLocationGrid.prototype.getDialogType = function () { return Meeting.MeetingLocationDialog; };
            MeetingLocationGrid.prototype.getIdProperty = function () { return Meeting.MeetingLocationRow.idProperty; };
            MeetingLocationGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingLocationRow.localTextPrefix; };
            MeetingLocationGrid.prototype.getService = function () { return Meeting.MeetingLocationService.baseUrl; };
            return MeetingLocationGrid;
        }(Serenity.EntityGrid));
        MeetingLocationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingLocationGrid);
        Meeting.MeetingLocationGrid = MeetingLocationGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeDialog = (function (_super) {
            __extends(MeetingTypeDialog, _super);
            function MeetingTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingTypeForm(_this.idPrefix);
                return _this;
            }
            MeetingTypeDialog.prototype.getFormKey = function () { return Meeting.MeetingTypeForm.formKey; };
            MeetingTypeDialog.prototype.getIdProperty = function () { return Meeting.MeetingTypeRow.idProperty; };
            MeetingTypeDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingTypeRow.localTextPrefix; };
            MeetingTypeDialog.prototype.getNameProperty = function () { return Meeting.MeetingTypeRow.nameProperty; };
            MeetingTypeDialog.prototype.getService = function () { return Meeting.MeetingTypeService.baseUrl; };
            return MeetingTypeDialog;
        }(Serenity.EntityDialog));
        MeetingTypeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MeetingTypeDialog);
        Meeting.MeetingTypeDialog = MeetingTypeDialog;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Meeting;
    (function (Meeting) {
        var MeetingTypeGrid = (function (_super) {
            __extends(MeetingTypeGrid, _super);
            function MeetingTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingTypeGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingType'; };
            MeetingTypeGrid.prototype.getDialogType = function () { return Meeting.MeetingTypeDialog; };
            MeetingTypeGrid.prototype.getIdProperty = function () { return Meeting.MeetingTypeRow.idProperty; };
            MeetingTypeGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingTypeRow.localTextPrefix; };
            MeetingTypeGrid.prototype.getService = function () { return Meeting.MeetingTypeService.baseUrl; };
            return MeetingTypeGrid;
        }(Serenity.EntityGrid));
        MeetingTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MeetingTypeGrid);
        Meeting.MeetingTypeGrid = MeetingTypeGrid;
    })(Meeting = Serene.Meeting || (Serene.Meeting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/Scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/Content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Serene.Membership || (Serene.Membership = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Northwind.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        CustomerEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], CustomerEditor);
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../Order/OrderDialog.ts" />
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        CustomerOrderDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerOrderDialog);
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
/// <reference path="../Order/OrderGrid.ts" />
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                var fld = Northwind.OrderRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        CustomerOrdersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerOrdersGrid);
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            return EmployeeListFormatter;
        }());
        EmployeeListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EmployeeListFormatter);
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            return EmployeeFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EmployeeFormatter.prototype, "genderProperty", void 0);
        EmployeeFormatter = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
        ], EmployeeFormatter);
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        NoteDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], NoteDialog);
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: Serene.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        NotesEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.element("<div/>")
        ], NotesEditor);
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return FreightFormatter;
        }());
        FreightFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], FreightFormatter);
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return Serene.LanguageList.getValue();
            };
            return RegionDialog;
        }(Serenity.EntityDialog));
        RegionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RegionDialog);
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            return RegionGrid;
        }(Serenity.EntityGrid));
        RegionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RegionGrid);
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = PhoneEditor_1 = (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
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
            return PhoneEditor;
        }(Serenity.StringEditor));
        __decorate([
            Serenity.Decorators.option()
        ], PhoneEditor.prototype, "multiple", void 0);
        PhoneEditor = PhoneEditor_1 = __decorate([
            Serenity.Decorators.registerEditor()
        ], PhoneEditor);
        Northwind.PhoneEditor = PhoneEditor;
        var PhoneEditor_1;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return Serene.LanguageList.getValue();
            };
            return ShipperDialog;
        }(Serenity.EntityDialog));
        ShipperDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ShipperDialog);
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return ShipperFormatter;
        }());
        ShipperFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], ShipperFormatter);
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            return ShipperGrid;
        }(Serenity.EntityGrid));
        ShipperGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ShipperGrid);
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return Serene.LanguageList.getValue();
            };
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        TerritoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], TerritoryDialog);
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        TerritoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TerritoryGrid);
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitDialog = (function (_super) {
            __extends(BusinessUnitDialog, _super);
            function BusinessUnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Organization.BusinessUnitForm(_this.idPrefix);
                return _this;
            }
            BusinessUnitDialog.prototype.getFormKey = function () { return Organization.BusinessUnitForm.formKey; };
            BusinessUnitDialog.prototype.getIdProperty = function () { return Organization.BusinessUnitRow.idProperty; };
            BusinessUnitDialog.prototype.getLocalTextPrefix = function () { return Organization.BusinessUnitRow.localTextPrefix; };
            BusinessUnitDialog.prototype.getNameProperty = function () { return Organization.BusinessUnitRow.nameProperty; };
            BusinessUnitDialog.prototype.getService = function () { return Organization.BusinessUnitService.baseUrl; };
            return BusinessUnitDialog;
        }(Serenity.EntityDialog));
        BusinessUnitDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], BusinessUnitDialog);
        Organization.BusinessUnitDialog = BusinessUnitDialog;
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitEditor = (function (_super) {
            __extends(BusinessUnitEditor, _super);
            function BusinessUnitEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            BusinessUnitEditor.prototype.getLookupKey = function () {
                return Organization.BusinessUnitRow.lookupKey;
            };
            BusinessUnitEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Name;
                while (item.ParentUnitId != null && !visited[item.ParentUnitId]) {
                    item = lookup.itemById[item.ParentUnitId];
                    if (!item)
                        break;
                    visited[item.UnitId] = true;
                    text = item.Name + " >> " + text;
                }
                return text;
            };
            return BusinessUnitEditor;
        }(Serenity.LookupEditorBase));
        BusinessUnitEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], BusinessUnitEditor);
        Organization.BusinessUnitEditor = BusinessUnitEditor;
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var BusinessUnitGrid = (function (_super) {
            __extends(BusinessUnitGrid, _super);
            function BusinessUnitGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentUnitId; },
                    toggleField: Organization.BusinessUnitRow.Fields.Name,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            BusinessUnitGrid.prototype.getColumnsKey = function () { return 'Organization.BusinessUnit'; };
            BusinessUnitGrid.prototype.getDialogType = function () { return Organization.BusinessUnitDialog; };
            BusinessUnitGrid.prototype.getIdProperty = function () { return Organization.BusinessUnitRow.idProperty; };
            BusinessUnitGrid.prototype.getLocalTextPrefix = function () { return Organization.BusinessUnitRow.localTextPrefix; };
            BusinessUnitGrid.prototype.getService = function () { return Organization.BusinessUnitService.baseUrl; };
            BusinessUnitGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Organization.BusinessUnitRow.lookupKey);
            };
            BusinessUnitGrid.prototype.usePager = function () {
                return false;
            };
            BusinessUnitGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == Organization.BusinessUnitRow.Fields.Name; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            BusinessUnitGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Organization.BusinessUnitDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentUnitId: item.UnitId
                        });
                    }
                }
            };
            return BusinessUnitGrid;
        }(Serenity.EntityGrid));
        BusinessUnitGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BusinessUnitGrid);
        Organization.BusinessUnitGrid = BusinessUnitGrid;
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var ContactDialog = (function (_super) {
            __extends(ContactDialog, _super);
            function ContactDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Organization.ContactForm(_this.idPrefix);
                return _this;
            }
            ContactDialog.prototype.getFormKey = function () { return Organization.ContactForm.formKey; };
            ContactDialog.prototype.getIdProperty = function () { return Organization.ContactRow.idProperty; };
            ContactDialog.prototype.getLocalTextPrefix = function () { return Organization.ContactRow.localTextPrefix; };
            ContactDialog.prototype.getNameProperty = function () { return Organization.ContactRow.nameProperty; };
            ContactDialog.prototype.getService = function () { return Organization.ContactService.baseUrl; };
            return ContactDialog;
        }(Serenity.EntityDialog));
        ContactDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ContactDialog);
        Organization.ContactDialog = ContactDialog;
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Organization;
    (function (Organization) {
        var ContactGrid = (function (_super) {
            __extends(ContactGrid, _super);
            function ContactGrid(container) {
                return _super.call(this, container) || this;
            }
            ContactGrid.prototype.getColumnsKey = function () { return 'Organization.Contact'; };
            ContactGrid.prototype.getDialogType = function () { return Organization.ContactDialog; };
            ContactGrid.prototype.getIdProperty = function () { return Organization.ContactRow.idProperty; };
            ContactGrid.prototype.getLocalTextPrefix = function () { return Organization.ContactRow.localTextPrefix; };
            ContactGrid.prototype.getService = function () { return Organization.ContactService.baseUrl; };
            return ContactGrid;
        }(Serenity.EntityGrid));
        ContactGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ContactGrid);
        Organization.ContactGrid = ContactGrid;
    })(Organization = Serene.Organization || (Serene.Organization = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Web.js.map