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
    public partial class OrderForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Northwind.Order";

        public OrderForm(string idPrefix) : base(idPrefix) {}

        public CustomerEditor CustomerID { [InlineCode("{this}.w('CustomerID', Serene.Northwind.CustomerEditor)")] get; private set; }
        public DateEditor OrderDate { [InlineCode("{this}.w('OrderDate', Serenity.DateEditor)")] get; private set; }
        public DateEditor RequiredDate { [InlineCode("{this}.w('RequiredDate', Serenity.DateEditor)")] get; private set; }
        public LookupEditor EmployeeID { [InlineCode("{this}.w('EmployeeID', Serenity.LookupEditor)")] get; private set; }
        public OrderDetailsEditor DetailList { [InlineCode("{this}.w('DetailList', Serene.Northwind.OrderDetailsEditor)")] get; private set; }
        public DateEditor ShippedDate { [InlineCode("{this}.w('ShippedDate', Serenity.DateEditor)")] get; private set; }
        public LookupEditor ShipVia { [InlineCode("{this}.w('ShipVia', Serenity.LookupEditor)")] get; private set; }
        public DecimalEditor Freight { [InlineCode("{this}.w('Freight', Serenity.DecimalEditor)")] get; private set; }
        public StringEditor ShipName { [InlineCode("{this}.w('ShipName', Serenity.StringEditor)")] get; private set; }
        public StringEditor ShipAddress { [InlineCode("{this}.w('ShipAddress', Serenity.StringEditor)")] get; private set; }
        public StringEditor ShipCity { [InlineCode("{this}.w('ShipCity', Serenity.StringEditor)")] get; private set; }
        public StringEditor ShipRegion { [InlineCode("{this}.w('ShipRegion', Serenity.StringEditor)")] get; private set; }
        public StringEditor ShipPostalCode { [InlineCode("{this}.w('ShipPostalCode', Serenity.StringEditor)")] get; private set; }
        public StringEditor ShipCountry { [InlineCode("{this}.w('ShipCountry', Serenity.StringEditor)")] get; private set; }
    }
}

