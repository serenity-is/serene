
namespace Serene.Northwind
{
    using Entities;
    using Serenity.Data;
    using Serenity.Reporting;

    [RegisterReport("Northwind.Order.OrderDetail")]
    public class OrderDetailReport : IReport
    {
        public object GetData()
        {
            using (var connection = SqlConnections.NewFor<OrderRow>())
            {
                return connection.List<OrderRow>();
            }
        }
    }
}