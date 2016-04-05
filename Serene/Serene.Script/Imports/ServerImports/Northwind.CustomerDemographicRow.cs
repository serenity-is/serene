using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Northwind
{
    [Imported, Serializable, PreserveMemberCase]
    public partial class CustomerDemographicRow
    {
        [InlineConstant] public const string IdProperty = "ID";
        [InlineConstant] public const string NameProperty = "CustomerTypeID";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.CustomerDemographic";

        public Int32? ID { get; set; }
        public String CustomerTypeID { get; set; }
        public String CustomerDesc { get; set; }

        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string ID = "ID";
            [InlineConstant] public const string CustomerTypeID = "CustomerTypeID";
            [InlineConstant] public const string CustomerDesc = "CustomerDesc";
        }
    }
}

