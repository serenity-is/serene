namespace SereneSample.Northwind.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.CustomerGrosSalesRepository;
    using MyRow = Entities.CustomerGrossSalesRow;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;
    [RoutePrefix("Services/Northwind/CustomerGrossSales"), Route("{action}")]
    [ConnectionKey("Northwind"), ServiceAuthorize("Northwind:General")]
    public class CustomerGrossSalesController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.CustomerGrossSalesColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "SummaryReport_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}