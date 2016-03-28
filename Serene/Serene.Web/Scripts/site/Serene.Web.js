var __extends=this&&this.__extends||function(e,r){function t(){this.constructor=e}for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])
e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)},__decorate=this&&this.__decorate||function(e,r,t,n){var o,i=arguments.length,a=3>i?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n)
else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(3>i?o(a):i>3?o(r,t,a):o(r,t))||a)
return i>3&&a&&Object.defineProperty(r,t,a),a},Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Administration.Language")}e.idProperty="Id",e.nameProperty="LanguageName",e.localTextPrefix="Administration.Language",e.lookupKey="Administration.Language",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["Id","LanguageId","LanguageName"].forEach(function(e){return t[e]=e})}(r=e.LanguageRow||(e.LanguageRow={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/Language"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.LanguageService||(e.LanguageService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="RolePermissionId",e.nameProperty="PermissionKey",e.localTextPrefix="Administration.RolePermission"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["RolePermissionId","RoleId","PermissionKey","RoleRoleName"].forEach(function(e){return r[e]=e})}(r=e.RolePermissionRow||(e.RolePermissionRow={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/RolePermission"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Update","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.RolePermissionService||(e.RolePermissionService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Administration.Role")}e.idProperty="RoleId",e.nameProperty="RoleName",e.localTextPrefix="Administration.Role",e.lookupKey="Administration.Role",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["RoleId","RoleName"].forEach(function(e){return t[e]=e})}(r=e.RoleRow||(e.RoleRow={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/Role"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.RoleService||(e.RoleService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/Translation"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["List","Update"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.TranslationService||(e.TranslationService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="UserPermissionId",e.nameProperty="PermissionKey",e.localTextPrefix="Administration.UserPermission"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["UserPermissionId","UserId","PermissionKey","Grant","Username","User"].forEach(function(e){return r[e]=e})}(r=e.UserPermissionRow||(e.UserPermissionRow={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/UserPermission"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Update","List","ListRolePermissions","ListPermissionKeys"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.UserPermissionService||(e.UserPermissionService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="UserRoleId",e.localTextPrefix="Administration.UserRole"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["UserRoleId","UserId","RoleId","Username","User"].forEach(function(e){return r[e]=e})}(r=e.UserRoleRow||(e.UserRoleRow={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/UserRole"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Update","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.UserRoleService||(e.UserRoleService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="UserId",e.isActiveProperty="IsActive",e.nameProperty="Username",e.localTextPrefix="Administration.User"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["UserId","Username","Source","PasswordHash","PasswordSalt","DisplayName","Email","LastDirectoryUpdate","IsActive","Password","PasswordConfirm","InsertUserId","InsertDate","UpdateUserId","UpdateDate"].forEach(function(e){return r[e]=e})}(r=e.UserRow||(e.UserRow={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Administration/User"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Undelete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.UserService||(e.UserService={}))}(r=e.Administration||(e.Administration={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="BasicSamples/BasicSamples"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["OrdersByShipper","OrderBulkAction"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.BasicSamplesService||(e.BasicSamplesService={}))}(r=e.BasicSamples||(e.BasicSamples={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="Id",e.nameProperty="CategoryName",e.localTextPrefix="Northwind.CategoryLang"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["Id","CategoryId","LanguageId","CategoryName","Description"].forEach(function(e){return r[e]=e})}(r=e.CategoryLangRow||(e.CategoryLangRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/CategoryLang"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.CategoryLangService||(e.CategoryLangService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Category")}e.idProperty="CategoryID",e.nameProperty="CategoryName",e.localTextPrefix="Northwind.Category",e.lookupKey="Northwind.Category",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["CategoryID","CategoryName","Description","Picture"].forEach(function(e){return t[e]=e})}(r=e.CategoryRow||(e.CategoryRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Category"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","RetrieveLocalization","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.CategoryService||(e.CategoryService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="ID",e.nameProperty="CustomerID",e.localTextPrefix="Northwind.CustomerCustomerDemo"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["ID","CustomerID","CustomerTypeID","CustomerCompanyName","CustomerContactName","CustomerContactTitle","CustomerAddress","CustomerCity","CustomerRegion","CustomerPostalCode","CustomerCountry","CustomerPhone","CustomerFax","CustomerTypeCustomerDesc"].forEach(function(e){return r[e]=e})}(r=e.CustomerCustomerDemoRow||(e.CustomerCustomerDemoRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/CustomerCustomerDemo"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.CustomerCustomerDemoService||(e.CustomerCustomerDemoService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="ID",e.nameProperty="CustomerTypeID",e.localTextPrefix="Northwind.CustomerDemographic"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["ID","CustomerTypeID","CustomerDesc"].forEach(function(e){return r[e]=e})}(r=e.CustomerDemographicRow||(e.CustomerDemographicRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/CustomerDemographic"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.CustomerDemographicService||(e.CustomerDemographicService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="RepresentativeId",e.localTextPrefix="CustomerRepresentatives"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["RepresentativeId","CustomerId","EmployeeId"].forEach(function(e){return r[e]=e})}(r=e.CustomerRepresentativesRow||(e.CustomerRepresentativesRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Customer")}e.idProperty="ID",e.nameProperty="CompanyName",e.localTextPrefix="Northwind.Customer",e.lookupKey="Northwind.Customer",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["ID","CustomerID","CompanyName","ContactName","ContactTitle","Address","City","Region","PostalCode","Country","Phone","Fax","NoteList","Representatives"].forEach(function(e){return t[e]=e})}(r=e.CustomerRow||(e.CustomerRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Customer"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.CustomerService||(e.CustomerService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Employee")}e.idProperty="EmployeeID",e.nameProperty="FullName",e.localTextPrefix="Northwind.Employee",e.lookupKey="Northwind.Employee",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["EmployeeID","LastName","FirstName","FullName","Title","TitleOfCourtesy","BirthDate","HireDate","Address","City","Region","PostalCode","Country","HomePhone","Extension","Photo","Notes","ReportsTo","PhotoPath","ReportsToFullName","ReportsToLastName","ReportsToFirstName","ReportsToTitle","ReportsToTitleOfCourtesy","ReportsToBirthDate","ReportsToHireDate","ReportsToAddress","ReportsToCity","ReportsToRegion","ReportsToPostalCode","ReportsToCountry","ReportsToHomePhone","ReportsToExtension","ReportsToPhoto","ReportsToNotes","ReportsToReportsTo","ReportsToPhotoPath","Gender"].forEach(function(e){return t[e]=e})}(r=e.EmployeeRow||(e.EmployeeRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Employee"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.EmployeeService||(e.EmployeeService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="EmployeeID",e.nameProperty="TerritoryID",e.localTextPrefix="Northwind.EmployeeTerritory"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["EmployeeID","TerritoryID","EmployeeLastName","EmployeeFirstName","EmployeeTitle","EmployeeTitleOfCourtesy","EmployeeBirthDate","EmployeeHireDate","EmployeeAddress","EmployeeCity","EmployeeRegion","EmployeePostalCode","EmployeeCountry","EmployeeHomePhone","EmployeeExtension","EmployeePhoto","EmployeeNotes","EmployeeReportsTo","EmployeePhotoPath","TerritoryTerritoryDescription","TerritoryRegionID"].forEach(function(e){return r[e]=e})}(r=e.EmployeeTerritoryRow||(e.EmployeeTerritoryRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/EmployeeTerritory"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.EmployeeTerritoryService||(e.EmployeeTerritoryService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){!function(e){e[e.Male=1]="Male",e[e.Female=2]="Female"}(e.Gender||(e.Gender={}))
var r=e.Gender
Serenity.Decorators.addAttribute(r,new Serenity.EnumKeyAttribute("Serene.Northwind.Entities.Gender"))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="NoteId",e.nameProperty="EntityType",e.localTextPrefix="Northwind.Note"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["NoteId","EntityType","EntityId","Text","InsertUserId","InsertDate","InsertUserDisplayName"].forEach(function(e){return r[e]=e})}(r=e.NoteRow||(e.NoteRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="DetailID",e.localTextPrefix="Northwind.OrderDetail"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["DetailID","OrderID","ProductID","UnitPrice","Quantity","Discount","OrderCustomerID","OrderEmployeeID","OrderDate","OrderShippedDate","OrderShipVia","OrderShipCity","OrderShipCountry","ProductName","ProductDiscontinued","ProductSupplierID","ProductQuantityPerUnit","ProductUnitPrice","LineTotal"].forEach(function(e){return r[e]=e})}(r=e.OrderDetailRow||(e.OrderDetailRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/OrderDetail"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.OrderDetailService||(e.OrderDetailService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.OrderShipCity")}e.idProperty="OrderID",e.nameProperty="CustomerID",e.localTextPrefix="Northwind.Order",e.lookupKey="Northwind.OrderShipCity",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["OrderID","CustomerID","EmployeeID","OrderDate","RequiredDate","ShippedDate","ShipVia","Freight","ShipName","ShipAddress","ShipCity","ShipRegion","ShipPostalCode","ShipCountry","CustomerCompanyName","CustomerContactName","CustomerContactTitle","CustomerCity","CustomerRegion","CustomerCountry","CustomerPhone","CustomerFax","EmployeeFullName","EmployeeGender","ShipViaCompanyName","ShipViaPhone","ShippingState","DetailList"].forEach(function(e){return t[e]=e})}(r=e.OrderRow||(e.OrderRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Order"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.OrderService||(e.OrderService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){!function(e){e[e.NotShipped=0]="NotShipped",e[e.Shipped=1]="Shipped"}(e.OrderShippingState||(e.OrderShippingState={}))
var r=e.OrderShippingState
Serenity.Decorators.addAttribute(r,new Serenity.EnumKeyAttribute("Northwind.OrderShippingState"))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="Id",e.nameProperty="ProductName",e.localTextPrefix="Northwind.ProductLang"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["Id","ProductId","LanguageId","ProductName"].forEach(function(e){return r[e]=e})}(r=e.ProductLangRow||(e.ProductLangRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/ProductLang"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.ProductLangService||(e.ProductLangService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.idProperty="ProductLogID",e.localTextPrefix="Northwind.ProductLog"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["ProductLogID","OperationType","ChangingUserId","ValidFrom","ValidUntil","ProductID","ProductName","ProductImage","Discontinued","SupplierID","CategoryID","QuantityPerUnit","UnitPrice","UnitsInStock","UnitsOnOrder","ReorderLevel"].forEach(function(e){return r[e]=e})}(r=e.ProductLogRow||(e.ProductLogRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Product")}e.idProperty="ProductID",e.nameProperty="ProductName",e.localTextPrefix="Northwind.Product",e.lookupKey="Northwind.Product",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["ProductID","ProductName","ProductImage","Discontinued","SupplierID","CategoryID","QuantityPerUnit","UnitPrice","UnitsInStock","UnitsOnOrder","ReorderLevel","SupplierCompanyName","SupplierContactName","SupplierContactTitle","SupplierAddress","SupplierCity","SupplierRegion","SupplierPostalCode","SupplierCountry","SupplierPhone","SupplierFax","SupplierHomePage","CategoryName","CategoryDescription","CategoryPicture"].forEach(function(e){return t[e]=e})}(r=e.ProductRow||(e.ProductRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Product"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","RetrieveLocalization","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.ProductService||(e.ProductService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Region")}e.idProperty="RegionID",e.nameProperty="RegionDescription",e.localTextPrefix="Northwind.Region",e.lookupKey="Northwind.Region",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["RegionID","RegionDescription"].forEach(function(e){return t[e]=e})}(r=e.RegionRow||(e.RegionRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Region"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.RegionService||(e.RegionService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.nameProperty="CategoryName",e.localTextPrefix="Northwind.SalesByCategory"
var r
!function(e){}(r=e.Fields||(e.Fields={})),["CategoryId","CategoryName","ProductName","ProductSales"].forEach(function(e){return r[e]=e})}(r=e.SalesByCategoryRow||(e.SalesByCategoryRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/SalesByCategory"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.SalesByCategoryService||(e.SalesByCategoryService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Shipper")}e.idProperty="ShipperID",e.nameProperty="CompanyName",e.localTextPrefix="Northwind.Shipper",e.lookupKey="Northwind.Shipper",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["ShipperID","CompanyName","Phone"].forEach(function(e){return t[e]=e})}(r=e.ShipperRow||(e.ShipperRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Shipper"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.ShipperService||(e.ShipperService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Supplier")}e.idProperty="SupplierID",e.nameProperty="CompanyName",e.localTextPrefix="Northwind.Supplier",e.lookupKey="Northwind.Supplier",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["SupplierID","CompanyName","ContactName","ContactTitle","Address","City","Region","PostalCode","Country","Phone","Fax","HomePage"].forEach(function(e){return t[e]=e})}(r=e.SupplierRow||(e.SupplierRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Supplier"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.SupplierService||(e.SupplierService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){function r(){return Q.getLookup("Northwind.Territory")}e.idProperty="ID",e.nameProperty="TerritoryID",e.localTextPrefix="Northwind.Territory",e.lookupKey="Northwind.Territory",e.lookup=r
var t
!function(e){}(t=e.Fields||(e.Fields={})),["ID","TerritoryID","TerritoryDescription","RegionID","RegionDescription"].forEach(function(e){return t[e]=e})}(r=e.TerritoryRow||(e.TerritoryRow={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(e){var r
!function(e){e.baseUrl="Northwind/Territory"
var r
!function(e){}(r=e.Methods||(e.Methods={})),["Create","Update","Delete","Retrieve","List"].forEach(function(t){e[t]=function(r,n,o){return Q.serviceRequest(e.baseUrl+"/"+t,r,n,o)},r[t]=e.baseUrl+"/"+t})}(r=e.TerritoryService||(e.TerritoryService={}))}(r=e.Northwind||(e.Northwind={}))}(Serene||(Serene={}))
var Serene
!function(e){var r
!function(r){var t=Serenity.Decorators,n=function(r){function n(){r.apply(this,arguments)}return __extends(n,r),n.prototype.test=function(){e.Northwind.CustomerRow.Fields.Region},n=__decorate([t.formKey("Northwind.Customer"),t.idProperty("ID"),t.nameProperty("CustomerID"),t.service("Northwind/Customer"),t.flexify(),t.maximizable()],n)}(Serenity.EntityDialog)
r.CustomerDialog=n
var o=function(){function e(){}return e.prototype.format=function(e){return"<b>"+Q.htmlEncode(e.value)+"</b>"},e}()
r.MyBoldFormatter=o}(r=e.NorthwindTS||(e.NorthwindTS={}))}(Serene||(Serene={}))
