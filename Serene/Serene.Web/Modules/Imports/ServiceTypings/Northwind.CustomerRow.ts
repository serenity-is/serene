namespace Serene.Northwind
{
    export interface CustomerRow
    {
        ID: number;
        CustomerID: string;
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
        NoteList: NoteRow[];
        Representatives: number[];
    }

    export namespace CustomerRow
    {
        export const IdProperty = "ID";
        export const NameProperty = "CompanyName";
        export const LocalTextPrefix = "Northwind.Customer";
        export const LookupKey = "Northwind.Customer";

        export namespace Fields
        {
            export declare const ID: "ID";
            export declare const CustomerID: "CustomerID";
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
            export declare const NoteList: "NoteList";
            export declare const Representatives: "Representatives";
        }

        ["ID","CustomerID","CompanyName","ContactName","ContactTitle","Address","City","Region","PostalCode","Country","Phone","Fax","NoteList","Representatives"].forEach(x => (<any>Fields)[x] = x);
    }
}

