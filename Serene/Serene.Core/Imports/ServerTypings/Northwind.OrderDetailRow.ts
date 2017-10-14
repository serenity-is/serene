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
            export declare const DetailID: string;
            export declare const OrderID: string;
            export declare const ProductID: string;
            export declare const UnitPrice: string;
            export declare const Quantity: string;
            export declare const Discount: string;
            export declare const OrderCustomerID: string;
            export declare const OrderEmployeeID: string;
            export declare const OrderDate: string;
            export declare const OrderShippedDate: string;
            export declare const OrderShipVia: string;
            export declare const OrderShipCity: string;
            export declare const OrderShipCountry: string;
            export declare const ProductName: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductSupplierID: string;
            export declare const ProductQuantityPerUnit: string;
            export declare const ProductUnitPrice: string;
            export declare const LineTotal: string;
        }

        [
            'DetailID', 
            'OrderID', 
            'ProductID', 
            'UnitPrice', 
            'Quantity', 
            'Discount', 
            'OrderCustomerID', 
            'OrderEmployeeID', 
            'OrderDate', 
            'OrderShippedDate', 
            'OrderShipVia', 
            'OrderShipCity', 
            'OrderShipCountry', 
            'ProductName', 
            'ProductDiscontinued', 
            'ProductSupplierID', 
            'ProductQuantityPerUnit', 
            'ProductUnitPrice', 
            'LineTotal'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
