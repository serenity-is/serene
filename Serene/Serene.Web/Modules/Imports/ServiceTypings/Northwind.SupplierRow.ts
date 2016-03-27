namespace Serene.Northwind
{
    export interface SupplierRow
    {
        SupplierID: number;
        CompanyName: string;
        ContactName: string;
        ContactTitle: string;
        Address: string;
        City: string;
        Region: string;
        PostalCode: string;
        Country: string;
        Phone: string;
        Fax: string;
        HomePage: string;
    }

    export namespace SupplierRow
    {
        export const IdProperty = "SupplierID";
        export const NameProperty = "CompanyName";
        export const LocalTextPrefix = "Northwind.Supplier";
        export const LookupKey = "Northwind.Supplier";

        export namespace Fields
        {
            export declare const SupplierID: "SupplierID";
            export declare const CompanyName: "CompanyName";
            export declare const ContactName: "ContactName";
            export declare const ContactTitle: "ContactTitle";
            export declare const Address: "Address";
            export declare const City: "City";
            export declare const Region: "Region";
            export declare const PostalCode: "PostalCode";
            export declare const Country: "Country";
            export declare const Phone: "Phone";
            export declare const Fax: "Fax";
            export declare const HomePage: "HomePage";
        }

        ["SupplierID","CompanyName","ContactName","ContactTitle","Address","City","Region","PostalCode","Country","Phone","Fax","HomePage"].forEach(x => (<any>Fields)[x] = x);
    }
}

