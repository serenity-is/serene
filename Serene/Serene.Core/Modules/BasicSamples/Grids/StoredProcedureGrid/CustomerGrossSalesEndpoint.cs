using Microsoft.AspNetCore.Mvc;
using MyRepository = Serene.BasicSamples.Repositories.CustomerGrossSalesRepository;
using MyRow = Serene.Northwind.Entities.CustomerGrossSalesRow;
using Serenity.Data;
using Serenity.PropertyGrid;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;

namespace Serene.BasicSamples.Endpoints
{
    [Route("Services/BasicSamples/CustomerGrossSales/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CustomerGrossSalesController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, CustomerGrossSalesListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, CustomerGrossSalesListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, 
            	typeof(Columns.CustomerGrossSalesColumns), HttpContext.RequestServices);
            var bytes = ReportRepository.Render(report);
            return ExcelContentResult.Create(bytes, "CustomerGrossSales_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
