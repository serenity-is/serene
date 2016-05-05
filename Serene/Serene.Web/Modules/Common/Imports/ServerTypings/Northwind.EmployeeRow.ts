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
        export const idProperty = 'EmployeeID';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Northwind.Employee';
        export const lookupKey = 'Northwind.Employee';

        export function lookup() {
            return Q.getLookup('Northwind.Employee');
        }

        export namespace Fields {
            export declare const EmployeeID: string;
            export declare const LastName: string;
            export declare const FirstName: string;
            export declare const FullName: string;
            export declare const Title: string;
            export declare const TitleOfCourtesy: string;
            export declare const BirthDate: string;
            export declare const HireDate: string;
            export declare const Address: string;
            export declare const City: string;
            export declare const Region: string;
            export declare const PostalCode: string;
            export declare const Country: string;
            export declare const HomePhone: string;
            export declare const Extension: string;
            export declare const Photo: string;
            export declare const Notes: string;
            export declare const ReportsTo: string;
            export declare const PhotoPath: string;
            export declare const ReportsToFullName: string;
            export declare const ReportsToLastName: string;
            export declare const ReportsToFirstName: string;
            export declare const ReportsToTitle: string;
            export declare const ReportsToTitleOfCourtesy: string;
            export declare const ReportsToBirthDate: string;
            export declare const ReportsToHireDate: string;
            export declare const ReportsToAddress: string;
            export declare const ReportsToCity: string;
            export declare const ReportsToRegion: string;
            export declare const ReportsToPostalCode: string;
            export declare const ReportsToCountry: string;
            export declare const ReportsToHomePhone: string;
            export declare const ReportsToExtension: string;
            export declare const ReportsToPhoto: string;
            export declare const ReportsToNotes: string;
            export declare const ReportsToReportsTo: string;
            export declare const ReportsToPhotoPath: string;
            export declare const Gender: string;
        }

        ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Photo', 'Notes', 'ReportsTo', 'PhotoPath', 'ReportsToFullName', 'ReportsToLastName', 'ReportsToFirstName', 'ReportsToTitle', 'ReportsToTitleOfCourtesy', 'ReportsToBirthDate', 'ReportsToHireDate', 'ReportsToAddress', 'ReportsToCity', 'ReportsToRegion', 'ReportsToPostalCode', 'ReportsToCountry', 'ReportsToHomePhone', 'ReportsToExtension', 'ReportsToPhoto', 'ReportsToNotes', 'ReportsToReportsTo', 'ReportsToPhotoPath', 'Gender'].forEach(x => (<any>Fields)[x] = x);
    }
}

