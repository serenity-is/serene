using System.Collections.Generic;
using Serenity.Navigation;
using Serenity.Data;
using Serenity.Services;
using Serene.Northwind.Repositories;
using Serene.Northwind.Pages;

[assembly: NavigationMenu(7900, "Basic Samples", icon: "icon-magic-wand")]

public class DynamicNavigationSample : INavigationItemSource
{
    public List<NavigationItemAttribute> GetItems()
    {
        var items = new List<NavigationItemAttribute>
        {
            new NavigationMenuAttribute(7970, "Basic Samples/Dynamic Navigation", "icon-paper-plane")
        };

        // Add product categories as dynamic navigation items for demo purpose
        using (var connection = SqlConnections.NewByKey("Northwind"))
        {
            var categories = new CategoryRepository().List(connection, new ListRequest()).Entities;            
            foreach (var category in categories)
                items.Add(new NavigationLinkAttribute(7970, "Basic Samples/Dynamic Navigation/" + 
                    category.CategoryName.Replace("/", ", "),
                    typeof(CategoryController), icon: "icon-folder-alt"));
        }

        return items;
    }
}