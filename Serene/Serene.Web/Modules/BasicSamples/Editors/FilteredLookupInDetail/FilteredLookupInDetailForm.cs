
namespace Serene.BasicSamples.Forms
{
    using Northwind.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    /// <summary>
    /// This is a basic Order form for FilteredLookupInDetailDialog sample.
    /// </summary>
    [FormScript("BasicSamples.FilteredLookupInDetail")]
    [BasedOnRow(typeof(Northwind.Entities.OrderRow), CheckNames = true)]
    public class FilteredLookupInDetailForm
    {
        public String CustomerID { get; set; }
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }

        /// <summary>
        /// We use OneWay here for this sample, because we don't
        /// actually have a CategoryID field in order row.
        /// Otherwise it would be serialized to JSON on save, 
        /// and as we didn't have such a field in OrderRow,
        /// it would raise an error on deserialization.
        /// </summary>
        [LookupEditor(typeof(CategoryRow)), OneWay, NotMapped]
        public Int32? CategoryID { get; set; }

        [Category("Order Details")]
        [FilteredLookupDetailEditor]
        public List<OrderDetailRow> DetailList { get; set; }
    }
}