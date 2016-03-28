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
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }

    export namespace OrderRow {
        export const idProperty = "OrderID";
        export const nameProperty = "CustomerID";
        export const localTextPrefix = "Northwind.Order";
        export const lookupKey = "Northwind.OrderShipCity";

        export function lookup() {
            return Q.getLookup("Northwind.OrderShipCity");
        }

        export namespace Fields {
            export declare const OrderID: "OrderID";
            export declare const CustomerID: "CustomerID";
            export declare const EmployeeID: "EmployeeID";
            export declare const OrderDate: "OrderDate";
            export declare const RequiredDate: "RequiredDate";
            export declare const ShippedDate: "ShippedDate";
            export declare const ShipVia: "ShipVia";
            export declare const Freight: "Freight";
            export declare const ShipName: "ShipName";
            export declare const ShipAddress: "ShipAddress";
            export declare const ShipCity: "ShipCity";
            export declare const ShipRegion: "ShipRegion";
            export declare const ShipPostalCode: "ShipPostalCode";
            export declare const ShipCountry: "ShipCountry";
            export declare const CustomerCompanyName: "CustomerCompanyName";
            export declare const CustomerContactName: "CustomerContactName";
            export declare const CustomerContactTitle: "CustomerContactTitle";
            export declare const CustomerCity: "CustomerCity";
            export declare const CustomerRegion: "CustomerRegion";
            export declare const CustomerCountry: "CustomerCountry";
            export declare const CustomerPhone: "CustomerPhone";
            export declare const CustomerFax: "CustomerFax";
            export declare const EmployeeFullName: "EmployeeFullName";
            export declare const EmployeeGender: "EmployeeGender";
            export declare const ShipViaCompanyName: "ShipViaCompanyName";
            export declare const ShipViaPhone: "ShipViaPhone";
            export declare const ShippingState: "ShippingState";
            export declare const DetailList: "DetailList";
        }

        ["OrderID","CustomerID","EmployeeID","OrderDate","RequiredDate","ShippedDate","ShipVia","Freight","ShipName","ShipAddress","ShipCity","ShipRegion","ShipPostalCode","ShipCountry","CustomerCompanyName","CustomerContactName","CustomerContactTitle","CustomerCity","CustomerRegion","CustomerCountry","CustomerPhone","CustomerFax","EmployeeFullName","EmployeeGender","ShipViaCompanyName","ShipViaPhone","ShippingState","DetailList"].forEach(x => (<any>Fields)[x] = x);
    }
}

