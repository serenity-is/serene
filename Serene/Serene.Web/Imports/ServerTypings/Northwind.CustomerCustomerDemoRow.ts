namespace Serene.Northwind {
    export interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }

    export namespace CustomerCustomerDemoRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CustomerID';
        export const localTextPrefix = 'Northwind.CustomerCustomerDemo';

        export namespace Fields {
            export declare const ID: string;
            export declare const CustomerID: string;
            export declare const CustomerTypeID: string;
            export declare const CustomerCompanyName: string;
            export declare const CustomerContactName: string;
            export declare const CustomerContactTitle: string;
            export declare const CustomerAddress: string;
            export declare const CustomerCity: string;
            export declare const CustomerRegion: string;
            export declare const CustomerPostalCode: string;
            export declare const CustomerCountry: string;
            export declare const CustomerPhone: string;
            export declare const CustomerFax: string;
            export declare const CustomerTypeCustomerDesc: string;
        }

        [
            'ID', 
            'CustomerID', 
            'CustomerTypeID', 
            'CustomerCompanyName', 
            'CustomerContactName', 
            'CustomerContactTitle', 
            'CustomerAddress', 
            'CustomerCity', 
            'CustomerRegion', 
            'CustomerPostalCode', 
            'CustomerCountry', 
            'CustomerPhone', 
            'CustomerFax', 
            'CustomerTypeCustomerDesc'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

