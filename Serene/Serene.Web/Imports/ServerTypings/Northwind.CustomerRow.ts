namespace Serene.Northwind {
    export interface CustomerRow {
        ID?: number;
        CustomerID?: string;
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
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }

    export namespace CustomerRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Northwind.Customer';
        export const lookupKey = 'Northwind.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Northwind.Customer');
        }

        export namespace Fields {
            export declare const ID: string;
            export declare const CustomerID: string;
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
            export declare const NoteList: string;
            export declare const Representatives: string;
            export declare const LastContactDate: string;
            export declare const LastContactedBy: string;
            export declare const Email: string;
            export declare const SendBulletin: string;
        }

        [
            'ID', 
            'CustomerID', 
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
            'NoteList', 
            'Representatives', 
            'LastContactDate', 
            'LastContactedBy', 
            'Email', 
            'SendBulletin'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

