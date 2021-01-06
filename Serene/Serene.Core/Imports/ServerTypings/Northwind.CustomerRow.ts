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
        export const deletePermission = 'Northwind:Customer:Delete';
        export const insertPermission = 'Northwind:Customer:Modify';
        export const readPermission = 'Northwind:Customer:View';
        export const updatePermission = 'Northwind:Customer:Modify';

        export declare const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            NoteList = "NoteList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin"
        }
    }
}
