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
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            SupplierID = "SupplierID",
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
            HomePage = "HomePage"
        }
    }
}

