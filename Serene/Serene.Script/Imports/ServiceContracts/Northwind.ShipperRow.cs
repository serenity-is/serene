
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class ShipperRow
    {
        [InlineConstant] public const string IdProperty = "ShipperID";
        [InlineConstant] public const string NameProperty = "CompanyName";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Shipper";
        [InlineConstant] public const string LookupKey = "Northwind.Shipper";
    
        public static Lookup<ShipperRow> Lookup { [InlineCode("Q.getLookup('Northwind.Shipper')")] get { return null; } }
    
        public Int32? ShipperID { get; set; }
        public String CompanyName { get; set; }
        public String Phone { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string ShipperID = "ShipperID";
            [InlineConstant] public const string CompanyName = "CompanyName";
            [InlineConstant] public const string Phone = "Phone";
        }
    }
    
}

