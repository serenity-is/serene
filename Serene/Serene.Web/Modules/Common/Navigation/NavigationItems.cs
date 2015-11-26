using Serenity;
using Serenity.Navigation;
using Northwind = Serene.Northwind.Pages;
using Administration = Serene.Administration.Pages;
using Common = Serene.Common.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

[assembly: NavigationMenu(7000, "Northwind", icon: "icon-anchor")]
[assembly: NavigationLink(7100, "Northwind/Customers", typeof(Northwind.CustomerController), icon: "icon-wallet")]
[assembly: NavigationLink(7200, "Northwind/Orders", typeof(Northwind.OrderController), icon: "icon-basket-loaded")]
[assembly: NavigationLink(7300, "Northwind/Products", typeof(Northwind.ProductController), icon: "icon-present")]
[assembly: NavigationLink(7400, "Northwind/Suppliers", typeof(Northwind.SupplierController), icon: "icon-magic-wand")]
[assembly: NavigationLink(7500, "Northwind/Shippers", typeof(Northwind.ShipperController), icon: "icon-plane")]
[assembly: NavigationLink(7600, "Northwind/Categories", typeof(Northwind.CategoryController), icon: "icon-folder-alt")]
[assembly: NavigationLink(7700, "Northwind/Regions", typeof(Northwind.RegionController), icon: "icon-map")]
[assembly: NavigationLink(7800, "Northwind/Territories", typeof(Northwind.TerritoryController), icon: "icon-puzzle")]

[assembly: NavigationMenu(8000, "Theme Samples", icon: "icon-diamond")]
[assembly: NavigationLink(8010, "Theme Samples/Dashboard v2", url: "~/AdminLTE/DashboardV2", permission: "", icon: "icon-speedometer")]
[assembly: NavigationLink(8010, "Theme Samples/Widgets", url: "~/AdminLTE/Widgets", permission: "", icon: "fa-th")]

[assembly: NavigationMenu(9000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(9100, "Administration/Languages", typeof(Administration.LanguageController), icon: "icon-bubbles")]
[assembly: NavigationLink(9200, "Administration/Translations", typeof(Administration.TranslationController), icon: "icon-speech")]
[assembly: NavigationLink(9300, "Administration/Roles", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(9400, "Administration/User Management", typeof(Administration.UserController), icon: "icon-users")]
