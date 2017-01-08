namespace Serene.Northwind {
    export interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }

    export namespace EmployeeTerritoryRow {
        export const idProperty = 'EmployeeID';
        export const nameProperty = 'TerritoryID';
        export const localTextPrefix = 'Northwind.EmployeeTerritory';

        export namespace Fields {
            export declare const EmployeeID: string;
            export declare const TerritoryID: string;
            export declare const EmployeeLastName: string;
            export declare const EmployeeFirstName: string;
            export declare const EmployeeTitle: string;
            export declare const EmployeeTitleOfCourtesy: string;
            export declare const EmployeeBirthDate: string;
            export declare const EmployeeHireDate: string;
            export declare const EmployeeAddress: string;
            export declare const EmployeeCity: string;
            export declare const EmployeeRegion: string;
            export declare const EmployeePostalCode: string;
            export declare const EmployeeCountry: string;
            export declare const EmployeeHomePhone: string;
            export declare const EmployeeExtension: string;
            export declare const EmployeePhoto: string;
            export declare const EmployeeNotes: string;
            export declare const EmployeeReportsTo: string;
            export declare const EmployeePhotoPath: string;
            export declare const TerritoryTerritoryDescription: string;
            export declare const TerritoryRegionID: string;
        }

        ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeTitle', 'EmployeeTitleOfCourtesy', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeRegion', 'EmployeePostalCode', 'EmployeeCountry', 'EmployeeHomePhone', 'EmployeeExtension', 'EmployeePhoto', 'EmployeeNotes', 'EmployeeReportsTo', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(x => (<any>Fields)[x] = x);
    }
}

