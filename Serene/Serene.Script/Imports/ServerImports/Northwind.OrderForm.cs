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

        public CustomerEditor CustomerID { [InlineCode("{this}.w('CustomerID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DateEditor OrderDate { [InlineCode("{this}.w('OrderDate', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DateEditor RequiredDate { [InlineCode("{this}.w('RequiredDate', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public LookupEditor EmployeeID { [InlineCode("{this}.w('EmployeeID', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public OrderDetailsEditor DetailList { [InlineCode("{this}.w('DetailList', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DateEditor ShippedDate { [InlineCode("{this}.w('ShippedDate', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public LookupEditor ShipVia { [InlineCode("{this}.w('ShipVia', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public DecimalEditor Freight { [InlineCode("{this}.w('Freight', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor ShipName { [InlineCode("{this}.w('ShipName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor ShipAddress { [InlineCode("{this}.w('ShipAddress', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor ShipCity { [InlineCode("{this}.w('ShipCity', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor ShipRegion { [InlineCode("{this}.w('ShipRegion', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor ShipPostalCode { [InlineCode("{this}.w('ShipPostalCode', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor ShipCountry { [InlineCode("{this}.w('ShipCountry', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

