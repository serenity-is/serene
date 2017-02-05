using Serenity.Navigation;
using Administration = Serene.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(9000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: Serene.Administration.PermissionKeys.Security, icon: "icon-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "icon-bubbles")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "icon-speech")]
[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "icon-magic-wand")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people")]