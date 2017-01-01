
namespace Serene.BasicSamples.Endpoints
{
    using Northwind.Entities;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Threading;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [ServiceAuthorize, Route("Services/BasicSamples/BasicSamples/" + R.Action)]
    [ConnectionKey(typeof(OrderRow))]
    public class BasicSamplesController : ServiceEndpoint
    {
        public OrdersByShipperResponse OrdersByShipper(IDbConnection connection, OrdersByShipperRequest request)
        {
            var fld = OrderRow.Fields;
            var year = DateTime.Today.Year;
            var startOfMonth = new DateTime(year, DateTime.Today.Month, 1);
            var startingFrom = startOfMonth.AddMonths(-11);

            var response = new OrdersByShipperResponse();
            var shippers = connection.List<ShipperRow>(q => q.SelectTableFields().OrderBy(ShipperRow.Fields.CompanyName));
            response.ShipperKeys = shippers.Select(x => "s" + x.ShipperID.Value).ToList();
            response.ShipperLabels = shippers.Select(x => x.CompanyName).ToList();

            var monthExpr = "DATEPART(MONTH, " + fld.OrderDate.Expression + ")";

            var byMonth = connection.Query(
                new SqlQuery()
                    .From(fld)
                    .Select(monthExpr, "Month")
                    .Select(Sql.Count(), "Count")
                    .Select(fld.ShipVia, "ShipVia")
                    .GroupBy(monthExpr)
                    .GroupBy(fld.ShipVia)
                    .Where(
                        fld.OrderDate.IsNotNull() &
                        fld.ShipVia.IsNotNull() &
                        fld.OrderDate < startOfMonth.AddMonths(1) &
                        fld.OrderDate >= startingFrom))
                    .ToDictionary(x => new Tuple<int, int>((int)x.Month, (int)x.ShipVia), x => (int)x.Count);

            response.Values = new List<Dictionary<string, object>>();
            var month = startingFrom.Month;
            int mc;
            for (var i = 0; i < 12; i++)
            {
                var d = new Dictionary<string, object>();
                d["Month"] = new DateTime(1999, month, 1)
                    .ToString("MMM");

                foreach (var p in shippers)
                    d["s" + p.ShipperID] = byMonth.TryGetValue(
                        new Tuple<int, int>(month, p.ShipperID.Value), out mc) ? mc : 0;

                response.Values.Add(d);

                if (++month > 12)
                    month = 1;
            }

            return response;
        }

        public ServiceResponse OrderBulkAction(IUnitOfWork uow, OrderBulkActionRequest request)
        {
            request.CheckNotNull();

            var random = new Random();

            // fail randomly with 3 percent chance
            if (random.Next(100) < 3)
                throw new ValidationError("Failed randomly!");

            foreach (var x in request.OrderIDs)
                Thread.Sleep(random.Next(400) + 100);

            return new ServiceResponse();
        }
    }
}
