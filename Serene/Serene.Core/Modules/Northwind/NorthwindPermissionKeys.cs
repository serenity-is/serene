
using Serenity.Extensibility;
using System.ComponentModel;

namespace Serene.Northwind
{
    [NestedPermissionKeys]
    [DisplayName("Northwind")]
    public class PermissionKeys
    {
        [DisplayName("Customers")]
        public class Customer
        {
            public const string Delete = "Northwind:Customer:Delete";
            [Description("Create/Update")]
            public const string Modify = "Northwind:Customer:Modify";
            public const string View = "Northwind:Customer:View";
        }

        [Description("[General]")]
        public const string General = "Northwind:General";
    }
}
