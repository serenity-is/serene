
namespace Serene.Common.Pages
{
    //<if:Northwind>
    using Northwind;
    using Northwind.Entities;
    //</if:Northwind>
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif

    [Route("Dashboard/" + R.ActionIndex)]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            //<if:Northwind>
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                OrderRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = OrderRow.Fields;
                    using (var connection = SqlConnections.NewFor<OrderRow>())
                    {
                        model.OpenOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.NotShipped);
                        var closedOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / (double)totalOrders * 100));
                        model.CustomerCount = connection.Count<CustomerRow>();
                        model.ProductCount = connection.Count<ProductRow>();
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
