
namespace Serene.Northwind
{
    using Common;
    using jQueryApi;
    using Serenity;
    using System.Linq;

    [ColumnsKey("Northwind.OrderDetail"), DialogType(typeof(OrderDetailDialog)), LocalTextPrefix("Northwind.OrderDetail")]
    public class OrderDetailsEditor : GridEditorBase<OrderDetailRow>
    {
        public OrderDetailsEditor(jQueryObject container)
            : base(container)
        {
        }

        protected override bool ValidateEntity(OrderDetailRow row, int? id)
        {
            row.ProductID = row.ProductID.ToInt32();

            var sameProduct = view.GetItems().FirstOrDefault(x => x.ProductID == row.ProductID);
            if (sameProduct != null && ID(sameProduct) != id)
            {
                Q.Alert("This product is already in order details!");
                return false;
            }
            
            row.ProductName = ProductRow.Lookup.ItemById[row.ProductID].ProductName;
            row.LineTotal = (row.Quantity ?? 0) * (row.UnitPrice ?? 0) - (decimal)(row.Discount ?? 0);

            return true;
        }
    }
}