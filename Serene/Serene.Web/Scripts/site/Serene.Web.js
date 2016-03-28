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
            LanguageRow.idProperty = "Id";
            LanguageRow.nameProperty = "LanguageName";
            LanguageRow.localTextPrefix = "Administration.Language";
            LanguageRow.lookupKey = "Administration.Language";
            function lookup() {
                return Q.getLookup("Administration.Language");
            }
            LanguageRow.lookup = lookup;
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
            RolePermissionRow.idProperty = "RolePermissionId";
            RolePermissionRow.nameProperty = "PermissionKey";
            RolePermissionRow.localTextPrefix = "Administration.RolePermission";
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
            RoleRow.idProperty = "RoleId";
            RoleRow.nameProperty = "RoleName";
            RoleRow.localTextPrefix = "Administration.Role";
            RoleRow.lookupKey = "Administration.Role";
            function lookup() {
                return Q.getLookup("Administration.Role");
            }
            RoleRow.lookup = lookup;
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
            UserPermissionRow.idProperty = "UserPermissionId";
            UserPermissionRow.nameProperty = "PermissionKey";
            UserPermissionRow.localTextPrefix = "Administration.UserPermission";
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
            UserRoleRow.idProperty = "UserRoleId";
            UserRoleRow.localTextPrefix = "Administration.UserRole";
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
            UserRow.idProperty = "UserId";
            UserRow.isActiveProperty = "IsActive";
            UserRow.nameProperty = "Username";
            UserRow.localTextPrefix = "Administration.User";
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
            CategoryLangRow.idProperty = "Id";
            CategoryLangRow.nameProperty = "CategoryName";
            CategoryLangRow.localTextPrefix = "Northwind.CategoryLang";
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
            CategoryRow.idProperty = "CategoryID";
            CategoryRow.nameProperty = "CategoryName";
            CategoryRow.localTextPrefix = "Northwind.Category";
            CategoryRow.lookupKey = "Northwind.Category";
            function lookup() {
                return Q.getLookup("Northwind.Category");
            }
            CategoryRow.lookup = lookup;
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
            CustomerCustomerDemoRow.idProperty = "ID";
            CustomerCustomerDemoRow.nameProperty = "CustomerID";
            CustomerCustomerDemoRow.localTextPrefix = "Northwind.CustomerCustomerDemo";
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
            CustomerDemographicRow.idProperty = "ID";
            CustomerDemographicRow.nameProperty = "CustomerTypeID";
            CustomerDemographicRow.localTextPrefix = "Northwind.CustomerDemographic";
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
            CustomerRepresentativesRow.idProperty = "RepresentativeId";
            CustomerRepresentativesRow.localTextPrefix = "CustomerRepresentatives";
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
            CustomerRow.idProperty = "ID";
            CustomerRow.nameProperty = "CompanyName";
            CustomerRow.localTextPrefix = "Northwind.Customer";
            CustomerRow.lookupKey = "Northwind.Customer";
            function lookup() {
                return Q.getLookup("Northwind.Customer");
            }
            CustomerRow.lookup = lookup;
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
            EmployeeRow.idProperty = "EmployeeID";
            EmployeeRow.nameProperty = "FullName";
            EmployeeRow.localTextPrefix = "Northwind.Employee";
            EmployeeRow.lookupKey = "Northwind.Employee";
            function lookup() {
                return Q.getLookup("Northwind.Employee");
            }
            EmployeeRow.lookup = lookup;
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
            EmployeeTerritoryRow.idProperty = "EmployeeID";
            EmployeeTerritoryRow.nameProperty = "TerritoryID";
            EmployeeTerritoryRow.localTextPrefix = "Northwind.EmployeeTerritory";
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
            NoteRow.idProperty = "NoteId";
            NoteRow.nameProperty = "EntityType";
            NoteRow.localTextPrefix = "Northwind.Note";
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
            OrderDetailRow.idProperty = "DetailID";
            OrderDetailRow.localTextPrefix = "Northwind.OrderDetail";
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
            OrderRow.idProperty = "OrderID";
            OrderRow.nameProperty = "CustomerID";
            OrderRow.localTextPrefix = "Northwind.Order";
            OrderRow.lookupKey = "Northwind.OrderShipCity";
            function lookup() {
                return Q.getLookup("Northwind.OrderShipCity");
            }
            OrderRow.lookup = lookup;
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
            ProductLangRow.idProperty = "Id";
            ProductLangRow.nameProperty = "ProductName";
            ProductLangRow.localTextPrefix = "Northwind.ProductLang";
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
            ProductLogRow.idProperty = "ProductLogID";
            ProductLogRow.localTextPrefix = "Northwind.ProductLog";
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
            ProductRow.idProperty = "ProductID";
            ProductRow.nameProperty = "ProductName";
            ProductRow.localTextPrefix = "Northwind.Product";
            ProductRow.lookupKey = "Northwind.Product";
            function lookup() {
                return Q.getLookup("Northwind.Product");
            }
            ProductRow.lookup = lookup;
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
            RegionRow.idProperty = "RegionID";
            RegionRow.nameProperty = "RegionDescription";
            RegionRow.localTextPrefix = "Northwind.Region";
            RegionRow.lookupKey = "Northwind.Region";
            function lookup() {
                return Q.getLookup("Northwind.Region");
            }
            RegionRow.lookup = lookup;
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
            SalesByCategoryRow.nameProperty = "CategoryName";
            SalesByCategoryRow.localTextPrefix = "Northwind.SalesByCategory";
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
            ShipperRow.idProperty = "ShipperID";
            ShipperRow.nameProperty = "CompanyName";
            ShipperRow.localTextPrefix = "Northwind.Shipper";
            ShipperRow.lookupKey = "Northwind.Shipper";
            function lookup() {
                return Q.getLookup("Northwind.Shipper");
            }
            ShipperRow.lookup = lookup;
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
            SupplierRow.idProperty = "SupplierID";
            SupplierRow.nameProperty = "CompanyName";
            SupplierRow.localTextPrefix = "Northwind.Supplier";
            SupplierRow.lookupKey = "Northwind.Supplier";
            function lookup() {
                return Q.getLookup("Northwind.Supplier");
            }
            SupplierRow.lookup = lookup;
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
            TerritoryRow.idProperty = "ID";
            TerritoryRow.nameProperty = "TerritoryID";
            TerritoryRow.localTextPrefix = "Northwind.Territory";
            TerritoryRow.lookupKey = "Northwind.Territory";
            function lookup() {
                return Q.getLookup("Northwind.Territory");
            }
            TerritoryRow.lookup = lookup;
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
