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

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Northwind.Supplier');
        }

        export namespace Fields {
            export declare const SupplierID: string;
            export declare const CompanyName: string;
            export declare const ContactName: string;
            export declare const ContactTitle: string;
            export declare const Address: string;
            export declare const City: string;
            export declare const Region: string;
            export declare const PostalCode: string;
            export declare const Country: string;
            export declare const Phone: string;
            export declare const Fax: string;
            export declare const HomePage: string;
        }

        [
            'SupplierID', 
            'CompanyName', 
            'ContactName', 
            'ContactTitle', 
            'Address', 
            'City', 
            'Region', 
            'PostalCode', 
            'Country', 
            'Phone', 
            'Fax', 
            'HomePage'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
