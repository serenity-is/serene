using Serenity.ComponentModel;
using System;

namespace Serene.Northwind.Forms
{
    [FormScript("Northwind.Shipper")]
    [BasedOnRow(typeof(Entities.ShipperRow), CheckNames = true)]
    public class ShipperForm
    {
        public String CompanyName { get; set; }
        [Northwind.PhoneEditor]
        public String Phone { get; set; }
    }
}