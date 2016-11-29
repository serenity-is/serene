using Serenity.Navigation;
using Organization = Serene.Organization.Pages;

[assembly: NavigationMenu(8000, "Organization", icon: "icon-anchor")]
[assembly: NavigationLink(8000, "Organization/Business Units", typeof(Organization.BusinessUnitController))]
[assembly: NavigationLink(8000, "Organization/Contacts", typeof(Organization.ContactController))]