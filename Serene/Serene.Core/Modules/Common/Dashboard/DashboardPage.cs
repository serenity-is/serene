using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;

namespace Serene.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index(
        	//<if:Northwind>
        	[FromServices] ITwoLevelCache cache,
        	[FromServices] ISqlConnections sqlConnections
        	//</if:Northwind>
        	)
        {
            //<if:Northwind>
            if (cache is null)
            	throw new ArgumentNullException(nameof(cache));

            if (sqlConnections is null)
            	throw new ArgumentNullException(nameof(sqlConnections));

            var o = Serenity.Demo.Northwind.Entities.OrderRow.Fields;

            var cachedModel = cache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                o.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    using (var connection = sqlConnections.NewFor<Serenity.Demo.Northwind.Entities.OrderRow>())
                    {
                        model.OpenOrders = connection.Count<Serenity.Demo.Northwind.Entities.OrderRow>(
                            o.ShippingState == (int)Serenity.Demo.Northwind.OrderShippingState.NotShipped);
                        var closedOrders = connection.Count<Serenity.Demo.Northwind.Entities.OrderRow>(
                            o.ShippingState == (int)Serenity.Demo.Northwind.OrderShippingState.Shipped);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / totalOrders * 100));
                        model.CustomerCount = connection.Count<Serenity.Demo.Northwind.Entities.CustomerRow>();
                        model.ProductCount = connection.Count<Serenity.Demo.Northwind.Entities.ProductRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
            //<else>
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
            //</if:Northwind>
        }
    }
}
