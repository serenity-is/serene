
using Serenity.Services;
using System.Collections.Generic;

namespace Serene.BasicSamples
{
    public class OrdersByShipperRequest : ServiceRequest
    {
    }

    public class OrdersByShipperResponse : ServiceResponse
    {
        public List<Dictionary<string, object>> Values { get; set; }
        public List<string> ShipperKeys { get; set; }
        public List<string> ShipperLabels { get; set; } 
    }

    public class OrdersByShipperItem
    {
        public string label;
        public int value;
    }

    public class OrderBulkActionRequest : ServiceRequest
    {
        public List<int> OrderIDs { get; set; }
    }
}