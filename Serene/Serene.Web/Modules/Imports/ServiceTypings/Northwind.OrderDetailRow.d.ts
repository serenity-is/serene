declare namespace Serene.Northwind {
    interface OrderDetailRow {
        DetailID: number;
        OrderID: number;
        ProductID: number;
        UnitPrice: number;
        Quantity: number;
        Discount: number;
        OrderCustomerID: string;
        OrderEmployeeID: number;
        OrderDate: string;
        OrderShippedDate: string;
        OrderShipVia: number;
        OrderShipCity: string;
        OrderShipCountry: string;
        ProductName: string;
        ProductDiscontinued: boolean;
        ProductSupplierID: number;
        ProductQuantityPerUnit: string;
        ProductUnitPrice: number;
        LineTotal: number;
    }
    namespace OrderDetailRow {
        const IdProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const DetailID: "DetailID";
            const OrderID: "OrderID";
            const ProductID: "ProductID";
            const UnitPrice: "UnitPrice";
            const Quantity: "Quantity";
            const Discount: "Discount";
            const OrderCustomerID: "OrderCustomerID";
            const OrderEmployeeID: "OrderEmployeeID";
            const OrderDate: "OrderDate";
            const OrderShippedDate: "OrderShippedDate";
            const OrderShipVia: "OrderShipVia";
            const OrderShipCity: "OrderShipCity";
            const OrderShipCountry: "OrderShipCountry";
            const ProductName: "ProductName";
            const ProductDiscontinued: "ProductDiscontinued";
            const ProductSupplierID: "ProductSupplierID";
            const ProductQuantityPerUnit: "ProductQuantityPerUnit";
            const ProductUnitPrice: "ProductUnitPrice";
            const LineTotal: "LineTotal";
        }
    }
}
