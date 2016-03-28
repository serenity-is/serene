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
            export declare const ID: 'ID';
            export declare const CustomerID: 'CustomerID';
            export declare const CustomerTypeID: 'CustomerTypeID';
            export declare const CustomerCompanyName: 'CustomerCompanyName';
            export declare const CustomerContactName: 'CustomerContactName';
            export declare const CustomerContactTitle: 'CustomerContactTitle';
            export declare const CustomerAddress: 'CustomerAddress';
            export declare const CustomerCity: 'CustomerCity';
            export declare const CustomerRegion: 'CustomerRegion';
            export declare const CustomerPostalCode: 'CustomerPostalCode';
            export declare const CustomerCountry: 'CustomerCountry';
            export declare const CustomerPhone: 'CustomerPhone';
            export declare const CustomerFax: 'CustomerFax';
            export declare const CustomerTypeCustomerDesc: 'CustomerTypeCustomerDesc';
        }

        ['ID', 'CustomerID', 'CustomerTypeID', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerTypeCustomerDesc'].forEach(x => (<any>Fields)[x] = x);
    }
}

