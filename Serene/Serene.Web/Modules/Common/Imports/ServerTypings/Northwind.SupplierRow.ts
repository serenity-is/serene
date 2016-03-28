namespace Serene.Northwind {
    export interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierID';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Northwind.Supplier';
        export const lookupKey = 'Northwind.Supplier';

        export function lookup() {
            return Q.getLookup('Northwind.Supplier');
        }

        export namespace Fields {
            export declare const SupplierID: 'SupplierID';
            export declare const CompanyName: 'CompanyName';
            export declare const ContactName: 'ContactName';
            export declare const ContactTitle: 'ContactTitle';
            export declare const Address: 'Address';
            export declare const City: 'City';
            export declare const Region: 'Region';
            export declare const PostalCode: 'PostalCode';
            export declare const Country: 'Country';
            export declare const Phone: 'Phone';
            export declare const Fax: 'Fax';
            export declare const HomePage: 'HomePage';
        }

        ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage'].forEach(x => (<any>Fields)[x] = x);
    }
}

