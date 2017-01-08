namespace Serene.Northwind {
    export interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }

    export namespace CustomerDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Email';
        export const localTextPrefix = 'Northwind.CustomerDetails';

        export namespace Fields {
            export declare const Id: string;
            export declare const LastContactDate: string;
            export declare const LastContactedBy: string;
            export declare const Email: string;
            export declare const SendBulletin: string;
            export declare const LastContactedByLastName: string;
            export declare const LastContactedByFirstName: string;
            export declare const LastContactedByTitle: string;
            export declare const LastContactedByTitleOfCourtesy: string;
            export declare const LastContactedByBirthDate: string;
            export declare const LastContactedByHireDate: string;
            export declare const LastContactedByAddress: string;
            export declare const LastContactedByCity: string;
            export declare const LastContactedByRegion: string;
            export declare const LastContactedByPostalCode: string;
            export declare const LastContactedByCountry: string;
            export declare const LastContactedByHomePhone: string;
            export declare const LastContactedByExtension: string;
            export declare const LastContactedByPhoto: string;
            export declare const LastContactedByNotes: string;
            export declare const LastContactedByReportsTo: string;
            export declare const LastContactedByPhotoPath: string;
        }

        ['Id', 'LastContactDate', 'LastContactedBy', 'Email', 'SendBulletin', 'LastContactedByLastName', 'LastContactedByFirstName', 'LastContactedByTitle', 'LastContactedByTitleOfCourtesy', 'LastContactedByBirthDate', 'LastContactedByHireDate', 'LastContactedByAddress', 'LastContactedByCity', 'LastContactedByRegion', 'LastContactedByPostalCode', 'LastContactedByCountry', 'LastContactedByHomePhone', 'LastContactedByExtension', 'LastContactedByPhoto', 'LastContactedByNotes', 'LastContactedByReportsTo', 'LastContactedByPhotoPath'].forEach(x => (<any>Fields)[x] = x);
    }
}

