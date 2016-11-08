using Serenity.Navigation;
using Northwind = Serene.Northwind.Pages;

[assembly: NavigationMenu(7000, "Northwind", icon: "icon-anchor")]
[assembly: NavigationLink(7100, "Northwind/Customers", typeof(Northwind.CustomerController), icon: "icon-wallet")]
[assembly: NavigationLink(7200, "Northwind/Orders", typeof(Northwind.OrderController), icon: "icon-basket-loaded")]
[assembly: NavigationLink(7300, "Northwind/Products", typeof(Northwind.ProductController), icon: "icon-present")]
[assembly: NavigationLink(7400, "Northwind/Suppliers", typeof(Northwind.SupplierController), icon: "icon-magic-wand")]
[assembly: NavigationLink(7500, "Northwind/Shippers", typeof(Northwind.ShipperController), icon: "icon-plane")]
[assembly: NavigationLink(7600, "Northwind/Categories", typeof(Northwind.CategoryController), icon: "icon-folder-alt")]
[assembly: NavigationLink(7700, "Northwind/Regions", typeof(Northwind.RegionController), icon: "icon-map")]
[assembly: NavigationLink(7800, "Northwind/Territories", typeof(Northwind.TerritoryController), icon: "icon-puzzle")]
[assembly: NavigationLink(7900, "Northwind/Reports", typeof(Northwind.ReportsController), icon: "icon-docs")]
