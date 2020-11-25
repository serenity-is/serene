using Serene.Northwind;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.BasicSamples.Forms
{
    /// <summary>
    /// A custom order form that contains read-only details about customer
    /// </summary>
    [FormScript("BasicSamples.PopulateLinkedData")]
    [BasedOnRow(typeof(Northwind.Entities.OrderRow), CheckNames = true)]
    public class PopulateLinkedDataForm
    {
        [Category("Order")]
        public String CustomerID { get; set; }

        [Category("Customer Details")]
        [ReadOnly(true)]
        public StringField CustomerContactName { get; set; }
        [ReadOnly(true)]
        public StringField CustomerContactTitle { get; set; }
        [ReadOnly(true)]
        public StringField CustomerCity { get; set; }
        [ReadOnly(true)]
        public StringField CustomerRegion { get; set; }
        [ReadOnly(true)]
        public StringField CustomerCountry { get; set; }
        [ReadOnly(true)]
        public StringField CustomerPhone { get; set; }
        [ReadOnly(true)]
        public StringField CustomerFax { get; set; }

        [Category("Order Details")]
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public Int32? EmployeeID { get; set; }
        [OrderDetailsEditor]
        public List<Northwind.Entities.OrderDetailRow> DetailList { get; set; } 
    }
}