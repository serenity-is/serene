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
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.IdProperty = "Id";
            LanguageRow.NameProperty = "LanguageName";
            LanguageRow.LocalTextPrefix = "Administration.Language";
            LanguageRow.LookupKey = "Administration.Language";
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ["Id", "LanguageId", "LanguageName"].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.IdProperty = "RolePermissionId";
            RolePermissionRow.NameProperty = "PermissionKey";
            RolePermissionRow.LocalTextPrefix = "Administration.RolePermission";
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ["RolePermissionId", "RoleId", "PermissionKey", "RoleRoleName"].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.IdProperty = "RoleId";
            RoleRow.NameProperty = "RoleName";
            RoleRow.LocalTextPrefix = "Administration.Role";
            RoleRow.LookupKey = "Administration.Role";
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ["RoleId", "RoleName"].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.IdProperty = "UserPermissionId";
            UserPermissionRow.NameProperty = "PermissionKey";
            UserPermissionRow.LocalTextPrefix = "Administration.UserPermission";
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ["UserPermissionId", "UserId", "PermissionKey", "Grant", "Username", "User"].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.IdProperty = "UserRoleId";
            UserRoleRow.LocalTextPrefix = "Administration.UserRole";
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ["UserRoleId", "UserId", "RoleId", "Username", "User"].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.IdProperty = "UserId";
            UserRow.IsActiveProperty = "IsActive";
            UserRow.NameProperty = "Username";
            UserRow.LocalTextPrefix = "Administration.User";
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ["UserId", "Username", "Source", "PasswordHash", "PasswordSalt", "DisplayName", "Email", "LastDirectoryUpdate", "IsActive", "Password", "PasswordConfirm", "InsertUserId", "InsertDate", "UpdateUserId", "UpdateDate"].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.IdProperty = "Id";
            CategoryLangRow.NameProperty = "CategoryName";
            CategoryLangRow.LocalTextPrefix = "Northwind.CategoryLang";
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ["Id", "CategoryId", "LanguageId", "CategoryName", "Description"].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.IdProperty = "CategoryID";
            CategoryRow.NameProperty = "CategoryName";
            CategoryRow.LocalTextPrefix = "Northwind.Category";
            CategoryRow.LookupKey = "Northwind.Category";
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ["CategoryID", "CategoryName", "Description", "Picture"].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.IdProperty = "ID";
            CustomerCustomerDemoRow.NameProperty = "CustomerID";
            CustomerCustomerDemoRow.LocalTextPrefix = "Northwind.CustomerCustomerDemo";
            var Fields;
            (function (Fields) {
            })(Fields = CustomerCustomerDemoRow.Fields || (CustomerCustomerDemoRow.Fields = {}));
            ["ID", "CustomerID", "CustomerTypeID", "CustomerCompanyName", "CustomerContactName", "CustomerContactTitle", "CustomerAddress", "CustomerCity", "CustomerRegion", "CustomerPostalCode", "CustomerCountry", "CustomerPhone", "CustomerFax", "CustomerTypeCustomerDesc"].forEach(function (x) { return Fields[x] = x; });
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.IdProperty = "ID";
            CustomerDemographicRow.NameProperty = "CustomerTypeID";
            CustomerDemographicRow.LocalTextPrefix = "Northwind.CustomerDemographic";
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDemographicRow.Fields || (CustomerDemographicRow.Fields = {}));
            ["ID", "CustomerTypeID", "CustomerDesc"].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.IdProperty = "RepresentativeId";
            CustomerRepresentativesRow.LocalTextPrefix = "CustomerRepresentatives";
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ["RepresentativeId", "CustomerId", "EmployeeId"].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.IdProperty = "ID";
            CustomerRow.NameProperty = "CompanyName";
            CustomerRow.LocalTextPrefix = "Northwind.Customer";
            CustomerRow.LookupKey = "Northwind.Customer";
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ["ID", "CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "NoteList", "Representatives"].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.IdProperty = "EmployeeID";
            EmployeeRow.NameProperty = "FullName";
            EmployeeRow.LocalTextPrefix = "Northwind.Employee";
            EmployeeRow.LookupKey = "Northwind.Employee";
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ["EmployeeID", "LastName", "FirstName", "FullName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath", "ReportsToFullName", "ReportsToLastName", "ReportsToFirstName", "ReportsToTitle", "ReportsToTitleOfCourtesy", "ReportsToBirthDate", "ReportsToHireDate", "ReportsToAddress", "ReportsToCity", "ReportsToRegion", "ReportsToPostalCode", "ReportsToCountry", "ReportsToHomePhone", "ReportsToExtension", "ReportsToPhoto", "ReportsToNotes", "ReportsToReportsTo", "ReportsToPhotoPath", "Gender"].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.IdProperty = "EmployeeID";
            EmployeeTerritoryRow.NameProperty = "TerritoryID";
            EmployeeTerritoryRow.LocalTextPrefix = "Northwind.EmployeeTerritory";
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTerritoryRow.Fields || (EmployeeTerritoryRow.Fields = {}));
            ["EmployeeID", "TerritoryID", "EmployeeLastName", "EmployeeFirstName", "EmployeeTitle", "EmployeeTitleOfCourtesy", "EmployeeBirthDate", "EmployeeHireDate", "EmployeeAddress", "EmployeeCity", "EmployeeRegion", "EmployeePostalCode", "EmployeeCountry", "EmployeeHomePhone", "EmployeeExtension", "EmployeePhoto", "EmployeeNotes", "EmployeeReportsTo", "EmployeePhotoPath", "TerritoryTerritoryDescription", "TerritoryRegionID"].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
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
        Serenity.Decorators.addAttribute(Gender, new Serenity.EnumKeyAttribute("Serene.Northwind.Entities.Gender"));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.IdProperty = "NoteId";
            NoteRow.NameProperty = "EntityType";
            NoteRow.LocalTextPrefix = "Northwind.Note";
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ["NoteId", "EntityType", "EntityId", "Text", "InsertUserId", "InsertDate", "InsertUserDisplayName"].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.IdProperty = "DetailID";
            OrderDetailRow.LocalTextPrefix = "Northwind.OrderDetail";
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ["DetailID", "OrderID", "ProductID", "UnitPrice", "Quantity", "Discount", "OrderCustomerID", "OrderEmployeeID", "OrderDate", "OrderShippedDate", "OrderShipVia", "OrderShipCity", "OrderShipCountry", "ProductName", "ProductDiscontinued", "ProductSupplierID", "ProductQuantityPerUnit", "ProductUnitPrice", "LineTotal"].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.IdProperty = "OrderID";
            OrderRow.NameProperty = "CustomerID";
            OrderRow.LocalTextPrefix = "Northwind.Order";
            OrderRow.LookupKey = "Northwind.OrderShipCity";
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "CustomerCompanyName", "CustomerContactName", "CustomerContactTitle", "CustomerCity", "CustomerRegion", "CustomerCountry", "CustomerPhone", "CustomerFax", "EmployeeFullName", "EmployeeGender", "ShipViaCompanyName", "ShipViaPhone", "ShippingState", "DetailList"].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
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
        Serenity.Decorators.addAttribute(OrderShippingState, new Serenity.EnumKeyAttribute("Northwind.OrderShippingState"));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.IdProperty = "Id";
            ProductLangRow.NameProperty = "ProductName";
            ProductLangRow.LocalTextPrefix = "Northwind.ProductLang";
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ["Id", "ProductId", "LanguageId", "ProductName"].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.IdProperty = "ProductLogID";
            ProductLogRow.LocalTextPrefix = "Northwind.ProductLog";
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ["ProductLogID", "OperationType", "ChangingUserId", "ValidFrom", "ValidUntil", "ProductID", "ProductName", "ProductImage", "Discontinued", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel"].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.IdProperty = "ProductID";
            ProductRow.NameProperty = "ProductName";
            ProductRow.LocalTextPrefix = "Northwind.Product";
            ProductRow.LookupKey = "Northwind.Product";
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ["ProductID", "ProductName", "ProductImage", "Discontinued", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "SupplierCompanyName", "SupplierContactName", "SupplierContactTitle", "SupplierAddress", "SupplierCity", "SupplierRegion", "SupplierPostalCode", "SupplierCountry", "SupplierPhone", "SupplierFax", "SupplierHomePage", "CategoryName", "CategoryDescription", "CategoryPicture"].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.IdProperty = "RegionID";
            RegionRow.NameProperty = "RegionDescription";
            RegionRow.LocalTextPrefix = "Northwind.Region";
            RegionRow.LookupKey = "Northwind.Region";
            var Fields;
            (function (Fields) {
            })(Fields = RegionRow.Fields || (RegionRow.Fields = {}));
            ["RegionID", "RegionDescription"].forEach(function (x) { return Fields[x] = x; });
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.NameProperty = "CategoryName";
            SalesByCategoryRow.LocalTextPrefix = "Northwind.SalesByCategory";
            var Fields;
            (function (Fields) {
            })(Fields = SalesByCategoryRow.Fields || (SalesByCategoryRow.Fields = {}));
            ["CategoryId", "CategoryName", "ProductName", "ProductSales"].forEach(function (x) { return Fields[x] = x; });
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.IdProperty = "ShipperID";
            ShipperRow.NameProperty = "CompanyName";
            ShipperRow.LocalTextPrefix = "Northwind.Shipper";
            ShipperRow.LookupKey = "Northwind.Shipper";
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ["ShipperID", "CompanyName", "Phone"].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.IdProperty = "SupplierID";
            SupplierRow.NameProperty = "CompanyName";
            SupplierRow.LocalTextPrefix = "Northwind.Supplier";
            SupplierRow.LookupKey = "Northwind.Supplier";
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.IdProperty = "ID";
            TerritoryRow.NameProperty = "TerritoryID";
            TerritoryRow.LocalTextPrefix = "Northwind.Territory";
            TerritoryRow.LookupKey = "Northwind.Territory";
            var Fields;
            (function (Fields) {
            })(Fields = TerritoryRow.Fields || (TerritoryRow.Fields = {}));
            ["ID", "TerritoryID", "TerritoryDescription", "RegionID", "RegionDescription"].forEach(function (x) { return Fields[x] = x; });
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var NorthwindTS;
    (function (NorthwindTS) {
        var D = Serenity.Decorators;
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                _super.apply(this, arguments);
            }
            CustomerDialog.prototype.test = function () {
                var s = Serene.Northwind.CustomerRow.Fields.Region;
            };
            CustomerDialog = __decorate([
                D.formKey("Northwind.Customer"),
                D.idProperty("ID"),
                D.nameProperty("CustomerID"),
                D.service("Northwind/Customer"),
                D.flexify(),
                D.maximizable()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        NorthwindTS.CustomerDialog = CustomerDialog;
        var MyBoldFormatter = (function () {
            function MyBoldFormatter() {
            }
            MyBoldFormatter.prototype.format = function (ctx) {
                return "<b>" + Q.htmlEncode(ctx.value) + "</b>";
            };
            return MyBoldFormatter;
        }());
        NorthwindTS.MyBoldFormatter = MyBoldFormatter;
    })(NorthwindTS = Serene.NorthwindTS || (Serene.NorthwindTS = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Web.js.map