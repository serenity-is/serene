namespace Serene.Northwind {
    export interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }

    export namespace OrderRow {
        export const idProperty = 'OrderID';
        export const nameProperty = 'CustomerID';
        export const localTextPrefix = 'Northwind.Order';
        export const lookupKey = 'Northwind.OrderShipCity';

        export function getLookup(): Q.Lookup<OrderRow> {
            return Q.getLookup<OrderRow>('Northwind.OrderShipCity');
        }

        export namespace Fields {
            export declare const OrderID: string;
            export declare const CustomerID: string;
            export declare const EmployeeID: string;
            export declare const OrderDate: string;
            export declare const RequiredDate: string;
            export declare const ShippedDate: string;
            export declare const ShipVia: string;
            export declare const Freight: string;
            export declare const ShipName: string;
            export declare const ShipAddress: string;
            export declare const ShipCity: string;
            export declare const ShipRegion: string;
            export declare const ShipPostalCode: string;
            export declare const ShipCountry: string;
            export declare const CustomerCompanyName: string;
            export declare const CustomerContactName: string;
            export declare const CustomerContactTitle: string;
            export declare const CustomerCity: string;
            export declare const CustomerRegion: string;
            export declare const CustomerCountry: string;
            export declare const CustomerPhone: string;
            export declare const CustomerFax: string;
            export declare const EmployeeFullName: string;
            export declare const EmployeeGender: string;
            export declare const EmployeeReportsToFullName: string;
            export declare const ShipViaCompanyName: string;
            export declare const ShipViaPhone: string;
            export declare const ShippingState: string;
            export declare const DetailList: string;
        }

        [
            'OrderID', 
            'CustomerID', 
            'EmployeeID', 
            'OrderDate', 
            'RequiredDate', 
            'ShippedDate', 
            'ShipVia', 
            'Freight', 
            'ShipName', 
            'ShipAddress', 
            'ShipCity', 
            'ShipRegion', 
            'ShipPostalCode', 
            'ShipCountry', 
            'CustomerCompanyName', 
            'CustomerContactName', 
            'CustomerContactTitle', 
            'CustomerCity', 
            'CustomerRegion', 
            'CustomerCountry', 
            'CustomerPhone', 
            'CustomerFax', 
            'EmployeeFullName', 
            'EmployeeGender', 
            'EmployeeReportsToFullName', 
            'ShipViaCompanyName', 
            'ShipViaPhone', 
            'ShippingState', 
            'DetailList'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
