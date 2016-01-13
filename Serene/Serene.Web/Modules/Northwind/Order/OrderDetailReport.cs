
namespace Serene.Northwind
{
    using Entities;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Northwind.OrderDetail")]
    [ReportDesign(MVC.Views.Northwind.Order.OrderDetailReport)]
    public class OrderDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 OrderID { get; set; }

        public object GetData()
        {
            var data = new OrderDetailReportData();

            using (var connection = SqlConnections.NewFor<OrderRow>())
            {
                var o = OrderRow.Fields;

                data.Order = connection.TryById<OrderRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.EmployeeFullName)
                     .Select(o.ShipViaCompanyName)) ?? new OrderRow();

                var od = OrderDetailRow.Fields;
                data.Details = connection.List<OrderDetailRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Select(od.LineTotal)
                    .Where(od.OrderID == this.OrderID));

                var c = CustomerRow.Fields;
                data.Customer = connection.TryFirst<CustomerRow>(c.CustomerID == data.Order.CustomerID)
                    ?? new CustomerRow();
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // converter.MarginsAll = "2cm";
        }
    }

    public class OrderDetailReportData
    {
        public OrderRow Order { get; set; }
        public List<OrderDetailRow> Details { get; set; }
        public CustomerRow Customer { get; set; }
    }
}