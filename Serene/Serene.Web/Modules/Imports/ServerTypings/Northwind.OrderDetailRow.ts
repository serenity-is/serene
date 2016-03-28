namespace Serene.Northwind {
    export interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }

    export namespace OrderDetailRow {
        export const idProperty = 'DetailID';
        export const localTextPrefix = 'Northwind.OrderDetail';

        export namespace Fields {
            export declare const DetailID: 'DetailID';
            export declare const OrderID: 'OrderID';
            export declare const ProductID: 'ProductID';
            export declare const UnitPrice: 'UnitPrice';
            export declare const Quantity: 'Quantity';
            export declare const Discount: 'Discount';
            export declare const OrderCustomerID: 'OrderCustomerID';
            export declare const OrderEmployeeID: 'OrderEmployeeID';
            export declare const OrderDate: 'OrderDate';
            export declare const OrderShippedDate: 'OrderShippedDate';
            export declare const OrderShipVia: 'OrderShipVia';
            export declare const OrderShipCity: 'OrderShipCity';
            export declare const OrderShipCountry: 'OrderShipCountry';
            export declare const ProductName: 'ProductName';
            export declare const ProductDiscontinued: 'ProductDiscontinued';
            export declare const ProductSupplierID: 'ProductSupplierID';
            export declare const ProductQuantityPerUnit: 'ProductQuantityPerUnit';
            export declare const ProductUnitPrice: 'ProductUnitPrice';
            export declare const LineTotal: 'LineTotal';
        }

        ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(x => (<any>Fields)[x] = x);
    }
}

