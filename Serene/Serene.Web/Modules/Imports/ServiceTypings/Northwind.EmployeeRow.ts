namespace Serene.Northwind {
    export interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }

    export namespace EmployeeRow {
        export const idProperty = "EmployeeID";
        export const nameProperty = "FullName";
        export const localTextPrefix = "Northwind.Employee";
        export const lookupKey = "Northwind.Employee";

        export function lookup() {
            return Q.getLookup("Northwind.Employee");
        }

        export namespace Fields {
            export declare const EmployeeID: "EmployeeID";
            export declare const LastName: "LastName";
            export declare const FirstName: "FirstName";
            export declare const FullName: "FullName";
            export declare const Title: "Title";
            export declare const TitleOfCourtesy: "TitleOfCourtesy";
            export declare const BirthDate: "BirthDate";
            export declare const HireDate: "HireDate";
            export declare const Address: "Address";
            export declare const City: "City";
            export declare const Region: "Region";
            export declare const PostalCode: "PostalCode";
            export declare const Country: "Country";
            export declare const HomePhone: "HomePhone";
            export declare const Extension: "Extension";
            export declare const Photo: "Photo";
            export declare const Notes: "Notes";
            export declare const ReportsTo: "ReportsTo";
            export declare const PhotoPath: "PhotoPath";
            export declare const ReportsToFullName: "ReportsToFullName";
            export declare const ReportsToLastName: "ReportsToLastName";
            export declare const ReportsToFirstName: "ReportsToFirstName";
            export declare const ReportsToTitle: "ReportsToTitle";
            export declare const ReportsToTitleOfCourtesy: "ReportsToTitleOfCourtesy";
            export declare const ReportsToBirthDate: "ReportsToBirthDate";
            export declare const ReportsToHireDate: "ReportsToHireDate";
            export declare const ReportsToAddress: "ReportsToAddress";
            export declare const ReportsToCity: "ReportsToCity";
            export declare const ReportsToRegion: "ReportsToRegion";
            export declare const ReportsToPostalCode: "ReportsToPostalCode";
            export declare const ReportsToCountry: "ReportsToCountry";
            export declare const ReportsToHomePhone: "ReportsToHomePhone";
            export declare const ReportsToExtension: "ReportsToExtension";
            export declare const ReportsToPhoto: "ReportsToPhoto";
            export declare const ReportsToNotes: "ReportsToNotes";
            export declare const ReportsToReportsTo: "ReportsToReportsTo";
            export declare const ReportsToPhotoPath: "ReportsToPhotoPath";
            export declare const Gender: "Gender";
        }

        ["EmployeeID","LastName","FirstName","FullName","Title","TitleOfCourtesy","BirthDate","HireDate","Address","City","Region","PostalCode","Country","HomePhone","Extension","Photo","Notes","ReportsTo","PhotoPath","ReportsToFullName","ReportsToLastName","ReportsToFirstName","ReportsToTitle","ReportsToTitleOfCourtesy","ReportsToBirthDate","ReportsToHireDate","ReportsToAddress","ReportsToCity","ReportsToRegion","ReportsToPostalCode","ReportsToCountry","ReportsToHomePhone","ReportsToExtension","ReportsToPhoto","ReportsToNotes","ReportsToReportsTo","ReportsToPhotoPath","Gender"].forEach(x => (<any>Fields)[x] = x);
    }
}

